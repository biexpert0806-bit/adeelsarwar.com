"use client";
import { useEffect, useRef } from "react";
import { Settings, BarChart3, Users, Workflow, Target, Zap } from "lucide-react";

const ICONS = [Settings, BarChart3, Users, Workflow, Target, Zap];

interface Service { title: string; description: string }

export default function Services({ services }: { services: Service[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !gridRef.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(gridRef.current!.children, {
          opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: gridRef.current, start: "top 85%" },
        });
      });
    });
  }, []);

  const list: Service[] = services?.length
    ? services
    : [
        { title: "Operations Architecture", description: "End-to-end workflow design, SOP development, and governance frameworks that scale with the business." },
        { title: "Business Intelligence", description: "KPI frameworks, dashboards, and reporting structures that give leadership real-time performance visibility." },
        { title: "Sales Operations", description: "CRM setup, pipeline design, outreach systems, and accountability frameworks that drive consistent revenue." },
        { title: "Process Optimisation", description: "Identifying bottlenecks, automating repetitive work, and rebuilding core processes for efficiency." },
        { title: "Team Building", description: "Recruiting, onboarding, and performance management systems for high-output operational teams." },
        { title: "Automation Strategy", description: "Airtable, Softr, and workflow tool deployments that reduce manual effort across business functions." },
      ];

  return (
    <section id="services" className="section-pad bg-navy-900/3 dark:bg-ink-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="space-y-2">
          <div className="module-label">Services</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
            What I Deliver
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((s, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <div
                key={s.title}
                className="module-frame p-6 space-y-4 hover:border-ember-500/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 rounded bg-navy-900/5 dark:bg-mist-800/20 flex items-center justify-center group-hover:bg-ember-500/10 transition-colors duration-200">
                  <Icon size={18} className="text-navy-900/50 dark:text-mist-400 group-hover:text-ember-500 transition-colors duration-200" />
                </div>
                <h3 className="font-semibold text-navy-900 dark:text-white">{s.title}</h3>
                <p className="text-ink-500 dark:text-mist-400 text-sm leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
