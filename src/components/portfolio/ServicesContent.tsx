import { ExternalLink, LineChart } from "lucide-react";

const services = [
  "Gestión de redes sociales",
  "Planeación editorial",
  "Reels y video corto",
  "Diseño de contenido visual",
  "Community engagement",
  "Newsletters y contenido editorial",
  "Métricas y reportes",
  "Landing pages básicas",
];

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const featuredReels = [
  {
    title: "Reel — Berachain Market Analysis",
    src: assetPath("reel-berachain-analysis.mp4"),
    caption: "Análisis en video corto para redes.",
  },
  {
    title: "Reel — 5 Lupas de la Semana",
    src: assetPath("reel-5-lupas-semana.mp4"),
    caption: "Formato editorial semanal en video.",
  },
];

const visualAssets = [
  {
    title: "Mantle Puebla — Promoción de evento",
    caption: "Promoción de evento para comunidad Web3.",
    src: assetPath("mantle-puebla-event-post.jpg"),
    alt: "Mantle Puebla event promotion post",
  },
  {
    title: "Travel VYP — Campañas en redes sociales",
    caption: "Visuales para campaña social.",
    src: assetPath("travelvyp-social-campaigns.png"),
    alt: "Travel VYP social media campaign visuals",
  },
  {
    title: "Calendario de contenido — Planeación editorial",
    caption: "Estructura de publicación.",
    src: assetPath("content-calendar-editorial-planning.png"),
    alt: "Editorial planning content calendar",
  },
  {
    title: "Tequila Jalisco — Post promocional",
    caption: "Post promocional para campaña turística.",
    src: assetPath("tequila-jalisco-social-post.jpg"),
    alt: "Tequila Jalisco promotional social post",
  },
  {
    title: "Materiales promocionales impresos",
    caption: "Materiales de apoyo para campaña.",
    src: assetPath("print-promotional-materials.jpg"),
    alt: "Print promotional materials",
  },
  {
    title: "Lytryum — AI NFT Collection",
    caption: "AI-generated NFT collection visuals and mockups.",
    src: assetPath("travelvyp-print-design.jpg"),
    alt: "Lytryum AI NFT collection visuals and mockups",
  },
];

const brandGuidelines = {
  title: "Colegio Samuel Juárez — Brand Guidelines",
  caption: "Manual de identidad visual.",
  preview: assetPath("manual_identidad_colegio.jpeg"),
  href: assetPath("colegio-samuel-juarez-brand-guidelines.pdf"),
};

export const ServicesContent = () => {
  return (
    <>
      <section id="services" className="scroll-reveal relative overflow-hidden border-t border-hairline py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-accent/6 to-transparent" />

        <div className="container">
          <div className="mb-12 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>05 · Qué hago</span>
            <span className="hidden sm:inline">Redes sociales · Ejecución de contenido</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Qué hago
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Gestión, producción y seguimiento de contenido para mantener presencia activa y claridad de resultados.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {services.map((item, index) => (
              <div
                key={item}
                className="group border-b border-hairline px-0 py-4 transition-colors hover:border-accent/30 sm:px-5 lg:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <div className="mb-3 flex items-center justify-between gap-4">
                  <span className="font-display text-sm text-muted-foreground/70">{String(index + 1).padStart(2, "0")}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-accent/70 opacity-70 transition-opacity group-hover:opacity-100" />
                </div>
                <p className="text-sm leading-relaxed text-foreground/82">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="content-video" className="scroll-reveal relative overflow-hidden border-t border-hairline py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <div className="mb-12 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>06 · Contenido y video</span>
            <span className="hidden sm:inline">Reels · Carruseles · Newsletters</span>
          </div>

          <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Contenido y video
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Reels, campañas, piezas editoriales y materiales listos para ver en detalle.
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
                    <a
                      href={reel.src}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                    >
                      Ver reel
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7">
              {visualAssets.map((item) => (
                <article key={item.title} className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30">
                  <a href={item.src} target="_blank" rel="noreferrer" aria-label={`Ver pieza: ${item.title}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={900}
                      height={700}
                      className="mb-5 aspect-[4/3] w-full rounded-[1.15rem] border border-hairline bg-surface/20 object-cover transition-opacity group-hover:opacity-90"
                    />
                  </a>
                  <h3 className="font-display text-lg leading-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                  <a
                    href={item.src}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                  >
                    Ver pieza
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </article>
              ))}

              <article className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30">
                <a href={brandGuidelines.preview} target="_blank" rel="noreferrer" aria-label={`Ver pieza: ${brandGuidelines.title}`}>
                  <img
                    src={brandGuidelines.preview}
                    alt="Colegio Samuel Juárez brand guidelines preview"
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={820}
                    className="mb-5 aspect-[4/3] w-full rounded-[1.15rem] border border-hairline bg-surface/20 object-cover transition-opacity group-hover:opacity-90"
                  />
                </a>
                <h3 className="font-display text-lg leading-tight text-foreground">{brandGuidelines.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brandGuidelines.caption}</p>
                <a
                  href={brandGuidelines.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                >
                  Ver manual
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </article>
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
