"use client";
import { useEffect, useRef } from "react";
import { BookOpen } from "lucide-react";

interface InsightPost { title: string; category: string; excerpt: string }

export default function Insights({ insights }: { insights: InsightPost[] }) {
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

  const list: InsightPost[] = insights?.length
    ? insights
    : [
        { category: "Operations", title: "Why Most SOPs Fail Within 90 Days", excerpt: "Standard operating procedures are only as good as the adoption systems that support them. Here's how to build both." },
        { category: "Sales", title: "The CRM Nobody Uses Is the Most Expensive One", excerpt: "Sales teams resist CRM adoption for three reasons. All three are fixable — but not by adding more fields." },
        { category: "BI & Analytics", title: "Dashboards That Get Ignored and Why", excerpt: "Most dashboards answer the wrong question. The fix is not better charts — it is better requirements gathering." },
      ];

  return (
    <section className="section-pad bg-white dark:bg-ink-950">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 space-y-10">
        <div className="flex items-end justify-between">
          <div className="space-y-2">
            <div className="module-label">Thought Leadership</div>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy-900 dark:text-white">
              Insights
            </h2>
          </div>
        </div>

        <div ref={ref} className="grid md:grid-cols-3 gap-6">
          {list.map((post) => (
            <article
              key={post.title}
              className="module-frame p-6 space-y-4 hover:border-ember-500/30 transition-all duration-200 group"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={14} className="text-ember-500" aria-hidden="true" />
                <span className="module-label text-xs">{post.category}</span>
              </div>
              <h3 className="font-semibold text-navy-900 dark:text-white leading-snug group-hover:text-ember-500 transition-colors duration-200">
                {post.title}
              </h3>
              <p className="text-ink-500 dark:text-mist-400 text-sm leading-relaxed">{post.excerpt}</p>
              <div className="text-ember-500 text-sm font-medium group-hover:underline cursor-default">
                Coming soon
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
