import { ExternalLink, LineChart, X } from "lucide-react";
import { useEffect, useState } from "react";

type PortfolioAsset = {
  title: string;
  caption: string;
  src: string;
  alt: string;
  format: string;
  objective: string;
  role: string;
  tools?: string;
  channel: string;
  type?: "image" | "video";
  actionLabel?: string;
  actionHref?: string;
};

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
    alt: "Berachain market analysis reel",
    format: "Reel educativo / short-form",
    objective: "Engagement y awareness sobre tendencias Web3.",
    role: "Edición de video, adaptación visual y contenido short-form.",
    tools: "CapCut, Premiere Pro, Adobe Podcast, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Abrir reel",
  },
  {
    title: "Reel — 5 Lupas de la Semana",
    src: assetPath("reel-5-lupas-semana.mp4"),
    caption: "Formato editorial semanal en video.",
    alt: "5 Lupas de la Semana reel",
    format: "Reel editorial / resumen semanal",
    objective: "Retención y comunicación de contenido educativo.",
    role: "Edición de video, estructura visual y adaptación para redes.",
    tools: "CapCut, Premiere Pro, Photoshop, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Abrir reel",
  },
];

const visualAssets: PortfolioAsset[] = [
  {
    title: "Mantle Puebla — Event Promotion",
    caption: "Promoción de evento para comunidad Web3.",
    src: assetPath("mantle-puebla-event-post.jpg"),
    alt: "Mantle Puebla event promotion post",
    format: "Post promocional para evento",
    objective: "Awareness y comunicación visual para comunidad/evento.",
    role: "Diseño de pieza promocional y adaptación visual.",
    tools: "Canva, Photoshop, Illustrator",
    channel: "Instagram / Redes sociales",
  },
  {
    title: "Travel VYP — Social Media Campaigns",
    caption: "Visuales para campaña social.",
    src: assetPath("travelvyp-social-campaigns.png"),
    alt: "Travel VYP social media campaign visuals",
    format: "Contenido promocional para redes sociales",
    objective: "Promoción de servicios turísticos y presencia digital.",
    role: "Diseño de contenido visual y adaptación para campañas.",
    tools: "Photoshop, Illustrator, Canva",
    channel: "Instagram / Facebook",
  },
  {
    title: "Content Calendar — Editorial Planning",
    caption: "Estructura de publicación.",
    src: assetPath("content-calendar-editorial-planning.png"),
    alt: "Editorial planning content calendar",
    format: "Planeación editorial y calendario de contenido",
    objective: "Organización de publicaciones y consistencia de contenido.",
    role: "Estructuración de contenido y planificación editorial.",
    tools: "Notion, Google Sheets, Excel, Metricool",
    channel: "Instagram / LinkedIn / Newsletter",
  },
  {
    title: "Tequila Jalisco — Promotional Social Post",
    caption: "Post promocional para campaña turística.",
    src: assetPath("tequila-jalisco-social-post.jpg"),
    alt: "Tequila Jalisco promotional social post",
    format: "Pieza promocional para redes sociales",
    objective: "Promoción visual y reconocimiento de marca.",
    role: "Diseño de contenido promocional.",
    tools: "Photoshop, Illustrator",
    channel: "Instagram / Facebook",
  },
  {
    title: "Materiales promocionales impresos",
    caption: "Materiales de apoyo para campaña.",
    src: assetPath("print-promotional-materials.jpg"),
    alt: "Print promotional materials",
    format: "Material promocional",
    objective: "Apoyar campaña con materiales visuales consistentes.",
    role: "Diseño y adaptación de piezas de marca.",
    channel: "Campaña / Punto de contacto",
  },
  {
    title: "Lytryum — AI NFT Collection",
    caption: "AI-generated NFT collection visuals and mockups.",
    src: assetPath("travelvyp-print-design.jpg"),
    alt: "Lytryum AI NFT collection visuals and mockups",
    format: "Colección visual NFT generada con IA",
    objective: "Comunicación visual y producción de assets digitales.",
    role: "Producción visual, mockups y dirección de piezas.",
    tools: "Midjourney, Photoshop, Illustrator, ChatGPT",
    channel: "Discord / Redes sociales / Comunidad Web3",
  },
];

const brandGuidelines: PortfolioAsset = {
  title: "Colegio Samuel Juárez — Brand Guidelines",
  caption: "Manual de identidad visual.",
  src: assetPath("manual_identidad_colegio.jpeg"),
  alt: "Colegio Samuel Juárez brand guidelines preview",
  format: "Manual de identidad",
  objective: "Mantener consistencia gráfica y lineamientos de marca.",
  role: "Diseño y organización de sistema visual institucional.",
  tools: "Illustrator, Photoshop, InDesign",
  channel: "Comunicación institucional / Material digital",
  actionLabel: "Ver manual",
  actionHref: assetPath("colegio-samuel-juarez-brand-guidelines.pdf"),
};

export const ServicesContent = () => {
  const [activeAsset, setActiveAsset] = useState<PortfolioAsset | null>(null);

  useEffect(() => {
    if (!activeAsset) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveAsset(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeAsset]);

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
                    <button
                      type="button"
                      onClick={() => setActiveAsset(reel)}
                      className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                    >
                      Ver reel
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              ))}
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7">
              {visualAssets.map((item) => (
                <article key={item.title} className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30">
                  <button type="button" onClick={() => setActiveAsset(item)} className="block w-full text-left" aria-label={`Ver pieza: ${item.title}`}>
                    <img
                      src={item.src}
                      alt={item.alt}
                      loading="lazy"
                      decoding="async"
                      width={900}
                      height={700}
                      className="mb-5 aspect-[4/3] w-full rounded-[1.15rem] border border-hairline bg-surface/20 object-cover transition-opacity group-hover:opacity-90"
                    />
                  </button>
                  <h3 className="font-display text-lg leading-tight text-foreground">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                  <button
                    type="button"
                    onClick={() => setActiveAsset(item)}
                    className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                  >
                    Ver pieza
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </article>
              ))}

              <article className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30">
                <button type="button" onClick={() => setActiveAsset(brandGuidelines)} className="block w-full text-left" aria-label={`Ver manual: ${brandGuidelines.title}`}>
                  <img
                    src={brandGuidelines.src}
                    alt={brandGuidelines.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={820}
                    className="mb-5 aspect-[4/3] w-full rounded-[1.15rem] border border-hairline bg-surface/20 object-cover transition-opacity group-hover:opacity-90"
                  />
                </button>
                <h3 className="font-display text-lg leading-tight text-foreground">{brandGuidelines.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{brandGuidelines.caption}</p>
                <button
                  type="button"
                  onClick={() => setActiveAsset(brandGuidelines)}
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-accent"
                >
                  Ver manual
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
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

      {activeAsset ? (
        <AssetLightbox asset={activeAsset} onClose={() => setActiveAsset(null)} />
      ) : null}
    </>
  );
};

const AssetLightbox = ({ asset, onClose }: { asset: PortfolioAsset; onClose: () => void }) => {
  const isVideo = asset.type === "video";
  const actionHref = asset.actionHref ?? asset.src;
  const actionLabel = asset.actionLabel ?? "Abrir archivo";

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center bg-background/86 px-4 py-4 backdrop-blur-xl sm:items-center sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] border border-hairline bg-background/96 shadow-soft">
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Vista de pieza</p>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/35 text-foreground/80 transition-colors hover:border-accent/30 hover:text-foreground"
            aria-label="Cerrar vista"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.55fr)]">
          <div className="border-b border-hairline bg-surface/16 p-3 lg:border-b-0 lg:border-r lg:p-5">
            {isVideo ? (
              <video
                src={asset.src}
                controls
                playsInline
                preload="metadata"
                className="max-h-[72vh] w-full rounded-[1.15rem] bg-background object-contain"
                aria-label={asset.title}
              />
            ) : (
              <img
                src={asset.src}
                alt={asset.alt}
                loading="eager"
                decoding="async"
                className="max-h-[72vh] w-full rounded-[1.15rem] bg-background object-contain"
              />
            )}
          </div>

          <div className="flex flex-col justify-between gap-8 p-6 lg:p-8">
            <div className="space-y-5">
              <div className="space-y-3">
                <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{asset.format}</p>
                <h3 id="asset-lightbox-title" className="font-display text-2xl leading-tight text-foreground sm:text-3xl">
                  {asset.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{asset.caption}</p>
              </div>

              <dl className="space-y-4 border-y border-hairline py-5 text-sm">
                <AssetMeta label="Objetivo" value={asset.objective} />
                <AssetMeta label="Rol" value={asset.role} />
                {asset.tools ? <AssetMeta label="Herramientas" value={asset.tools} /> : null}
                <AssetMeta label="Canal" value={asset.channel} />
              </dl>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={actionHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-glow transition-colors hover:bg-accent-soft"
              >
                {actionLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/28 px-5 py-3 text-sm text-foreground/76 transition-colors hover:border-accent/30 hover:text-foreground"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssetMeta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
    <dd className="mt-1 leading-relaxed text-foreground/82">{value}</dd>
  </div>
);
