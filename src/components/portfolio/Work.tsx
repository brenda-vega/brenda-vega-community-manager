import { ArrowUpRight } from "lucide-react";

type Project = {
  index: string;
  name: string;
  eyebrow: string;
  category: string;
  description: string[];
  did: string[];
  result?: string;
  role?: string;
  formats?: string;
  responsibilities?: string[];
  tools?: string;
  tags: string[];
  image: string;
  featured?: boolean;
};

const assetPath = (filename: string) => `${import.meta.env.BASE_URL}assets/${filename}`;

const projects: Project[] = [
  {
    index: "01",
    name: "Kairos Research — Redes sociales, newsletter y contenido visual",
    eyebrow: "SOCIAL MEDIA",
    category: "Redes sociales · Newsletter · Sistema editorial",
    description: [
      "Sistema editorial multiformato para redes, newsletter, infografías y video corto con seguimiento de comunidad.",
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
      "+129% crecimiento orgánico · 30-35% open rate · +100 piezas visuales",
    role: "Community Manager & Visual Content Designer",
    formats: "Newsletter semanal, reels educativos, infografías, contenido diario",
    responsibilities: ["Calendario editorial", "Adaptación para redes", "Comunicación educativa"],
    tools: "Metricool, CapCut, Premiere Pro, Photoshop",
    tags: ["Redes sociales", "Newsletter", "Reels", "Infografías"],
    image: assetPath("    web3-editorial-content-system-kairos.png"),
    featured: true,
  },
  {
    index: "02",
    name: "Lytryum — Comunidad y contenido educativo",
    eyebrow: "COMUNIDAD",
    category: "Comunidad · Contenido educativo · Redes sociales",
    description: [
      "Construcción de comunidad educativa con contenido multicanal, piezas editoriales y comunicación clara en español.",
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
      "4 comunidades desde cero · +50 piezas educativas · crecimiento 100% orgánico",
    role: "Community Builder & Content Designer",
    formats: "Contenido educativo, posts, videos, comunidad, piezas multicanal",
    responsibilities: ["Community engagement", "Contenido educativo", "Adaptación multiplataforma"],
    tools: "Canva, Photoshop, Discord, Notion",
    tags: ["Comunidad", "Educación", "Discord", "Crecimiento orgánico"],
    image: assetPath("    web3-education-content-system-lytryum.png"),
    featured: true,
  },
  {
    index: "03",
    name: "Exponencial Cripto Club — Redes, eventos y contenido visual",
    eyebrow: "CONTENIDO SOCIAL",
    category: "Redes sociales · Eventos · Campañas",
    description: [
      "Campañas sociales, materiales para eventos y piezas multicanal para activar comunidad y presencia digital.",
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
      "6+ plataformas · eventos y campañas · thumbnails, videos y piezas sociales",
    role: "Social Media & Visual Content Designer",
    formats: "Posts, thumbnails, videos, materiales de evento, campañas sociales",
    responsibilities: ["Piezas promocionales", "Comunicación de eventos", "Consistencia por canal"],
    tools: "Photoshop, Illustrator, Canva, CapCut",
    tags: ["Redes sociales", "Eventos", "Thumbnails", "Video"],
    image: assetPath("crypto-community-content-system-exponencial.png"),
    featured: true,
  },
];

const featuredProjects = projects.filter((project) => project.featured);

export const Work = () => {
  return (
    <section id="work" className="relative overflow-hidden border-t border-hairline py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

      <div className="container">
        <div className="mb-12 border-b border-hairline pb-10 lg:mb-14">
          <div className="mb-8 flex items-center justify-between text-xs uppercase tracking-[0.22em] text-muted-foreground">
            <span className="reveal inline-flex items-center gap-3">
              <span className="h-px w-10 bg-accent/60" />
              03 / Proyectos seleccionados
            </span>
            <span className="hidden lg:inline">Redes sociales · Reels · Comunidad · Métricas</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-end">
            <h2 className="reveal reveal-delay-1 max-w-4xl font-display text-4xl leading-[1.02] tracking-normal text-balance sm:text-5xl lg:col-span-8 lg:text-6xl">
              Proyectos seleccionados
            </h2>
            <p className="reveal reveal-delay-2 max-w-md text-sm leading-relaxed text-muted-foreground lg:col-span-3 lg:col-start-10">
              Trabajo aplicado en contenido editorial, comunidad, campañas sociales y sistemas de comunicación digital.
            </p>
          </div>
        </div>

        <div className="space-y-6 lg:space-y-8">
          {featuredProjects.map((project) => (
            <div key={project.name} className="space-y-5">
              <ProjectCase project={project} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ProjectCase = ({
  project,
}: {
  project: Project;
}) => {
  return (
    <article
      className="case-study group reveal relative overflow-hidden rounded-[1.5rem] border border-hairline bg-surface/25"
    >
      <div className="grid grid-cols-1 md:min-h-[390px] md:grid-cols-12 lg:min-h-[430px]">
        <div className="flex flex-col justify-between gap-5 p-6 sm:p-7 md:col-span-5 md:p-8 lg:p-8">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-6">
              <span className="font-display text-[1.7rem] leading-none text-foreground/[0.055] sm:text-4xl md:text-5xl md:text-foreground/[0.065]">{project.index}</span>
              <span className="rounded-full border border-hairline bg-background/35 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-foreground/70">
                {project.eyebrow}
              </span>
            </div>

            <div className="space-y-3.5">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent sm:text-[11px]">{project.category}</p>
              <h3 className="font-display text-2xl leading-[1.08] tracking-normal text-foreground text-pretty sm:text-3xl lg:text-[2rem]">
                {project.name}
              </h3>
              {project.result ? (
                <p className="max-w-sm border-l border-accent/50 pl-3 text-sm leading-snug text-foreground/86 text-pretty">
                  {project.result}
                </p>
              ) : null}
              <div className="max-w-sm text-sm leading-relaxed text-muted-foreground text-pretty">
                {project.description.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>

            <dl className="grid max-w-md grid-cols-1 gap-2.5 border-y border-hairline py-3 text-xs opacity-[0.88] transition-opacity duration-700 group-hover:opacity-100 sm:grid-cols-2">
              {project.role ? <ProjectMeta label="Rol" value={project.role} /> : null}
              {project.formats ? <ProjectMeta label="Formatos" value={project.formats} /> : null}
              {project.responsibilities ? <ProjectMeta label="Responsabilidades" value={project.responsibilities.join(" · ")} /> : null}
              <ProjectMeta label="Resultados" value={project.did.slice(0, 3).join(" · ")} />
              {project.tools ? <ProjectMeta label="Herramientas" value={project.tools} /> : null}
            </dl>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#content-video"
              aria-label={`Ver contenido destacado relacionado con ${project.name}`}
              className="group/case ml-0 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] text-foreground/70 outline-none transition-colors duration-700 hover:text-foreground focus-visible:text-foreground sm:ml-2"
            >
              <span className="link-underline">Ver piezas</span>
              <ArrowUpRight
                className="h-4 w-4 text-accent/72 transition-all duration-700 group-hover/case:translate-x-0.5 group-hover/case:-translate-y-0.5 group-hover/case:text-accent"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        <div className="relative overflow-hidden md:col-span-7">
          <div className="relative block h-full min-h-[220px] bg-background/24 sm:min-h-[280px] md:min-h-[390px]">
            <img
              src={project.image}
              alt={`${project.name} / ${project.category}`}
              loading="lazy"
              decoding="async"
              width={1400}
              height={980}
              className="case-study-image h-full w-full object-contain p-3 sm:p-5 md:p-6 lg:p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/34 via-background/0 to-background/10 opacity-55 transition-opacity duration-1000 group-hover:opacity-60" />
            <div className="absolute inset-0 bg-transparent" />
          </div>
        </div>
      </div>
    </article>
  );
};

const ProjectMeta = ({ label, value }: { label: string; value: string }) => (
  <div>
    <dt className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</dt>
    <dd className="mt-1 leading-snug text-foreground/82">{value}</dd>
  </div>
);
