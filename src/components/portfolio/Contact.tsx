import { ArrowUpRight, Download, Link as LinkIcon, MapPin, MessageCircle } from "lucide-react";

const cvHref = `${import.meta.env.BASE_URL}CV_VisualDesigner_BrendaVega_2026_v2.pdf`;

const services = [
  "Community Manager",
  "Social Media Manager",
  "Content Creator",
  "Visual Content Designer",
];

const secondaryLinks = [
  {
    label: "Ver LinkedIn",
    href: "https://www.linkedin.com/in/brendavega012/",
    icon: ArrowUpRight,
  },
  {
    label: "Ver enlaces",
    href: "https://linktr.ee/brendavega012",
    icon: LinkIcon,
  },
  {
    label: "Descargar CV",
    href: cvHref,
    icon: Download,
  },
];

export const Contact = () => {
  return (
    <section id="contact" className="scroll-reveal relative scroll-mt-24 border-t border-hairline py-20 sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-accent/6 to-transparent" />

      <div className="container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="space-y-7 lg:col-span-7 lg:space-y-8">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">07 · Contacto</span>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.04] tracking-tight text-balance sm:text-5xl lg:text-6xl">
              Disponible para Community Manager, Social Media y contenido visual.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty lg:text-lg">
              Ejecución de redes sociales, reels, calendarios editoriales, contenido visual y reportes para marcas que necesitan presencia activa.
            </p>

            <div className="space-y-5 pt-1 sm:pt-2">
              <a
                href="https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20una%20oportunidad%20de%20Community%20Manager%20/%20Social%20Media."
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-medium text-background transition-colors duration-700 hover:bg-accent-soft"
              >
                Contactar por WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="flex flex-wrap gap-3">
                {secondaryLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-hairline bg-surface/28 px-4 py-2.5 text-[12px] text-foreground/72 transition-colors duration-700 hover:border-accent/30 hover:bg-surface/60 hover:text-foreground"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-accent/80" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-hairline pt-6 text-sm text-muted-foreground/84">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
              <span>Social media · Reels · Content Creator · Visual Content Designer</span>
            </div>
          </div>

          <aside className="self-start rounded-[1.75rem] border border-hairline bg-surface/28 p-7 lg:col-span-4 lg:col-start-9 lg:p-8">
            <div className="mb-7 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/25" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/88">Disponible para</span>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-hairline pb-3 text-sm text-foreground/78 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent/80">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-hairline pt-8 text-xs sm:flex-row sm:items-center lg:mt-24 lg:pt-10">
          <p className="text-foreground/55">© 2026 Brenda Vega · Community Manager</p>
          <p className="text-foreground/68">Community Manager · Social Media · Content Creator · Visual Content Designer</p>
        </footer>
      </div>
    </section>
  );
};
