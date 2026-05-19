import { CalendarDays, Film, FileText, LineChart, MessageCircle, PenTool, Send, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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

type Format = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

const formats: Format[] = [
  {
    title: "Reels / TikTok / Shorts",
    desc: "Edición de video corto, captions, cortes dinámicos y adaptación visual para contenido educativo o promocional.",
    icon: Film,
  },
  {
    title: "Carruseles",
    desc: "Diseño de contenido secuencial para explicar ideas, comunicar ofertas y mejorar claridad en redes sociales.",
    icon: Send,
  },
  {
    title: "Thumbnails",
    desc: "Diseño de portadas y miniaturas para mejorar reconocimiento visual y lectura rápida del contenido.",
    icon: Sparkles,
  },
  {
    title: "Stories",
    desc: "Piezas rápidas para promociones, recordatorios, interacción y presencia diaria de marca.",
    icon: MessageCircle,
  },
  {
    title: "Newsletters",
    desc: "Contenido editorial, estructura visual y comunicación periódica orientada a retención.",
    icon: FileText,
  },
  {
    title: "Landing pages básicas",
    desc: "Páginas simples para presentar servicios, campañas o contenido con estructura clara y visual consistente.",
    icon: PenTool,
  },
];

const optionalAsset = `${import.meta.env.BASE_URL}AIRDROPS%202025-Cover.jpg`;

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
            <div className="overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/20 p-3 shadow-soft lg:col-span-5">
              <img
                src={optionalAsset}
                alt="Airdrops 2025 cover"
                loading="lazy"
                width={1200}
                height={900}
                className="hidden h-full min-h-[320px] w-full rounded-[1.15rem] object-cover"
                onLoad={(event) => {
                  event.currentTarget.classList.remove("hidden");
                  event.currentTarget.nextElementSibling?.classList.add("hidden");
                }}
                onError={(event) => {
                  event.currentTarget.classList.add("hidden");
                  event.currentTarget.nextElementSibling?.classList.remove("hidden");
                }}
              />
              <div className="grid min-h-[320px] place-items-center rounded-[1.15rem] border border-hairline bg-background/35 p-8 text-center">
                <div className="max-w-xs space-y-4">
                  <span className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-hairline bg-surface/45 text-accent/90">
                    <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  </span>
                  <p className="font-display text-xl text-foreground">AIRDROPS 2025-Cover.jpg</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    Placeholder listo para mostrar el asset cuando se agregue al folder de assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:col-span-7">
              {formats.map(({ title, desc, icon: Icon }) => (
                <div
                  key={title}
                  className="motion-card group border-t border-hairline py-6 transition-colors hover:border-accent/30"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-hairline bg-surface/45 text-accent/90 transition-colors group-hover:border-accent/30">
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg text-foreground">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
                </div>
              ))}
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
