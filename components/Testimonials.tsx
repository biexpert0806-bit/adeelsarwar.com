"use client";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial { quote: string; name: string; title: string }

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [idx, setIdx] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches || !ref.current) return;
    import("gsap").then((mod) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        mod.gsap.registerPlugin(ScrollTrigger);
        mod.gsap.from(ref.current!, {
          opacity: 0, y: 24, duration: 0.5, ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        });
      });
    });
  }, []);

  const list: Testimonial[] = testimonials?.length
    ? testimonials
    : [
        { quote: "Adeel transformed our operations. He built systems we didn't know we needed and the results were immediate.", name: "Senior Executive", title: "Regional Firm, UAE" },
        { quote: "His ability to see the whole picture — operations, sales, BI — and build frameworks that actually work is rare.", name: "Director", title: "Corporate Group, Pakistan" },
        { quote: "The utilization dashboards Adeel built gave us visibility we had never had before. A true operational architect.", name: "Managing Partner", title: "Professional Services Firm" },
      ];

  const prev = () => setIdx((i) => (i === 0 ? list.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === list.length - 1 ? 0 : i + 1));
  const t = list[idx];

  return (
    <section className="section-pad bg-navy-900 dark:bg-ink-950">
      <div className="max-w-3xl mx-auto px-4 md:px-8 text-center space-y-10">
        <div className="space-y-2">
          <div className="module-label border-mist-700/30 text-mist-400">Testimonials</div>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white">
            What Leaders Say
          </h2>
        </div>

        <div ref={ref} className="space-y-6">
          <Quote className="text-ember-500/40 mx-auto" size={40} aria-hidden="true" />
          <blockquote className="font-serif text-xl md:text-2xl italic text-mist-200 leading-relaxed">
            &ldquo;{t.quote}&rdquo;
          </blockquote>
          <div>
            <div className="font-semibold text-white">{t.name}</div>
            <div className="text-mist-400 text-sm">{t.title}</div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-mist-700/30 text-mist-400 hover:text-white hover:border-mist-500 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
          >
            <ChevronLeft size={16} />
          </button>
          <div className="flex gap-1.5" role="tablist" aria-label="Testimonial indicators">
            {list.map((_, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === idx}
                aria-label={`Testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`w-2 h-2 rounded-full transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 ${
                  i === idx ? "bg-ember-500 w-6" : "bg-mist-700/50 hover:bg-mist-500"
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-mist-700/30 text-mist-400 hover:text-white hover:border-mist-500 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
