"use client";
import { useEffect, useRef } from "react";

interface SkillGroup { category: string; items: string[] }

export default function Skills({ skillGroups }: { skillGroups: SkillGroup[] }) {
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

  const groups: SkillGroup[] = skillGroups?.length
    ? skillGroups
    : [
        { category: "Operations", items: ["SOP Design", "Workflow Architecture", "Resource Planning", "Process Optimisation", "Change Management", "Risk Frameworks"] },
        { category: "Business Intelligence", items: ["KPI Design", "Dashboard Development", "Airtable", "Data Modelling", "Reporting Structures", "Performance Analytics"] },
        { category: "Sales", items: ["CRM Management", "Pipeline Design", "Lead Generation", "Funnel Optimisation", "Sales Scripting", "Revenue Forecasting"] },
        { category: "Tools & Platforms", items: ["Airtable", "Softr", "HubSpot", "Salesforce", "Notion", "Google Workspace", "Zapier", "Make"] },
      ];

  return (
    <section className="section-pad bg-white dark:bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="space-y-2">
          <div className="module-label">Skills</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
            Capabilities
          </h2>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {groups.map((g) => (
            <div key={g.category} className="space-y-3">
              <div className="font-semibold text-navy-900 dark:text-white text-sm uppercase tracking-widest border-b border-ember-500/30 pb-2">
                {g.category}
              </div>
              <ul className="space-y-1.5">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-600 dark:text-mist-300">
                    <span className="w-1 h-1 rounded-full bg-ember-500 shrink-0" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
