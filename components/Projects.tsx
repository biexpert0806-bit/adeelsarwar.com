"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";

interface Metric { label: string; value: string }
interface Project {
  title: string;
  client?: string;
  category?: string;
  role?: string;
  timeframe?: string;
  summary?: string;
  tags?: string[];
  metrics?: Metric[];
  image?: { asset: { _ref: string } };
  link?: string;
  featured?: boolean;
}

export default function Projects({ projects }: { projects: Project[] }) {
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

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="section-pad bg-white dark:bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="space-y-2">
          <div className="module-label">Projects</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
            Selected Engagements
          </h2>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => {
            const imgUrl = p.image
              ? urlFor(p.image).width(600).height(340).fit("crop").url()
              : null;

            return (
              <div
                key={p.title}
                className="module-frame overflow-hidden group hover:border-ember-500/30 transition-all duration-200"
              >
                {/* Image */}
                <div className="aspect-[16/9] bg-navy-900/5 dark:bg-mist-800/10 overflow-hidden">
                  {imgUrl ? (
                    <Image
                      src={imgUrl}
                      alt={p.title}
                      width={600}
                      height={340}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-navy-900/20 dark:text-mist-700/40 text-xs uppercase tracking-widest">
                        {p.category ?? "Project"}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-5 space-y-3">
                  {p.category && (
                    <span className="module-label text-xs">{p.category}</span>
                  )}
                  <h3 className="font-semibold text-navy-900 dark:text-white">{p.title}</h3>
                  {p.client && (
                    <div className="text-xs text-ink-500 dark:text-mist-500">{p.client}</div>
                  )}
                  {p.summary && (
                    <p className="text-sm text-ink-600 dark:text-mist-300 leading-relaxed line-clamp-3">
                      {p.summary}
                    </p>
                  )}

                  {p.metrics && p.metrics.length > 0 && (
                    <div className="flex gap-4 pt-1">
                      {p.metrics.slice(0, 2).map((m) => (
                        <div key={m.label}>
                          <div className="font-mono text-ember-500 font-bold text-sm">{m.value}</div>
                          <div className="text-ink-400 dark:text-mist-600 text-xs">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {p.tags && p.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 pt-1">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 bg-navy-900/5 dark:bg-mist-800/20 text-ink-500 dark:text-mist-500 text-xs rounded"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}

                  {p.link && (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-ember-500 text-sm font-medium hover:text-ember-600 transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded"
                    >
                      View project <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
