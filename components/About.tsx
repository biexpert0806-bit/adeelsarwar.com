"use client";
import { useEffect, useRef } from "react";

interface Pillar { title: string; description: string }
interface AboutData {
  heading?: string;
  paragraphs?: string[];
  pillars?: Pillar[];
}

export default function About({ about }: { about: AboutData }) {
  const pillarsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !pillarsRef.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(pillarsRef.current!.children, {
          opacity: 0, y: 24, duration: 0.5, stagger: 0.08, ease: "power2.out",
          scrollTrigger: { trigger: pillarsRef.current, start: "top 85%" },
        });
      });
    });
  }, []);

  const heading = about?.heading ?? "Built to Scale. Designed to Last.";
  const paragraphs = about?.paragraphs ?? [
    "I am an operations and sales leader with 15+ years of building high-performance systems from scratch across the Middle East and South Asia. My work sits at the intersection of process architecture, business intelligence, and revenue growth.",
    "I have led cross-functional teams, designed company-wide workflows, built resource utilization frameworks, and deployed CRM and automation stacks that reduced manual effort and accelerated decision-making across organisations.",
  ];
  const pillars = about?.pillars ?? [
    { title: "Operational Architecture", description: "Designing scalable SOPs, governance models, and cross-functional workflows that eliminate bottlenecks." },
    { title: "Business Intelligence", description: "Building KPI frameworks, dashboards, and reporting structures that give leadership real-time visibility." },
    { title: "Sales Operations", description: "Structuring outbound and inbound funnels, CRM pipelines, and accountability systems that convert." },
    { title: "Team Leadership", description: "Developing high-output teams through clear OKRs, coaching cadences, and performance management." },
  ];

  return (
    <section id="about" className="section-pad bg-white dark:bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div className="space-y-6">
            <div className="module-label">About</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white leading-tight">
              {heading}
            </h2>
            <div className="space-y-4">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-ink-600 dark:text-mist-300 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-ember-500 font-semibold hover:text-ember-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
            >
              Work with me
              <span aria-hidden="true">→</span>
            </a>
          </div>

          {/* Right: Pillars */}
          <div ref={pillarsRef} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((p) => (
              <div key={p.title} className="module-frame p-5 space-y-2 hover:border-ember-500/30 transition-colors duration-200">
                <div className="w-8 h-0.5 bg-ember-500 rounded" />
                <h3 className="font-semibold text-navy-900 dark:text-white text-sm">{p.title}</h3>
                <p className="text-ink-500 dark:text-mist-400 text-sm leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
