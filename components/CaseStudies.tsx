"use client";
import { useState, useEffect, useRef } from "react";
import { TrendingUp } from "lucide-react";

interface Metric { label: string; value: string }
interface CaseStudy {
  id: string;
  tag: string;
  client: string;
  role: string;
  window?: string;
  summary: string;
  metrics?: Metric[];
  points?: string[];
}

export default function CaseStudies({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState(0);
  const panelRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !tabsRef.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(tabsRef.current!, {
          opacity: 0, y: 24, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: tabsRef.current, start: "top 85%" },
        });
      });
    });
  }, []);

  if (!caseStudies || caseStudies.length === 0) return null;
  const cs = caseStudies[active];

  return (
    <section id="work" className="section-pad bg-navy-900/3 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="space-y-2">
          <div className="module-label">Case Studies</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
            Work That Moved the Needle
          </h2>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap gap-2" role="tablist" aria-label="Case studies">
          {caseStudies.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === active}
              aria-controls={`panel-${s.id}`}
              onClick={() => setActive(i)}
              className={`px-4 py-2 rounded text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 ${
                i === active
                  ? "bg-navy-900 dark:bg-ember-500 text-white"
                  : "bg-white dark:bg-ink-800 text-ink-600 dark:text-mist-400 border border-navy-900/10 dark:border-mist-700/20 hover:border-ember-500/30 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              {s.client}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div
          ref={panelRef}
          id={`panel-${cs.id}`}
          role="tabpanel"
          className="module-frame p-8 space-y-8"
        >
          <div className="flex flex-wrap items-start gap-4 justify-between">
            <div className="space-y-1">
              <span className="module-label">{cs.tag}</span>
              <h3 className="font-serif text-2xl font-semibold text-navy-900 dark:text-white">
                {cs.client}
              </h3>
              <div className="text-ink-500 dark:text-mist-400 text-sm">
                {cs.role}
                {cs.window && <> · {cs.window}</>}
              </div>
            </div>
            <TrendingUp className="text-ember-500 shrink-0" size={28} />
          </div>

          <p className="text-ink-600 dark:text-mist-300 leading-relaxed">{cs.summary}</p>

          {cs.metrics && cs.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6 border-y border-navy-900/10 dark:border-mist-700/20">
              {cs.metrics.map((m) => (
                <div key={m.label} className="space-y-1">
                  <div className="kpi-readout text-3xl">{m.value}</div>
                  <div className="text-xs text-ink-500 dark:text-mist-500 uppercase tracking-widest">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {cs.points && cs.points.length > 0 && (
            <ul className="space-y-2">
              {cs.points.map((pt, i) => (
                <li key={i} className="flex gap-3 text-ink-600 dark:text-mist-300 text-sm">
                  <span className="text-ember-500 shrink-0 mt-0.5" aria-hidden="true">▸</span>
                  {pt}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
