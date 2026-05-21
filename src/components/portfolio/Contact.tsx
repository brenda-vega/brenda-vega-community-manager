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
    <section id="contact" className="scroll-reveal relative scroll-mt-24 border-t border-white/12 bg-[#f4f1ea] py-20 text-background sm:py-24 lg:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-[#f4f1ea]" />

      <div className="container">
        <div className="grid grid-cols-1 gap-10 border-y border-background/18 py-8 sm:py-10 lg:grid-cols-12 lg:gap-16 lg:py-14">
          <div className="space-y-7 lg:col-span-7 lg:space-y-8">
            <span className="text-xs uppercase tracking-[0.22em] text-background/62">06 · Contacto</span>
            <h2 className="max-w-4xl font-display text-4xl leading-[1.04] tracking-normal text-balance text-background sm:text-5xl lg:text-6xl">
              Disponible para proyectos de Community Management, contenido visual y sistemas editoriales para marcas digitales.
            </h2>

            <div className="space-y-5 pt-1 sm:pt-2">
              <a
                href="https://wa.me/524445492516?text=Hola%20Brenda,%20vi%20tu%20portfolio%20y%20me%20interesa%20hablar%20sobre%20una%20oportunidad%20de%20Community%20Manager%20/%20Social%20Media."
                target="_blank"
                rel="noopener noreferrer"
                className="soft-button inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-semibold text-foreground shadow-soft transition-colors duration-700 hover:bg-background/88"
              >
                WhatsApp
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
              </a>

              <div className="flex flex-wrap gap-3">
                {secondaryLinks.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="soft-button inline-flex items-center gap-2 rounded-full border border-background/24 bg-transparent px-4 py-2.5 text-[12px] text-background/76 transition-colors duration-700 hover:border-background/45 hover:bg-background/8 hover:text-background"
                  >
                    {label}
                    <Icon className="h-3.5 w-3.5 text-background/62" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 border-t border-background/18 pt-6 text-sm text-background/72">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-background/68" aria-hidden="true" />
                San Luis Potosí, México - Disponible para Remoto
              </span>
              <span>Community Manager · Social Media · Content Systems · Visual Content</span>
            </div>
          </div>

          <aside className="self-start border-l border-background/18 pl-0 lg:col-span-4 lg:col-start-9 lg:pl-8">
            <div className="mb-7 flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-background/20" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-background" />
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-background/70">Disponible para</span>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center justify-between border-b border-background/16 pb-3 text-sm text-background/82 last:border-b-0 last:pb-0">
                  {s}
                  <span className="text-background/52">+</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-background/18 pt-8 text-xs sm:flex-row sm:items-center lg:mt-16 lg:pt-10">
          <p className="text-background/58">© 2026 Brenda Vega · Community Manager</p>
          <p className="text-background/70">Community Manager · Social Media · Content Creator · Visual Content Designer</p>
        </footer>
      </div>
    </section>
  );
};
