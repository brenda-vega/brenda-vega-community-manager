import { LayoutGrid, Layers3, PenTool } from "lucide-react";

const blocks = [
  { icon: Layers3, label: "Community management", desc: "Gestión de comunidades, conversación activa y seguimiento de interacción en canales digitales." },
  { icon: PenTool, label: "Content design", desc: "Producción de contenido visual, reels, piezas editoriales y comunicación clara para redes sociales." },
  { icon: LayoutGrid, label: "Social media execution", desc: "Calendarios editoriales, adaptación multiformato y reportes para sostener presencia digital." },
];

const principles = ["consistencia", "presencia activa", "ritmo de publicación", "medición de contenido"];

const focus = [
  "Community Management",
  "Social Media",
  "Visual Content",
  "Content Design",
  "Reels",
  "Short-form Video",
  "Editorial Calendars",
  "Engagement",
  "Metrics & Reports",
];

export const Systems = () => {
  return (
    <section id="systems" className="relative overflow-hidden border-t border-hairline py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-accent opacity-34" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

      <div className="container">
        <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>08 · What I bring to creative teams</span>
          <span className="hidden sm:inline">Social media · Content execution</span>
        </div>

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7 space-y-8">
            <span className="font-display text-7xl leading-none text-foreground/8 sm:text-8xl">08</span>
            <h2 className="max-w-3xl font-display text-3xl tracking-tight text-balance sm:text-4xl lg:text-6xl">
              Más que publicaciones aisladas.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty lg:text-lg">
              Me interesa gestionar contenido que ayude a las marcas a mantener consistencia,
              presencia activa, crecimiento orgánico y lectura clara de resultados entre plataformas.
            </p>

            <div className="grid border-y border-hairline sm:grid-cols-4">
              {principles.map((item) => (
                <div key={item} className="border-b border-hairline py-5 text-sm text-foreground/80 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0 sm:border-hairline">
                  {item}
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-4">
              <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">Por eso mi trabajo suele enfocarse en</p>
              <div className="flex flex-wrap gap-2">
                {focus.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-hairline bg-background/35 px-3.5 py-1.5 text-sm text-foreground/84 transition-colors hover:border-accent/30 hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3 lg:pt-28">
            {blocks.map((b, index) => (
              <div
                key={b.label}
                className="group grid grid-cols-[auto_1fr] gap-4 border-t border-hairline py-6 transition-colors hover:border-accent/30"
              >
                <div className="flex items-start gap-4">
                  <span className="font-display text-sm text-muted-foreground/70">0{index + 1}</span>
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-hairline bg-surface/45 transition-colors group-hover:border-accent/30">
                    <b.icon className="h-4 w-4 text-accent" />
                  </div>
                </div>
                <div>
                  <h4 className="font-display text-base text-foreground">{b.label}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
