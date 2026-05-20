import { ExternalLink, LineChart } from "lucide-react";

const services = [
  "Gestión de redes sociales",
  "Planeación y calendario editorial",
  "Diseño de posts, carruseles y stories",
  "Edición de reels y video corto",
  "Copywriting para redes",
  "Adaptación de contenido por plataforma",
  "Community engagement",
  "Reportes de métricas",
  "Newsletters y contenido editorial",
  "Landing pages básicas",
];

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const featuredReels = [
  {
    title: "Reel — Berachain Market Analysis",
    src: assetPath("reel-berachain-analysis.mp4"),
    caption: "Short-form analysis for social media.",
  },
  {
    title: "Reel — 5 Lupas de la Semana",
    src: assetPath("reel-5-lupas-semana.mp4"),
    caption: "Weekly editorial video format.",
  },
];

const visualAssets = [
  {
    title: "Mantle Puebla — Event Promotion",
    caption: "Event promotion content.",
    src: assetPath("mantle-puebla-event-post.jpg"),
    alt: "Mantle Puebla event promotion post",
  },
  {
    title: "Travel VYP — Social Media Campaigns",
    caption: "Social campaign visuals.",
    src: assetPath("travelvyp-social-campaigns.png"),
    alt: "Travel VYP social media campaign visuals",
  },
  {
    title: "Content Calendar — Editorial Planning",
    caption: "Planning and publishing structure.",
    src: assetPath("content-calendar-editorial-planning.png"),
    alt: "Editorial planning content calendar",
  },
  {
    title: "Tequila Jalisco — Promotional Social Post",
    caption: "Promotional social content.",
    src: assetPath("tequila-jalisco-social-post.jpg"),
    alt: "Tequila Jalisco promotional social post",
  },
  {
    title: "Print Promotional Materials",
    caption: "Print and campaign support.",
    src: assetPath("print-promotional-materials.jpg"),
    alt: "Print promotional materials",
  },
  {
    title: "Travel VYP — Print Design",
    caption: "Printed brand materials.",
    src: assetPath("travelvyp-print-design.jpg"),
    alt: "Travel VYP print design",
  },
];

const brandGuidelines = {
  title: "Colegio Samuel Juárez — Brand Guidelines",
  caption: "Brand manual and visual guidelines.",
  href: assetPath("colegio-samuel-juarez-brand-guidelines.pdf"),
};

export const ServicesContent = () => {
  return (
    <>
      <section id="services" className="scroll-reveal relative overflow-hidden border-t border-hairline py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-accent/6 to-transparent" />

        <div className="container">
          <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>06 · Servicios / Capacidades</span>
            <span className="hidden sm:inline">Social media · Content execution</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:col-span-8 lg:text-7xl">
              Servicios / Capacidades
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Ejecución de redes sociales, contenido visual y comunicación digital para sostener presencia, ritmo y claridad entre plataformas.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 border-y border-hairline sm:grid-cols-2 lg:grid-cols-5">
            {services.map((item, index) => (
              <div
                key={item}
                className="group border-b border-hairline px-0 py-5 transition-colors hover:border-accent/30 sm:px-5 lg:border-r lg:last:border-r-0"
              >
                <div className="mb-4 flex items-center justify-between gap-4">
                  <span className="font-display text-sm text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70 opacity-70 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="content-video" className="scroll-reveal relative overflow-hidden border-t border-hairline py-32 lg:py-40">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>07 · Content & Video</span>
            <span className="hidden sm:inline">Reels · Carruseles · Newsletters</span>
          </div>

          <div className="mb-16 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:col-span-8 lg:text-7xl">
              Content & Video
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Formatos de contenido para redes sociales, campañas y comunicación digital con consistencia visual.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-5">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-5">
              {featuredReels.map((reel) => (
                <article
                  key={reel.title}
                  className="overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/20 p-3 shadow-soft"
                >
                  <video
                    src={reel.src}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="aspect-[9/16] w-full rounded-[1.15rem] bg-background/40 object-cover"
                    aria-label={reel.title}
                  />
                  <div className="px-1 pb-1 pt-5">
                    <p className="font-display text-xl leading-tight text-foreground">{reel.title}</p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{reel.caption}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7">
              {visualAssets.map((item) => (
                <article key={item.title} className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={900}
                    height={700}
                    className="mb-5 aspect-[4/3] w-full rounded-[1.15rem] border border-hairline bg-surface/20 object-cover"
                  />
                  <h3 className="font-display text-lg leading-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                </article>
              ))}

              <a
                href={brandGuidelines.href}
                target="_blank"
                rel="noreferrer"
                className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30"
              >
                <div className="mb-5 aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] border border-hairline bg-surface/20 p-3">
                  <div className="relative h-full overflow-hidden rounded-[0.95rem] bg-[#ebe6de] text-[#171514] shadow-soft">
                    <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.72),rgba(255,255,255,0)_42%),radial-gradient(circle_at_82%_18%,rgba(190,147,161,0.46),rgba(190,147,161,0)_32%)]" />
                    <div className="absolute -bottom-7 -right-5 h-40 w-28 rotate-6 rounded-sm bg-white/88 shadow-[0_22px_50px_rgba(0,0,0,0.28)] sm:h-48 sm:w-36">
                      <div className="h-8 bg-[#c69aa8]" />
                      <div className="space-y-2 p-4">
                        <span className="block h-1.5 w-16 rounded-full bg-[#171514]/70" />
                        <span className="block h-1 w-20 rounded-full bg-[#171514]/25" />
                        <span className="block h-1 w-14 rounded-full bg-[#171514]/25" />
                      </div>
                    </div>
                    <div className="absolute bottom-5 left-5 right-20 rounded-sm bg-white p-4 shadow-[0_18px_42px_rgba(0,0,0,0.24)] sm:right-24">
                      <div className="mb-4 flex items-center justify-between gap-3">
                        <span className="text-[0.58rem] uppercase tracking-[0.24em] text-[#171514]/48">Brand system</span>
                        <span className="h-6 w-6 rounded-full bg-[#c69aa8]" />
                      </div>
                      <p className="font-display text-2xl leading-[0.92] text-[#171514] sm:text-3xl">Colegio Samuel Juárez</p>
                      <div className="mt-5 grid grid-cols-4 gap-2" aria-hidden="true">
                        <span className="h-8 rounded-full bg-[#c69aa8]" />
                        <span className="h-8 rounded-full bg-[#171514]" />
                        <span className="h-8 rounded-full bg-[#6f6f6b]" />
                        <span className="h-8 rounded-full border border-[#171514]/15 bg-[#f6f2ea]" />
                      </div>
                    </div>
                    <div className="absolute left-5 top-5 rounded-full border border-[#171514]/10 bg-white/72 px-3 py-1 text-[0.62rem] uppercase tracking-[0.22em] text-[#171514]/58">
                      PDF · Guidelines
                    </div>
                  </div>
                </div>
                <h3 className="font-display text-lg leading-tight text-foreground">{brandGuidelines.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brandGuidelines.caption}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent">
                  Ver manual
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </a>
            </div>
          </div>

          <div className="mt-12 border-t border-hairline pt-6 text-sm text-muted-foreground/82">
            <span className="inline-flex items-center gap-2">
              <LineChart className="h-4 w-4 text-accent" aria-hidden="true" />
              Producción pensada para ejecución, consistencia y lectura de resultados.
            </span>
          </div>
        </div>
      </section>
    </>
  );
};
