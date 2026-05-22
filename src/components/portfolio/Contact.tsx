import { ArrowUpRight, Download, Link as LinkIcon, MapPin, MessageCircle } from "lucide-react";

const cvHref = `${import.meta.env.BASE_URL}CV_VisualDesigner_BrendaVega_2026_v2.pdf`;
export const whatsappHref =
  "https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20una%20oportunidad%20de%20Community%20Manager%20/%20Social%20Media.";

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
    <section id="contact" className="scroll-reveal relative scroll-mt-24 border-t border-white/12 bg-background py-12 text-foreground sm:py-14 lg:py-16">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-background" />

      <div className="container">
        <div className="grid grid-cols-1 gap-8 border-y border-white/16 py-6 sm:py-7 lg:grid-cols-12 lg:gap-12 lg:py-8">
          <div className="space-y-4 lg:col-span-7">
            <span className="text-xs uppercase tracking-[0.22em] text-foreground/76">06 · Contacto</span>
            <h2 className="max-w-3xl font-display text-2xl leading-[1.08] tracking-normal text-balance text-white sm:text-3xl lg:text-[2.65rem]">
              Disponible para Community Management, Social Media y sistemas editoriales para marcas digitales.
            </h2>

            <div className="space-y-3 pt-1">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-background shadow-soft transition-colors duration-700 hover:bg-accent-soft focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60"
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
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/[0.045] px-4 py-2.5 text-[12px] text-foreground/88 transition-colors duration-700 hover:border-accent/35 hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-accent/68" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-white/14 pt-4 text-sm text-foreground/80">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-accent/72" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
              <span>Community Manager · Social Media · Content Systems · Visual Content</span>
            </div>
          </div>

          <aside className="self-start border-l border-white/16 bg-white/[0.04] px-0 py-0 lg:col-span-4 lg:col-start-9 lg:px-7 lg:py-6">
            <div className="mb-5 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent/20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-foreground/76">Disponible para</span>
            </div>
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-white/12 pb-2.5 text-sm text-foreground/94 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-accent/72">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-7 flex flex-col items-start justify-between gap-4 border-t border-white/12 pt-5 text-xs sm:flex-row sm:items-center lg:mt-8">
          <p className="text-foreground/68">© 2026 Brenda Vega · Community Manager</p>
          <p className="text-foreground/82">Community Manager · Social Media · Content Creator · Visual Content Designer</p>
        </footer>
      </div>
    </section>
  );
};

export const FloatingWhatsApp = () => (
  <a
    href={whatsappHref}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contactar por WhatsApp"
    className="fixed bottom-5 right-5 z-[70] inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/24 bg-white/[0.09] text-white shadow-soft backdrop-blur-xl transition-all duration-500 hover:-translate-y-0.5 hover:border-accent/35 hover:bg-white hover:text-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/60 sm:bottom-6 sm:right-6 sm:h-14 sm:w-14"
  >
    <MessageCircle className="h-5 w-5" aria-hidden="true" />
  </a>
);
