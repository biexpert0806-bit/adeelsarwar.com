"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowDown, MapPin } from "lucide-react";
import { urlFor } from "@/lib/sanity/image";

interface Stat { label: string; value: string }
interface HeroData {
  eyebrow?: string;
  headline?: string;
  sub?: string;
  heroImage?: { asset: { _ref: string } };
  stats?: Stat[];
}
interface UtilRow { label: string; before: number; after: number }
interface UtilizationPanelContent {
  averageValue?: number;
  clientLabel?: string;
  buildLabel?: string;
  footnote?: string;
  rows?: UtilRow[];
}

export default function Hero({
  hero,
  utilizationPanel,
}: {
  hero: HeroData;
  utilizationPanel: UtilizationPanelContent;
}) {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    let gsap: typeof import("gsap").gsap | null = null;

    import("gsap").then((mod) => {
      gsap = mod.gsap;
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap!.registerPlugin(ScrollTrigger);
        if (statsRef.current) {
          gsap!.from(statsRef.current.children, {
            opacity: 0,
            y: 24,
            duration: 0.5,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 85%",
            },
          });
        }
      });
    });
  }, []);

  const imageUrl = hero?.heroImage
    ? urlFor(hero.heroImage).width(480).height(580).fit("crop").url()
    : null;

  const stats: Stat[] = hero?.stats ?? [
    { label: "Years of Experience", value: "15+" },
    { label: "Projects Delivered", value: "80+" },
    { label: "Team Members Led", value: "50+" },
    { label: "Countries Operated In", value: "4" },
  ];

  const rows: UtilRow[] = utilizationPanel?.rows ?? [
    { label: "Strategy", before: 42, after: 87 },
    { label: "Delivery Ops", before: 55, after: 91 },
    { label: "BI & Analytics", before: 38, after: 84 },
    { label: "Sales", before: 49, after: 88 },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-white dark:bg-ink-950 overflow-hidden pt-16"
    >
      {/* Blueprint grid background */}
      <div className="blueprint-grid absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Copy */}
          <div className="space-y-8">
            {/* Eyebrow */}
            <div className="module-label inline-flex items-center gap-2">
              <MapPin size={12} />
              <span>
                {hero?.eyebrow ?? "Operations Leader · Business Intelligence · Sales"}
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-navy-900 dark:text-white">
              {hero?.headline ?? (
                <>
                  Adeel{" "}
                  <span className="italic text-ember-500">Sarwar</span>
                </>
              )}
            </h1>

            {/* Sub */}
            <p className="text-lg md:text-xl text-ink-600 dark:text-mist-300 leading-relaxed max-w-lg">
              {hero?.sub ??
                "15+ years architecting scalable operations, sales systems, and BI frameworks across the Middle East and South Asia."}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="px-6 py-3 bg-navy-900 dark:bg-ember-500 text-white font-semibold rounded hover:bg-ember-500 dark:hover:bg-ember-600 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
              >
                View Case Studies
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-navy-900/30 dark:border-mist-600 text-navy-900 dark:text-mist-200 font-semibold rounded hover:border-ember-500 hover:text-ember-500 dark:hover:text-ember-400 dark:hover:border-ember-400 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500"
              >
                Let&rsquo;s Talk
              </a>
            </div>

            {/* Stats */}
            <div
              ref={statsRef}
              className="grid grid-cols-2 gap-6 pt-4 border-t border-navy-900/10 dark:border-mist-700/20"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="kpi-readout">{s.value}</div>
                  <div className="text-xs text-ink-500 dark:text-mist-500 uppercase tracking-widest mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Photo + Utilization Panel */}
          <div className="flex flex-col gap-6">
            {/* Hero photo */}
            <div className="relative">
              <div className="aspect-[4/5] max-w-sm mx-auto lg:mx-0 rounded-lg overflow-hidden bg-navy-900/5 dark:bg-mist-800/10 border border-navy-900/10 dark:border-mist-700/20">
                {imageUrl ? (
                  <Image
                    src={imageUrl}
                    alt="Adeel Sarwar"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 480px"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-900/10 to-navy-900/5 dark:from-mist-800/20 dark:to-mist-800/10">
                    <div className="text-center space-y-2 px-8">
                      <div className="w-20 h-20 rounded-full bg-navy-900/10 dark:bg-mist-700/20 mx-auto flex items-center justify-center">
                        <span className="text-3xl font-serif font-bold text-navy-900/40 dark:text-mist-500/40">
                          AS
                        </span>
                      </div>
                      <p className="text-xs text-ink-400 dark:text-mist-600">
                        Add photo via Studio
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {/* Accent corner */}
              <div
                className="absolute -bottom-3 -right-3 w-24 h-24 border-r-2 border-b-2 border-ember-500/30 rounded-br-lg pointer-events-none"
                aria-hidden="true"
              />
            </div>

            {/* Utilization panel */}
            <div className="module-frame p-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="module-label">
                  Utilization Lift
                </span>
                <span className="kpi-readout text-2xl">
                  {utilizationPanel?.averageValue ?? 89}%
                </span>
              </div>

              <div className="space-y-3">
                {rows.map((row) => (
                  <div key={row.label} className="space-y-1">
                    <div className="flex justify-between text-xs text-ink-500 dark:text-mist-500">
                      <span>{row.label}</span>
                      <span className="font-mono">
                        {row.before}% → {row.after}%
                      </span>
                    </div>
                    <div className="relative h-1.5 bg-navy-900/5 dark:bg-mist-700/20 rounded-full overflow-hidden">
                      <div
                        className="absolute inset-y-0 left-0 bg-navy-900/20 dark:bg-mist-600/40 rounded-full"
                        style={{ width: `${row.before}%` }}
                      />
                      <div
                        className="absolute inset-y-0 left-0 bg-ember-500 rounded-full transition-all duration-700"
                        style={{ width: `${row.after}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-ink-400 dark:text-mist-600">
                {utilizationPanel?.footnote ??
                  "Resource utilization across active client engagements"}
              </p>
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="flex justify-center mt-16">
          <a
            href="#about"
            aria-label="Scroll down"
            className="p-2 text-ink-400 dark:text-mist-600 hover:text-navy-900 dark:hover:text-white transition-colors duration-200 cursor-pointer animate-bounce focus:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 rounded-full"
          >
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
