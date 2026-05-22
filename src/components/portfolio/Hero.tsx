import heroVisual from "@/assets/brenda-vega-editorial-portrait.png";
import { ArrowUpRight, Download } from "lucide-react";
import { navigateToHash } from "@/lib/scroll";
import { useEffect, useRef, useState } from "react";

type StatConfig = {
  end: number;
  label: string;
  suffix?: string;
  rangeEnd?: number;
};

const cvHref = `${import.meta.env.BASE_URL}CV_VisualDesigner_BrendaVega_2026_v2.pdf`;

const stats: StatConfig[] = [
  { end: 4, suffix: "+", label: "comunidades activadas" },
  { end: 100, suffix: "+", label: "assets de contenido" },
  { end: 42, suffix: "+", label: "semanas de newsletter" },
];

const contentSignals = ["campañas multi-plataforma", "contenido semanal recurrente", "adaptación cross-platform"];
const mobileStats = ["4+ comunidades", "100+ assets", "42+ newsletters"];

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const Hero = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    const element = statsRef.current;
    if (!element) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setProgress(1);
      hasAnimatedRef.current = true;
      return;
    }

    const runCount = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;

      const duration = 1450;
      const start = performance.now();
      const animate = (now: number) => {
        const elapsed = Math.min((now - start) / duration, 1);
        setProgress(easeOutCubic(elapsed));

        if (elapsed < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCount();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="top" className="relative min-h-screen overflow-hidden pt-[14.5rem] pb-20 sm:pt-[24rem] lg:pt-40 lg:pb-24">
      {/* Soft ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-40" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-[0.24]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-48 bg-gradient-to-t from-background to-transparent" />

      <div className="hero-editorial-portrait reveal reveal-delay-2" aria-hidden="true">
        <div className="hero-editorial-glow" />
        <img src={heroVisual} alt="" width={1024} height={1280} decoding="async" fetchPriority="high" className="hero-editorial-image" />
        <div className="hero-editorial-overlay" />
        <div className="hero-editorial-sidefade" />
        <div className="hero-editorial-bottomfade" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-3xl space-y-5 sm:space-y-6 lg:max-w-[40rem] xl:max-w-[44rem] lg:space-y-6">
          <div className="reveal inline-grid max-w-full grid-cols-[auto_1fr] items-center gap-3 rounded-full border border-hairline bg-surface/32 px-4 py-2 text-[10px] uppercase leading-relaxed tracking-[0.16em] text-foreground/76 backdrop-blur-sm sm:inline-flex sm:text-[11px] sm:tracking-[0.19em]">
            <span className="h-1.5 w-1.5 rounded-full bg-accent/85" />
            <span className="min-w-0">Community Manager · Social Media · Content Systems</span>
          </div>

          <h1 className="reveal reveal-delay-1 max-w-[13ch] font-display text-[2.35rem] leading-[0.98] tracking-normal text-balance sm:text-[3.35rem] lg:text-[4.25rem] xl:text-[4.95rem]">
            <span className="block text-foreground">Community</span>
            <span className="block text-foreground">Manager</span>
            <span className="block text-[0.5em] italic font-light leading-[1.08] text-accent">Social Media & Visual Content</span>
          </h1>

          <div className="reveal reveal-delay-2 max-w-xl space-y-3 text-[15px] leading-relaxed text-foreground/82 text-pretty sm:text-[1.02rem]">
            <p>
              Diseño sistemas de contenido y comunicación visual para marcas digitales, combinando operación editorial, social media y ejecución multi-plataforma.
            </p>
            <p className="text-[13px] leading-relaxed text-foreground/66 sm:text-sm">
              Visual Content Designer · Editorial Content · Community Systems
            </p>
          </div>

        </div>

        <div className="reveal reveal-delay-3 mt-6 flex flex-col gap-4 lg:mt-0 lg:grid lg:-translate-y-12 lg:grid-cols-12 lg:items-center xl:-translate-y-14">
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:col-span-5">
            <a
              href="#work"
              onClick={(event) => {
                event.preventDefault();
                navigateToHash("#work");
              }}
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background soft-button hover:bg-accent-soft"
            >
              Ver proyectos
              <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/35 px-6 py-3.5 text-sm text-foreground/90 backdrop-blur-sm soft-button hover:border-accent/30 hover:bg-surface/60 hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Descargar CV
            </a>
          </div>

          <div className="flex flex-wrap gap-x-2 gap-y-1 text-[11px] uppercase tracking-[0.16em] text-foreground/68 sm:text-xs lg:hidden">
            {mobileStats.map((item, index) => (
              <span key={item}>
                {item}
                {index < mobileStats.length - 1 ? <span className="pl-2 text-foreground/38">·</span> : null}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.14em] text-foreground/48 lg:hidden">
            {contentSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-hairline bg-surface/18 px-3 py-1.5">
                {signal}
              </span>
            ))}
          </div>

          <div
            ref={statsRef}
            className="hidden max-w-lg grid-cols-3 gap-6 lg:col-span-4 lg:col-start-9 lg:grid lg:max-w-none"
          >
            {stats.map((stat) => (
              <Stat key={stat.label} stat={stat} progress={progress} />
            ))}
          </div>

          <div className="hidden flex-wrap gap-2 text-[10px] uppercase tracking-[0.14em] text-foreground/46 lg:col-span-4 lg:col-start-9 lg:-mt-2 lg:flex">
            {contentSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-white/[0.055] bg-surface/12 px-3 py-1.5">
                {signal}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ stat, progress }: { stat: StatConfig; progress: number }) => {
  const startValue = Math.round(stat.end * progress);
  const endValue = stat.rangeEnd ? Math.round(stat.rangeEnd * progress) : undefined;
  const value = endValue !== undefined ? `${startValue}–${endValue}${stat.suffix ?? ""}` : `${startValue}${stat.suffix ?? ""}`;

  return (
    <div className="border-l border-white/[0.055] pl-5">
      <div className="font-display text-2xl text-foreground/86 tabular-nums lg:text-[1.95rem] xl:text-[2.1rem]">{value}</div>
      <div className="mt-3 text-[10px] uppercase leading-snug tracking-[0.12em] text-muted-foreground/62">{stat.label}</div>
    </div>
  );
};
