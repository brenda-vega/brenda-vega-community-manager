export const About = () => {
  const clientSignals = ["Kairos Research", "Lytryum", "Exponencial", "Travel VYP", "Colegio Samuel Juárez", "Tequila Jalisco"];
  const operatingSignals = ["42 semanas activas", "newsletter semanal", "contenido multi-plataforma", "sistema editorial", "campañas educativas"];
  const toolSignals = ["Canva", "Meta Business Suite", "Metricool", "GA4", "Excel / Google Sheets", "CapCut", "Premiere", "Figma"];

  return (
    <section id="about" className="relative overflow-hidden border-t border-hairline py-32 lg:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-accent/8 to-transparent" />
      <div className="container">
        <div className="mb-16 flex items-center justify-between border-b border-hairline pb-5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
          <span>02 · Perfil</span>
          <span className="hidden sm:inline">Contenido · Comunidad · Ejecución</span>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="sticky top-32 space-y-8">
              <span className="font-display text-7xl leading-none text-foreground/8 sm:text-8xl">02</span>
              <h2 className="max-w-sm font-display text-3xl leading-tight text-foreground sm:text-4xl">
                Contenido visual y social media con ejecución constante.
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="space-y-8 border-l border-hairline pl-6 text-lg leading-relaxed text-muted-foreground text-pretty sm:pl-8 lg:text-xl">
              <p>
                He trabajado en tecnología, educación digital, turismo, ecommerce y comunidades online,
                gestionando contenido, redes sociales y comunicación visual para mantener presencia
                activa entre plataformas, campañas y formatos reales.
              </p>
              <p>
                Mi enfoque está en producir contenido <span className="text-foreground">claro, consistente y accionable</span>,
                conectando calendarios editoriales, piezas visuales, reels, métricas y reportes
                dentro de equipos creativos y entornos digitales de ritmo rápido.
              </p>

              <div className="grid gap-7 border-y border-hairline py-7 text-sm leading-relaxed lg:grid-cols-3">
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
                  <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Señales de ejecución</p>
                  <div className="flex flex-wrap gap-2">
                    {operatingSignals.map((item) => (
                      <span key={item} className="rounded-full border border-hairline bg-background/35 px-3 py-1.5 text-foreground/76">
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
