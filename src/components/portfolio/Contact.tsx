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
    <section id="contact" className="scroll-reveal relative scroll-mt-24 border-t border-white/10 bg-background py-14 text-foreground sm:py-16 lg:py-20">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-background" />

      <div className="container">
        <div className="grid grid-cols-1 gap-8 border-y border-white/12 py-7 sm:py-8 lg:grid-cols-12 lg:gap-14 lg:py-10">
          <div className="space-y-5 lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/68">06 · Contacto</span>
            <h2 className="max-w-3xl font-display text-2xl leading-[1.08] tracking-normal text-balance text-white sm:text-3xl lg:text-4xl">
              Disponible para Community Management, Social Media y sistemas editoriales para marcas digitales.
            </h2>

            <div className="space-y-4 pt-1">
              <a
                href="https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20una%20oportunidad%20de%20Community%20Manager%20/%20Social%20Media."
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-background shadow-soft transition-colors duration-700 hover:bg-accent-soft"
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
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-4 py-2.5 text-[12px] text-foreground/82 transition-colors duration-700 hover:border-accent/35 hover:bg-white/[0.07] hover:text-white"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-accent/68" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/12 pt-5 text-sm text-foreground/72">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent/72" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
              <span>Community Manager · Social Media · Content Systems · Visual Content</span>
            </div>
          </div>

          <aside className="self-start border-l border-white/12 bg-white/[0.025] px-0 py-0 lg:col-span-4 lg:col-start-9 lg:px-8 lg:py-7">
            <div className="mb-6 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/68">Disponible para</span>
            </div>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-white/10 pb-2.5 text-sm text-foreground/88 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent/72">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center lg:mt-10">
          <p className="text-foreground/58">© 2026 Brenda Vega · Community Manager</p>
          <p className="text-foreground/74">Community Manager · Social Media · Content Creator · Visual Content Designer</p>
        </footer>
      </div>
    </section>
  );
};
