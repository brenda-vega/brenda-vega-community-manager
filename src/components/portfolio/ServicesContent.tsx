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
  responsibilities: string[];
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
    src: assetPath("    crypto-market-analysis-reel-berachain.mp4"),
    caption: "Reel educativo para awareness sobre tendencias Web3.",
    alt: "Berachain market analysis reel",
    format: "Reel educativo / short-form",
    objective: "Engagement y awareness sobre tendencias Web3 mediante contenido breve y distribuible.",
    role: "Edición de video, adaptación visual y contenido short-form.",
    responsibilities: ["Edición de video corto", "Adaptación visual para redes", "Estructura de contenido educativo"],
    tools: "CapCut, Premiere Pro, Adobe Podcast, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Ver reel",
  },
  {
    title: "Reel — 5 Lupas de la Semana",
    src: assetPath("    weekly-web3-news-reel-kairos.mp4"),
    caption: "Resumen editorial semanal para retención.",
    alt: "5 Lupas de la Semana reel",
    format: "Reel editorial / resumen semanal",
    objective: "Retención y comunicación de contenido educativo con lectura rápida de temas clave.",
    role: "Edición de video, estructura visual y adaptación para redes.",
    responsibilities: ["Edición de resumen semanal", "Jerarquía visual", "Adaptación educativa para reels"],
    tools: "CapCut, Premiere Pro, Photoshop, Metricool",
    channel: "TikTok / Instagram Reels",
    type: "video" as const,
    actionLabel: "Ver reel",
  },
];

const visualAssets: PortfolioAsset[] = [
  {
    title: "Kairos — Newsletter Editorial Design",
    caption: "Sistema editorial para comunicación semanal.",
    src: assetPath("    web3-newsletter-editorial-design-kairos.png"),
    alt: "Kairos Web3 newsletter editorial design",
    format: "Newsletter semanal / contenido editorial",
    objective: "Retención y distribución digital de contenido Web3 mediante una estructura editorial clara.",
    role: "Organización editorial, adaptación visual e integración de piezas educativas.",
    responsibilities: ["Estructura visual de newsletter", "Jerarquía de contenido", "Adaptación editorial semanal"],
    tools: "Canva, Notion, Metricool, GA4",
    channel: "Newsletter / Email / Editorial Content",
  },
  {
    title: "Kairos — Editorial Blog System",
    caption: "Apoyo editorial, SEO y portadas para blog.",
    src: assetPath("web3-editorial-blog-system-kairos.png"),
    alt: "Kairos Web3 editorial blog content system",
    format: "Editorial Content Support",
    objective: "Organización editorial para artículos Web3, soporte SEO y distribución previa a la transición hacia newsletters.",
    role: "Keyword mapping, revisión de indexación y adaptación visual de portadas e infografías.",
    responsibilities: ["Organización editorial", "Keyword mapping", "Revisión en Google Search Console", "Adaptación visual para portadas"],
    tools: "Google Search Console, Ubersuggest, GA4, Canva, Notion",
    channel: "Blog / Search / Editorial Content",
  },
  {
    title: "Content Calendar — Editorial Planning",
    caption: "Planeación de publicaciones y consistencia.",
    src: assetPath("    social-media-editorial-content-calendar.png"),
    alt: "Social media editorial content calendar",
    format: "Calendario editorial / sistema de contenido",
    objective: "Organización de publicaciones, formatos y consistencia de contenido por canal.",
    role: "Estructuración de contenido, calendario editorial y seguimiento de publicaciones.",
    responsibilities: ["Planeación editorial", "Organización por canal", "Seguimiento de consistencia"],
    tools: "Notion, Google Sheets, Excel, Metricool",
    channel: "Instagram / LinkedIn / Newsletter",
  },
  {
    title: "Storyboard — Social Media Video System",
    caption: "Estructura previa para video social.",
    src: assetPath("    social-media-video-storyboard-system.png"),
    alt: "Social media video storyboard system",
    format: "Storyboard / sistema de video social",
    objective: "Ordenar narrativa, cortes y mensajes clave antes de producir contenido short-form.",
    role: "Planeación visual, estructura narrativa y adaptación de contenido para video.",
    responsibilities: ["Storyboarding", "Organización de secuencia", "Adaptación para video corto"],
    tools: "Canva, CapCut, Notion",
    channel: "TikTok / Instagram Reels / Shorts",
  },
  {
    title: "Kairos — Monthly Report Editorial Design",
    caption: "Reporte editorial para lectura y distribución.",
    src: assetPath("crypto-monthly-report-editorial-design.png"),
    alt: "Crypto monthly report editorial design",
    format: "Reporte editorial / contenido educativo",
    objective: "Comunicar análisis mensual con estructura visual, jerarquía de información y claridad para distribución digital.",
    role: "Diseño editorial, organización de secciones y adaptación visual de datos.",
    responsibilities: ["Jerarquía editorial", "Diseño de reporte", "Adaptación de contenido educativo"],
    tools: "Canva, Photoshop, Notion",
    channel: "Newsletter / PDF / Social Media",
  },
  {
    title: "Dulce Felicidad — Shopify Product Catalog",
    caption: "Catálogo digital para ecommerce.",
    src: assetPath("shopify-product-catalog-design-dulce-felicidad.png"),
    alt: "Dulce Felicidad Shopify product catalog design",
    format: "Catálogo ecommerce / contenido de producto",
    objective: "Organizar productos, mensajes comerciales y lectura visual para apoyar captación y compra.",
    role: "Diseño de catálogo, estructura visual y adaptación para ecommerce.",
    responsibilities: ["Organización de productos", "Diseño de catálogo", "Comunicación comercial"],
    tools: "Shopify, Canva, Photoshop",
    channel: "Shopify / Ecommerce / Social Media",
  },
  {
    title: "Dulce Felicidad — LinkedIn Content Design",
    caption: "Contenido social para presencia profesional.",
    src: assetPath("linkedin-content-design-dulce-felicidad.png"),
    alt: "Dulce Felicidad LinkedIn content design",
    format: "Social Media Content / LinkedIn",
    objective: "Comunicar oferta, marca y presencia digital con piezas orientadas a lectura profesional.",
    role: "Diseño de contenido, adaptación de mensaje y consistencia visual.",
    responsibilities: ["Diseño de post", "Adaptación de copy visual", "Consistencia de marca"],
    tools: "Canva, Photoshop, LinkedIn",
    channel: "LinkedIn / Social Media",
  },
  {
    title: "Mantle Puebla — Event Promotion",
    caption: "Campaña social para evento de comunidad.",
    src: assetPath("social-media-event-campaign-mantle-puebla.png"),
    alt: "Mantle Puebla social media event campaign",
    format: "Campaña social / evento",
    objective: "Awareness y comunicación visual para comunidad y evento.",
    role: "Diseño de pieza promocional, adaptación visual y comunicación de evento.",
    responsibilities: ["Diseño de campaña social", "Adaptación para redes", "Comunicación de evento"],
    tools: "Canva, Photoshop, Illustrator",
    channel: "Instagram / Redes sociales",
  },
  {
    title: "Travel Agency — Social Media Campaign",
    caption: "Campaña promocional para servicios turísticos.",
    src: assetPath("    travel-agency-social-media-campaign.png"),
    alt: "Travel agency social media campaign",
    format: "Campaña social / turismo",
    objective: "Promoción de servicios turísticos, comunicación comercial y presencia digital.",
    role: "Diseño de contenido visual y adaptación para campañas.",
    responsibilities: ["Diseño de campaña social", "Adaptación Instagram/Facebook", "Comunicación de oferta turística"],
    tools: "Photoshop, Illustrator, Canva",
    channel: "Instagram / Facebook",
  },
  {
    title: "Hotel Matices — Facebook Travel Campaign",
    caption: "Campaña visual para promoción turística.",
    src: assetPath("facebook-travel-campaign-hotel-matices.png"),
    alt: "Hotel Matices Facebook travel campaign",
    format: "Social Media Campaign / Facebook Ads",
    objective: "Comunicación comercial y captación en temporada promocional bajo lineamientos de Facebook Ads.",
    role: "Diseño de campaña visual, adaptación a restricciones de texto y comunicación promocional.",
    responsibilities: ["Diseño de pieza para pauta", "Adaptación a lineamientos de plataforma", "Comunicación comercial turística"],
    tools: "Photoshop, Meta Ads, Facebook",
    channel: "Facebook Ads / Social Media",
  },
  {
    title: "Tuksa — Travel Marketing Digital Campaign",
    caption: "Campaña digital para promoción turística.",
    src: assetPath("travel-marketing-digital-campaign-tuksa.png"),
    alt: "Tuksa travel marketing digital campaign",
    format: "Campaña digital / travel marketing",
    objective: "Apoyar captación y distribución digital con comunicación visual para turismo.",
    role: "Diseño de campaña, adaptación de formatos y soporte visual para redes.",
    responsibilities: ["Comunicación comercial", "Adaptación multiplataforma", "Diseño de campaña"],
    tools: "Canva, Photoshop, Meta Business Suite",
    channel: "Facebook / Instagram / Social Media",
  },
  {
    title: "Colegio Samuel Juárez — Brand Guidelines Design",
    caption: "Sistema visual para comunicación institucional.",
    src: assetPath("    school-brand-guidelines-design.png"),
    alt: "School brand guidelines design",
    format: "Sistema de identidad / comunicación institucional",
    objective: "Ordenar lineamientos visuales para sostener consistencia gráfica en materiales institucionales.",
    role: "Diseño y organización de sistema visual institucional.",
    responsibilities: ["Sistema de identidad", "Lineamientos visuales", "Consistencia institucional"],
    tools: "Illustrator, Photoshop, InDesign",
    channel: "Comunicación institucional / Material digital",
  },
  {
    title: "Lytryum — AI NFT Collection",
    caption: "Visuales digitales para colección NFT.",
    src: assetPath("ai-generated-nft-collection-lytryum.jpg"),
    alt: "Lytryum AI generated NFT collection",
    format: "Colección visual NFT generada con IA",
    objective: "Comunicación visual y producción de assets digitales para comunidad Web3.",
    role: "Producción visual, mockups y dirección de piezas.",
    responsibilities: ["Producción de assets digitales", "Dirección de piezas", "Organización visual para comunidad"],
    tools: "Midjourney, Photoshop, Illustrator, ChatGPT",
    channel: "Discord / Redes sociales / Comunidad Web3",
  },
  {
    title: "Coquito — Bakery Brand Identity",
    caption: "Identidad visual para marca de repostería.",
    src: assetPath("bakery-brand-identity-design-coquito.png"),
    alt: "Coquito bakery brand identity design",
    format: "Brand Identity / comunicación visual",
    objective: "Definir una base visual reconocible para comunicación comercial y presencia digital.",
    role: "Diseño de identidad, sistema visual y aplicaciones de marca.",
    responsibilities: ["Identidad visual", "Sistema gráfico", "Aplicaciones para comunicación"],
    tools: "Illustrator, Photoshop, Canva",
    channel: "Branding / Social Media / Material digital",
  },
  {
    title: "Bitcoin Payment Sign — Print Design",
    caption: "Señalización para comunicación comercial.",
    src: assetPath("bitcoin-payment-sign-print-design.png"),
    alt: "Bitcoin payment sign print design",
    format: "Material impreso / señalización",
    objective: "Comunicar aceptación de pago cripto de forma clara en punto de contacto físico.",
    role: "Diseño de pieza informativa y adaptación para impresión.",
    responsibilities: ["Comunicación comercial", "Diseño de señalización", "Preparación para impresión"],
    tools: "Illustrator, Photoshop",
    channel: "Punto de venta / Material impreso",
  },
  {
    title: "Criptocina — Restaurant Branding Design",
    caption: "Sistema visual para restaurante cripto.",
    src: assetPath("crypto-restaurant-branding-design.png"),
    alt: "Crypto restaurant branding design",
    format: "Branding / sistema visual",
    objective: "Organizar identidad y comunicación visual para una marca gastronómica con narrativa Web3.",
    role: "Diseño de sistema visual, piezas de marca y aplicaciones de comunicación.",
    responsibilities: ["Sistema visual", "Aplicaciones de marca", "Comunicación comercial"],
    tools: "Illustrator, Photoshop, Canva",
    channel: "Branding / Social Media / Material comercial",
  },
  {
    title: "Fidex — Digital Product Support",
    caption: "Sistema digital para claridad financiera.",
    src: assetPath("fintech-dashboard-ui-system-fidex.png"),
    alt: "Fidex fintech dashboard UI system",
    format: "UI/Product Support / Digital System",
    objective: "Organizar información financiera con claridad visual para web y producto digital.",
    role: "Diseño de interfaces, estructura visual y soporte de comunicación digital.",
    responsibilities: ["Estructura de interfaz", "Claridad de información", "Soporte visual digital"],
    tools: "Figma, Framer, Illustrator",
    channel: "Web / Producto digital",
  },
  {
    title: "Phronesis — Learning Platform System",
    caption: "Sistema educativo para contenido digital.",
    src: assetPath("web3-learning-platform-ui-system-phronesis.png"),
    alt: "Phronesis Web3 learning platform UI system",
    format: "Learning Platform System / UI Content",
    objective: "Organizar contenido educativo y navegación visual para una plataforma de aprendizaje Web3.",
    role: "Diseño visual, organización de contenido y soporte editorial para plataforma.",
    responsibilities: ["Sistema educativo", "Organización editorial", "Diseño de interfaz"],
    tools: "Figma, Photoshop, Illustrator",
    channel: "Plataforma digital / Contenido educativo",
  },
];

const brandGuidelines: PortfolioAsset = {
  title: "Colegio Samuel Juárez — Sistema de identidad",
  caption: "Lineamientos para comunicación institucional.",
  src: assetPath("school-brand-guidelines.jpeg"),
  alt: "Colegio Samuel Juárez brand guidelines preview",
  format: "Manual de identidad visual",
  objective: "Mantener consistencia gráfica y lineamientos de marca.",
  role: "Organización de lineamientos visuales para comunicación institucional.",
  responsibilities: ["Sistema de identidad", "Lineamientos de uso", "Comunicación institucional consistente"],
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
      <section id="services" className="scroll-reveal relative overflow-hidden border-t border-hairline py-14 lg:py-16">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-80 bg-gradient-to-b from-accent/6 to-transparent" />

        <div className="container">
          <div className="mb-8 flex items-center justify-between border-b border-hairline pb-4 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span>04 · Qué hago</span>
            <span className="hidden sm:inline">Editorial Content · Multi-platform Content</span>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:items-end">
            <h2 className="max-w-3xl font-display text-3xl leading-[1.02] tracking-normal text-balance sm:text-4xl lg:col-span-7 lg:text-5xl">
              Sistema de contenido
            </h2>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-4 lg:col-start-9">
              Organización editorial para sostener social media, newsletter y campaign assets sin perder ritmo ni consistencia.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 border-y border-hairline sm:grid-cols-2 lg:grid-cols-4">
            {contentSystems.map((item, index) => (
              <div
                key={item}
                className="group border-b border-hairline px-0 py-3.5 transition-colors hover:border-accent/30 sm:px-5 lg:border-r lg:[&:nth-child(4n)]:border-r-0"
              >
                <div className="mb-2 flex items-center justify-between gap-4">
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
            <span>05 · Contenido y video</span>
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
                <article key={item.title} className="motion-card group border-t border-hairline py-5 transition-colors duration-700 hover:border-accent/25">
                  <button type="button" onClick={() => setActiveAsset(item)} className="block w-full text-left" aria-label={`Ver pieza: ${item.title}`}>
                    <div className="mb-4 aspect-[4/3] w-full overflow-hidden rounded-[1.15rem] border border-hairline bg-surface/15 transition-colors duration-700 group-hover:border-white/15">
                      {isVideo ? (
                        <video
                          src={item.src}
                          muted
                          playsInline
                          preload="metadata"
                          className="h-full max-h-[18rem] w-full bg-background/55 object-cover opacity-[0.94] transition-opacity duration-700 group-hover:opacity-100 sm:max-h-[19rem]"
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
                          className="h-full w-full object-cover opacity-[0.94] transition-opacity duration-700 group-hover:opacity-100"
                        />
                      )}
                    </div>
                  </button>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.18em] text-accent">{item.format}</p>
                      <h3 className="mt-2 font-display text-lg leading-tight text-foreground transition-colors duration-700 group-hover:text-foreground">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground transition-colors duration-700 group-hover:text-foreground/72">{item.caption}</p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveAsset(item)}
                      className="mt-1 grid h-9 w-9 flex-none place-items-center rounded-full border border-hairline bg-surface/20 text-accent/80 transition-colors duration-700 hover:border-accent/30 hover:text-foreground group-hover:border-accent/25 group-hover:text-accent"
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
  const actionLabel = asset.actionLabel ?? (isVideo ? "Ver reel" : "Ver pieza");

  return (
    <div
      className="fixed inset-0 z-[80] flex items-end justify-center px-4 py-4 backdrop-blur-[2px] sm:items-center sm:px-6"
      style={{ backgroundColor: "rgb(0 0 0 / 0.92)" }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="asset-lightbox-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[1.25rem] border border-hairline bg-[#080808] shadow-soft">
        <div className="flex items-center justify-between border-b border-hairline px-5 py-4 sm:px-6">
          <p className="text-[11px] uppercase tracking-[0.22em] text-foreground/58">Ficha de contenido</p>
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/18 text-foreground/78 transition-colors hover:border-accent/30 hover:text-foreground"
            aria-label="Cerrar vista"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[minmax(0,1fr)_24rem]">
          <div className="border-b border-hairline bg-black/34 p-3 lg:border-b-0 lg:border-r lg:p-5">
            {isVideo ? (
              <video
                src={asset.src}
                controls
                playsInline
                preload="metadata"
                className="max-h-[72vh] w-full rounded-[1rem] bg-background object-contain"
                aria-label={asset.title}
              />
            ) : (
              <img
                src={asset.src}
                alt={asset.alt}
                loading="eager"
                decoding="async"
                className="max-h-[72vh] w-full rounded-[1rem] bg-background object-contain"
              />
            )}
          </div>

          <div className="flex flex-col justify-between gap-7 p-6 lg:p-8">
            <div className="space-y-6">
              <div className="space-y-3 border-b border-hairline pb-5">
                <h3 id="asset-lightbox-title" className="font-display text-2xl leading-tight text-foreground text-pretty sm:text-3xl">
                  {asset.title}
                </h3>
                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-accent">{asset.format}</p>
                  <p className="text-sm leading-relaxed text-foreground/72">{asset.caption}</p>
                </div>
              </div>

              <div className="space-y-5 text-sm">
                <AssetMeta label="Objetivo" value={asset.objective} />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.18em] text-foreground/48">Responsabilidades</p>
                  <ul className="mt-3 space-y-2">
                    {asset.responsibilities.map((item) => (
                      <li key={item} className="flex gap-3 leading-relaxed text-foreground/84">
                        <span className="mt-2 h-1 w-1 flex-none rounded-full bg-accent/80" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {asset.tools ? <AssetMeta label="Herramientas" value={asset.tools} /> : null}
                <AssetMeta label="Canal" value={asset.channel} />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={actionHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-accent-soft"
              >
                {actionLabel}
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-full border border-hairline bg-transparent px-5 py-3 text-sm text-foreground/72 transition-colors hover:border-accent/30 hover:text-foreground"
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
    <dt className="text-[10px] uppercase tracking-[0.18em] text-foreground/48">{label}</dt>
    <dd className="mt-2 break-words leading-relaxed text-foreground/84">{value}</dd>
  </div>
);
