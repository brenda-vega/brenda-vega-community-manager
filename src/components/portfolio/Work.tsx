import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import kairos from "@/assets/kairos-research-product-visual-system.png";
import lytryum from "@/assets/lytryum-web3-education-brand-system.png";
import exponencial from "@/assets/exponencial-event-campaign-design.png";
import fidex from "@/assets/fidex-capital-fintech-ui-design.png";
import phronesis from "@/assets/phronesis-fintech-dashboard-product-design.png";

type Project = {
  index: string;
  name: string;
  eyebrow: string;
  category: string;
  slug: string;
  caseStudyPath: string;
  hasCaseStudy?: boolean;
  description: string[];
  did: string[];
  result?: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    index: "01",
    name: "Kairos Research — Social Media, Newsletter & Visual Content",
    eyebrow: "SOCIAL MEDIA",
    category: "Social Media · Newsletter · Visual Content",
    slug: "kairos",
    caseStudyPath: "/projects/kairos",
    hasCaseStudy: true,
    description: [
      "Gestión de contenido y comunicación visual para marca especializada en análisis Web3. Producción de infografías, contenido editorial, videos cortos y piezas para múltiples plataformas con enfoque en claridad, consistencia y crecimiento orgánico.",
    ],
    did: [
      "+129% crecimiento orgánico de comunidad",
      "30-35% open rate sostenido durante 42 semanas",
      "+100 piezas visuales e infografías",
      "Contenido diario para TikTok durante aproximadamente 3 meses",
      "Newsletter editorial",
      "Adaptación multiformato",
    ],
    result:
      "+129% crecimiento orgánico, 30-35% open rate y más de 100 piezas visuales producidas.",
    tags: ["Social Media", "Newsletter", "Reels", "Infographics"],
    image: kairos,
    featured: true,
  },
  {
    index: "02",
    name: "Fidex Capital",
    eyebrow: "UI VISUAL DESIGN",
    category: "Digital Communication · Landing Content · Brand Consistency",
    slug: "fidex",
    caseStudyPath: "/projects/fidex",
    hasCaseStudy: true,
    description: [
      "Desarrollé comunicación visual para una experiencia digital financiera, cuidando claridad del mensaje, consistencia de marca y adaptación de contenido entre pantallas.",
    ],
    did: [
      "Comunicación digital",
      "Consistencia de marca",
      "Adaptación responsive",
      "Jerarquía de contenido",
      "Piezas para producto",
      "Visual branding",
    ],
    result:
      "Base visual adaptable para comunicar valor con claridad en desktop y mobile.",
    tags: ["Digital Content", "Branding", "Responsive", "Communication"],
    image: fidex,
  },
  {
    index: "03",
    name: "Phronesis",
    eyebrow: "DASHBOARD SYSTEM",
    category: "Metrics · Reports · Information Clarity",
    slug: "phronesis",
    caseStudyPath: "/projects/phronesis",
    hasCaseStudy: true,
    description: [
      "Organicé información compleja en una experiencia visual clara para facilitar lectura de métricas, reportes y datos relevantes para toma de decisiones.",
    ],
    did: [
      "Métricas",
      "Reportes",
      "Jerarquía de información",
      "Claridad visual",
      "Organización de datos",
      "Comunicación ejecutiva",
    ],
    result:
      "Estructura preparada para leer métricas y reportes con mayor claridad.",
    tags: ["Metrics", "Reports", "Information Design", "Dashboard"],
    image: phronesis,
  },
  {
    index: "04",
    name: "Lytryum — Community Building & Educational Content",
    eyebrow: "COMMUNITY BUILDING",
    category: "Community Building · Educational Content · Social Media",
    slug: "lytryum",
    caseStudyPath: "/projects/lytryum",
    hasCaseStudy: true,
    description: [
      "Construcción de comunidad digital desde cero para academia Web3 en español. Desarrollo de contenido educativo, adaptación multicanal y comunicación visual para redes sociales.",
    ],
    did: [
      "4 comunidades construidas desde cero",
      "+50 piezas educativas",
      "Discord, LinkedIn, YouTube e Instagram",
      "Crecimiento 100% orgánico",
      "Contenido educativo",
      "Adaptación multicanal",
    ],
    result:
      "4 comunidades construidas desde cero con contenido educativo y crecimiento 100% orgánico.",
    tags: ["Community", "Education", "Discord", "Organic Growth"],
    image: lytryum,
  },
  {
    index: "05",
    name: "Exponencial Cripto Club — Social Media, Events & Visual Content",
    eyebrow: "SOCIAL CONTENT",
    category: "Social Media · Events · Visual Content",
    slug: "exponencial",
    caseStudyPath: "/projects/exponencial",
    hasCaseStudy: true,
    description: [
      "Producción de contenido visual, thumbnails, piezas promocionales y materiales para eventos de comunidad cripto. Gestión de contenido multicanal con enfoque en consistencia visual y comunicación digital.",
    ],
    did: [
      "Gestión de contenido en 6+ plataformas",
      "Materiales para eventos y campañas",
      "Thumbnails, videos y piezas para redes sociales",
      "Soporte visual para comunidad y embajadores",
      "Comunicación multicanal",
      "Consistencia visual",
    ],
    result:
      "Contenido visual para 6+ plataformas, eventos, campañas y comunidad.",
    tags: ["Social Media", "Events", "Thumbnails", "Video"],
    image: exponencial,
  },
];

export const Work = () => {
  return (
    <section id="work" className="relative overflow-hidden border-t border-hairline py-32 lg:py-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

      <div className="container">
        <div className="mb-20 border-b border-hairline pb-12 lg:mb-24">
          <div className="mb-10 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="reveal inline-flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              03 / Selected Projects
            </span>
            <span className="hidden lg:inline">Social media · Reels · Community · Metrics</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="reveal reveal-delay-1 max-w-4xl font-display text-4xl leading-[1.02] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-7xl">
              Selected Work
            </h2>
            <p className="reveal reveal-delay-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Proyectos de social media, contenido visual y comunicación digital para marcas que necesitan consistencia, presencia activa y ejecución medible.
            </p>
          </div>
        </div>

        <div className="space-y-10 lg:space-y-16">
          {projects.map((project, i) => (
            <ProjectCase
              key={project.name}
              project={project}
              reverse={i % 2 === 1}
              compact={!project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCase = ({
  project,
  reverse,
  compact,
}: {
  project: Project;
  reverse?: boolean;
  compact?: boolean;
}) => {
  return (
    <article
      className={`case-study group reveal relative overflow-hidden border border-hairline bg-surface/25 ${
        compact ? "rounded-[1.5rem]" : "rounded-[1.75rem]"
      }`}
    >
      <div className={`grid grid-cols-1 md:grid-cols-12 ${compact ? "md:min-h-[430px] lg:min-h-[500px]" : "md:min-h-[500px] lg:min-h-[610px]"}`}>
        <div className={`relative overflow-hidden ${compact ? "md:col-span-7" : "md:col-span-8"} ${reverse ? "md:order-2" : ""}`}>
          <Link
            to={project.caseStudyPath}
            aria-label={`Open case study for ${project.name}`}
            className={`relative block h-full bg-background/35 outline-none focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background ${compact ? "min-h-[220px] sm:min-h-[280px] md:min-h-[360px]" : "min-h-[240px] sm:min-h-[310px] md:min-h-[420px]"}`}
          >
            <img
              src={project.image}
              alt={`${project.name} / ${project.category}`}
              loading="lazy"
              decoding="async"
              width={1400}
              height={980}
              className="case-study-image h-full w-full object-contain p-3 sm:p-5 md:p-6 lg:-translate-y-6 lg:p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-background/0 to-background/18 opacity-70 transition-opacity duration-700 group-hover:opacity-90" />
            <div className="absolute inset-0 bg-accent/0 mix-blend-soft-light transition-colors duration-700 group-hover:bg-accent/10" />
            <div className="absolute left-5 top-5 rounded-full border border-white/10 bg-background/45 px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-foreground/80 backdrop-blur-xl">
              {project.eyebrow}
            </div>
          </Link>
        </div>

        <div
          className={`flex flex-col justify-between gap-8 p-6 sm:p-7 md:p-8 lg:gap-12 lg:p-12 ${
            compact ? "md:col-span-5" : "md:col-span-4"
          } ${reverse ? "md:order-1" : ""}`}
        >
          <div className="space-y-6 md:space-y-7 lg:space-y-8">
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-[1.7rem] leading-none text-foreground/[0.055] sm:text-4xl md:text-5xl md:text-foreground/[0.065] lg:text-6xl lg:text-foreground/[0.075]">{project.index}</span>
            </div>

            <div className="space-y-3.5 md:space-y-4">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent sm:text-[11px] md:tracking-[0.22em]">{project.category}</p>
              <h3 className="font-display text-2xl leading-[1.08] tracking-normal text-foreground text-pretty sm:text-3xl md:text-4xl md:text-balance lg:text-5xl">
                <Link to={project.caseStudyPath} className="outline-none transition-colors duration-500 hover:text-accent-soft focus-visible:text-accent-soft">
                  {project.name}
                </Link>
              </h3>
              <div className="max-w-sm space-y-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5 md:space-y-6">
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-hairline bg-background/35 px-2.5 py-1 text-[10px] uppercase tracking-[0.11em] text-muted-foreground transition-colors duration-500 group-hover:border-accent/20 group-hover:text-foreground/78 sm:px-3 sm:text-[11px] sm:tracking-[0.12em]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              {project.hasCaseStudy ? (
                <Link
                  to={project.caseStudyPath}
                  aria-label={`View case study for ${project.name}`}
                  className="group/case inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/70 outline-none transition-colors duration-500 hover:text-foreground focus-visible:text-foreground focus-visible:ring-1 focus-visible:ring-accent/50 focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <span className="link-underline">View Case Study</span>
                  <ArrowUpRight
                    className="h-4 w-4 text-accent/80 transition-transform duration-500 group-hover/case:translate-x-1 group-hover/case:-translate-y-1 group-focus-visible/case:translate-x-1 group-focus-visible/case:-translate-y-1"
                    aria-hidden="true"
                  />
                </Link>
              ) : (
                <button
                  type="button"
                  aria-disabled="true"
                  aria-label={`View case study for ${project.name} - coming soon`}
                  data-case-study-path={project.caseStudyPath}
                  className="group/case inline-flex cursor-default items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-foreground/38 outline-none transition-colors duration-500"
                >
                  <span>View Case Study</span>
                  <ArrowUpRight className="h-4 w-4 text-accent/35" aria-hidden="true" />
                </button>
              )}

            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
