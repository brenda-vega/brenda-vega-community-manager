export const About = () => {
  const clientSignals = ["Kairos Research", "Lytryum", "Exponencial Cripto Club", "Turismo", "Branding institucional", "Ecommerce"];
  const toolSignals = ["Canva", "Figma", "Photoshop", "CapCut", "Premiere", "GA4", "Search Console", "Metricool", "Meta Business Suite", "Notion"];

  return (
    <section id="about" className="relative overflow-hidden border-t border-hairline py-24 lg:py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-accent/8 to-transparent" />
      <div className="container">
        <div className="mb-10 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>02 · Perfil</span>
          <span className="hidden sm:inline">Community · Social Media · Content Systems</span>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="space-y-5">
              <span className="font-display text-5xl leading-none text-foreground/8 sm:text-6xl">02</span>
              <h2 className="max-w-sm font-display text-2xl leading-tight text-foreground sm:text-3xl">
                Contenido, comunicación visual y sistemas editoriales.
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-6 border-l border-hairline pl-6 text-base leading-relaxed text-muted-foreground text-pretty sm:pl-8 lg:text-lg">
              <p>
                Trabajo en la intersección entre contenido, comunicación visual y sistemas editoriales para marcas digitales y proyectos tecnológicos.
              </p>
              <p>
                He colaborado en ecosistemas de contenido para Kairos Research, Lytryum, Exponencial Cripto Club y proyectos de turismo, branding institucional y ecommerce, desarrollando piezas orientadas a comunicación, organización visual y distribución multi-plataforma.
              </p>

              <div className="grid gap-7 border-y border-hairline py-6 text-sm leading-relaxed lg:grid-cols-2">
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Marcas / contextos</p>
                  <div className="flex flex-wrap gap-2">
                    {clientSignals.map((item) => (
                      <span key={item} className="rounded-full border border-hairline bg-surface/28 px-3 py-1.5 text-foreground/76">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Stack operativo</p>
                  <div className="flex flex-wrap gap-2">
                    {toolSignals.map((item) => (
                      <span key={item} className="rounded-full border border-hairline bg-surface/28 px-3 py-1.5 text-foreground/76">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
