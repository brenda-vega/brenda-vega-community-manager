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

const contentSystems = [
  "Calendario editorial y ritmo de publicación",
  "Newsletter y contenido de retención",
  "Adaptación cross-platform por canal",
  "Organización visual de campañas y assets",
];

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const featuredReels = [
  {
    title: "Reel — Berachain Market Analysis",
    src: assetPath("reel-berachain-analysis.mp4"),
    caption: "Reel educativo para awareness y engagement.",
    alt: "Berachain market analysis reel",
    format: "Reel educativo / short-form",
    objective: "Engagement y awareness sobre tendencias Web3.",
    role: "Edición de video, estructura narrativa y adaptación para redes.",
    tools: "CapCut, Premiere Pro, Adobe Podcast, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Abrir reel",
  },
  {
    title: "Reel — 5 Lupas de la Semana",
    src: assetPath("reel-5-lupas-semana.mp4"),
    caption: "Resumen editorial semanal para retención.",
    alt: "5 Lupas de la Semana reel",
    format: "Reel editorial / resumen semanal",
    objective: "Retención y comunicación de contenido educativo.",
    role: "Edición, jerarquía visual y adaptación de contenido educativo.",
    tools: "CapCut, Premiere Pro, Photoshop, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Abrir reel",
  },
];

const visualAssets: PortfolioAsset[] = [
  {
    title: "Mantle Puebla — Event Promotion",
    caption: "Campaña social para evento de comunidad.",
    src: assetPath("mantle-puebla-event-post.jpg"),
    alt: "Mantle Puebla event promotion post",
    format: "Campaña social / post de evento",
    objective: "Awareness y comunicación visual para comunidad/evento.",
    role: "Diseño de pieza promocional y adaptación para redes.",
    tools: "Canva, Photoshop, Illustrator",
    channel: "Instagram / Redes sociales",
  },
  {
    title: "Travel VYP — Social Media Campaigns",
    caption: "Campaña social para servicios turísticos.",
    src: assetPath("travelvyp-social-campaigns.png"),
    alt: "Travel VYP social media campaign visuals",
    format: "Campaña social / contenido promocional",
    objective: "Promoción de servicios turísticos y presencia digital.",
    role: "Diseño de contenido y adaptación para campañas sociales.",
    tools: "Photoshop, Illustrator, Canva",
    channel: "Instagram / Facebook",
  },
  {
    title: "Content Calendar — Sistema editorial",
    caption: "Planeación de publicaciones y consistencia.",
    src: assetPath("content-calendar-editorial-planning.png"),
    alt: "Editorial planning content calendar",
    format: "Calendario editorial / sistema de contenido",
    objective: "Organización de publicaciones y consistencia de contenido.",
    role: "Estructuración editorial, organización de formatos y planificación.",
    tools: "Notion, Google Sheets, Excel, Metricool",
    channel: "Instagram / LinkedIn / Newsletter",
  },
  {
    title: "Tequila Jalisco — Promotional Social Post",
    caption: "Pieza promocional para campaña turística.",
    src: assetPath("tequila-jalisco-social-post.jpg"),
    alt: "Tequila Jalisco promotional social post",
    format: "Campaña social / post promocional",
    objective: "Promoción visual y reconocimiento de marca.",
    role: "Diseño de contenido promocional.",
    tools: "Photoshop, Illustrator",
    channel: "Instagram / Facebook",
  },
  {
    title: "Materiales promocionales impresos",
    caption: "Assets de campaña para puntos de contacto.",
    src: assetPath("print-promotional-materials.jpg"),
    alt: "Print promotional materials",
    format: "Content asset / material promocional",
    objective: "Apoyar campaña con materiales visuales consistentes.",
    role: "Adaptación de piezas de campaña y comunicación de marca.",
    channel: "Campaña / Punto de contacto",
  },
  {
    title: "Lytryum — AI NFT Collection",
    caption: "Visuales digitales para colección NFT.",
    src: assetPath("travelvyp-print-design.jpg"),
    alt: "Lytryum AI NFT collection digital visuals",
    format: "Colección visual NFT generada con IA",
    objective: "Producción de assets digitales para comunidad Web3.",
    role: "Producción visual, dirección de piezas y organización de assets.",
    tools: "Midjourney, Photoshop, Illustrator, ChatGPT",
    channel: "Discord / Redes sociales / Comunidad Web3",
  },
];

const brandGuidelines: PortfolioAsset = {
  title: "Colegio Samuel Juárez — Sistema de identidad",
  caption: "Lineamientos para comunicación institucional.",
  src: assetPath("manual_identidad_colegio.jpeg"),
  alt: "Colegio Samuel Juárez brand guidelines preview",
  format: "Sistema visual institucional",
  objective: "Mantener consistencia gráfica y lineamientos de marca.",
  role: "Organización de lineamientos visuales para comunicación institucional.",
  tools: "Illustrator, Photoshop, InDesign",
  channel: "Comunicación institucional / Material digital",
  actionLabel: "Ver manual",
  actionHref: assetPath("colegio-samuel-juarez-brand-guidelines.pdf"),
};

const selectedAssets: PortfolioAsset[] = [...featuredReels, ...visualAssets, brandGuidelines];

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
      <section id="services" className="scroll-reveal relative overflow-hidden border-t border-hairline py-20 lg:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-accent/6 to-transparent" />

        <div className="container">
          <div className="mb-12 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>05 · Qué hago</span>
            <span className="hidden sm:inline">Editorial · Cross-platform · Campañas</span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Sistema de contenido
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Calendarios, newsletters y assets organizados para sostener campañas, ecommerce, turismo, comunidad e institucional.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {contentSystems.map((item, index) => (
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

      <section id="content-video" className="scroll-reveal relative overflow-hidden border-t border-hairline py-20 lg:py-28">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <div className="mb-10 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>06 · Contenido y video</span>
            <span className="hidden sm:inline">Campañas · Reels · Sistemas editoriales</span>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-4xl font-display text-4xl leading-[0.98] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Contenido y video
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Reels educativos, campañas sociales, sistemas editoriales y assets de marca listos para revisar por formato.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-x-5 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {selectedAssets.map((item) => {
              const isVideo = item.type === "video";
              const actionText = item.actionLabel === "Abrir reel" ? "Ver reel" : item.actionLabel ?? "Ver pieza";

              return (
                <article key={item.title} className="motion-card group border-t border-hairline py-5 transition-colors hover:border-accent/30">
                  <button type="button" onClick={() => setActiveAsset(item)} className="block w-full text-left" aria-label={`Ver pieza: ${item.title}`}>
                    <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] border border-hairline bg-surface/14">
                      {isVideo ? (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full max-h-[18rem] w-full bg-background/55 object-cover sm:max-h-[19rem]"
                          aria-label={item.title}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt}
                          loading="lazy"
                          decoding="async"
                          width={900}
                          height={700}
                          className="h-full w-full object-cover transition-opacity group-hover:opacity-95"
                        />
                      )}
                    </div>
                  </button>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-accent">{item.format}</p>
                      <h3 className="mt-2 font-display text-lg leading-tight text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveAsset(item)}
                      className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-full border border-hairline bg-surface/20 text-accent transition-colors hover:border-accent/30 hover:text-foreground"
                      aria-label={actionText}
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 border-t border-hairline pt-6 text-sm text-muted-foreground/82">
            <span className="inline-flex items-center gap-2">
              <LineChart className="h-4 w-4 text-accent" aria-hidden="true" />
              Producción pensada para canales, consistencia editorial y lectura rápida de resultados.
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
      className="fixed inset-0 z-[80] flex items-end justify-center bg-background/88 px-4 py-4 backdrop-blur-md sm:items-center sm:px-6"
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
          <div className="border-b border-hairline bg-surface/10 p-3 lg:border-b-0 lg:border-r lg:p-5">
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
