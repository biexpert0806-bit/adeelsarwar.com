"use client";
import { useEffect, useRef, useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface ExperienceRole {
  title: string;
  org: string;
  when: string;
  intro?: string;
  bullets?: string[];
}
interface Education {
  tag: string;
  text: string;
}

export default function Timeline({
  experience,
  education,
}: {
  experience: ExperienceRole[];
  education: Education[];
}) {
  const [tab, setTab] = useState<"experience" | "education">("experience");
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !contentRef.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(contentRef.current!.children, {
          opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: contentRef.current, start: "top 85%" },
        });
      });
    });
  }, [tab]);

  return (
    <section id="experience" className="section-pad bg-navy-900/3 dark:bg-ink-900">
      <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="space-y-2">
          <div className="module-label">Background</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
            Experience & Education
          </h2>
        </div>

        {/* Tab switcher */}
        <div className="flex gap-2" role="tablist">
          {(["experience", "education"] as const).map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              onClick={() => setTab(t)}
              className={`flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 ${
                tab === t
                  ? "bg-navy-900 dark:bg-ember-500 text-white"
                  : "bg-white dark:bg-ink-800 text-ink-600 dark:text-mist-400 border border-navy-900/10 dark:border-mist-700/20 hover:text-navy-900 dark:hover:text-white"
              }`}
            >
              {t === "experience" ? <Briefcase size={14} /> : <GraduationCap size={14} />}
              {t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div ref={contentRef} className="space-y-6">
          {tab === "experience" &&
            experience?.map((role, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-navy-900/10 dark:border-mist-700/20 hover:border-ember-500/40 transition-colors duration-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-navy-900 dark:border-mist-400 bg-white dark:bg-ink-900" />
                <div className="module-frame p-5 space-y-3">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <h3 className="font-semibold text-navy-900 dark:text-white">{role.title}</h3>
                      <div className="text-ember-500 font-medium text-sm">{role.org}</div>
                    </div>
                    <span className="module-label text-xs whitespace-nowrap">{role.when}</span>
                  </div>
                  {role.intro && (
                    <p className="text-ink-600 dark:text-mist-300 text-sm leading-relaxed">{role.intro}</p>
                  )}
                  {role.bullets && role.bullets.length > 0 && (
                    <ul className="space-y-1">
                      {role.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-ink-500 dark:text-mist-400 text-sm">
                          <span className="text-ember-500 shrink-0 mt-0.5" aria-hidden="true">▸</span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}

          {tab === "education" &&
            education?.map((ed, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-navy-900/10 dark:border-mist-700/20 hover:border-ember-500/40 transition-colors duration-200">
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full border-2 border-navy-900 dark:border-mist-400 bg-white dark:bg-ink-900" />
                <div className="module-frame p-5 space-y-2">
                  <span className="module-label text-xs">{ed.tag}</span>
                  <p className="text-navy-900 dark:text-white font-medium text-sm leading-relaxed">{ed.text}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
