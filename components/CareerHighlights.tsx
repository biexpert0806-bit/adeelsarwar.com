"use client";
import { useEffect, useRef } from "react";

interface CareerHighlight {
  metric: string;
  title: string;
  description: string;
  when?: string;
}

export default function CareerHighlights({ highlights }: { highlights: CareerHighlight[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !ref.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(ref.current!.children, {
          opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        });
      });
    });
  }, []);

  return (
    <section className="bg-navy-900 dark:bg-ink-950 section-pad">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((h) => (
            <div key={h.metric} className="text-center space-y-2">
              <div className="font-mono text-4xl md:text-5xl font-bold text-ember-400">
                {h.metric}
              </div>
              <div className="font-semibold text-white text-sm uppercase tracking-widest">
                {h.title}
              </div>
              <div className="text-mist-400 text-sm leading-relaxed">{h.description}</div>
              {h.when && (
                <div className="text-mist-600 text-xs">{h.when}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
