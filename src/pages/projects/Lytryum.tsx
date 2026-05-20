import { CaseMetric } from "@/components/portfolio/CaseMetric";
import CaseStudyNav from "@/components/portfolio/CaseStudyNav";
import lytryumVisual from "@/assets/lytryum-web3-education-brand-system.png";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  { value: "4", label: "Comunidades construidas desde cero" },
  { value: "50+", label: "Piezas educativas" },
  { value: "100%", label: "Crecimiento orgánico en Discord, LinkedIn, YouTube e Instagram" },
];

const decisions = [
  "Construir comunidad desde cero con contenido educativo y comunicación constante.",
  "Adaptar mensajes para Discord, LinkedIn, YouTube e Instagram.",
  "Crear piezas educativas claras para explicar temas Web3 a una audiencia en español.",
  "Mantener crecimiento orgánico mediante consistencia, presencia activa y contenido útil.",
];

const tags = [
  "Comunidad",
  "Contenido educativo",
  "Discord",
  "LinkedIn",
  "YouTube",
  "Crecimiento orgánico",
];

const Lytryum = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-hairline py-24 sm:py-28 lg:py-36">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-work-radial" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-grain opacity-20" />

        <div className="container">
          <Link
            to="/#work"
            className="group reveal mb-16 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.22em] text-muted-foreground transition-all duration-500 hover:-translate-y-0.5 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 text-accent transition-transform duration-500 group-hover:-translate-x-1" aria-hidden="true" />
            Volver a proyectos
          </Link>

          <div className="reveal reveal-delay-1 grid grid-cols-1 gap-9 lg:grid-cols-12 lg:items-end lg:gap-12">
            <div className="space-y-6 lg:col-span-8">
              <span className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                <span className="h-px w-10 bg-accent/60" />
                Comunidad · Contenido educativo · Redes sociales
              </span>
              <h1 className="font-display text-5xl leading-[0.96] tracking-normal text-balance sm:text-6xl lg:text-8xl">
                Lytryum — Comunidad y contenido educativo
              </h1>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground text-pretty lg:col-span-4 lg:text-lg">
              Construcción de comunidad digital desde cero para academia Web3 en español.
            </p>
          </div>

          <div className="reveal reveal-delay-2 mt-14 grid grid-cols-1 gap-4 border-y border-hairline py-5 sm:grid-cols-3 lg:mt-16 lg:py-7">
            {highlights.map((item) => (
              <div key={item.label} className="border-b border-hairline pb-5 transition-colors duration-500 hover:border-accent/25 last:border-b-0 sm:border-b-0 sm:border-r sm:pb-0 sm:pr-6 sm:last:border-r-0">
                <CaseMetric value={item.value} />
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground/82">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="reveal reveal-delay-3 mt-14 overflow-hidden rounded-[1.75rem] border border-hairline bg-surface/20 p-3 shadow-soft sm:p-5 lg:mt-16 lg:p-7">
            <img
              src={lytryumVisual}
              alt="Lytryum Web3 education brand system mockup"
              width={1600}
              height={1100}
              className="h-auto w-full rounded-[1.15rem] object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-24 lg:py-36">
        <div className="container grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-12 lg:gap-20">
          <aside className="lg:col-span-4">
            <div className="scroll-reveal sticky top-28 space-y-4 sm:space-y-6 lg:top-32 lg:space-y-7">
              <span className="hidden font-display text-7xl leading-none text-foreground/8 sm:block sm:text-8xl">01</span>
              <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
                Contenido educativo y comunicación visual para activar comunidades en Discord, LinkedIn, YouTube e Instagram.
              </p>
              <div className="flex max-w-sm flex-wrap gap-2 pt-2 sm:pt-5">
                {tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-hairline bg-surface/28 px-3 py-1 text-[11px] uppercase tracking-[0.12em] text-muted-foreground/86">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <div className="space-y-10 sm:space-y-14 lg:col-span-7 lg:col-start-6 lg:space-y-20">
            <CaseBlock title="Contexto" body="Lytryum necesitaba construir comunidad digital desde cero para una academia Web3 en español, con contenido educativo, comunicación multicanal y presencia constante." />
            <CaseBlock title="Problema" body="La comunidad necesitaba crecer orgánicamente en diferentes canales, manteniendo claridad educativa, consistencia visual y conversación activa con audiencias nuevas." />
            <CaseBlock title="Hipótesis" body="Una estrategia de contenido educativo con adaptación por canal puede activar comunidad, explicar temas complejos y sostener crecimiento sin depender de pauta." />

            <section className="scroll-reveal space-y-4 border-t border-hairline pt-7 transition-colors duration-500 hover:border-accent/25 lg:space-y-5 lg:pt-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Decisiones clave</p>
              <ol className="grid gap-4 lg:gap-5">
                {decisions.map((decision, index) => (
                  <li key={decision} className="grid grid-cols-[2.5rem_1fr] gap-4 text-sm leading-relaxed text-foreground/80">
                    <span className="font-display text-foreground/18">{String(index + 1).padStart(2, "0")}</span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ol>
            </section>

            <CaseBlock title="Solución" body="Desarrollo de contenido educativo, adaptación multicanal y comunicación visual para redes sociales, con piezas pensadas para comunidad, aprendizaje y distribución orgánica." />
            <CaseBlock title="Resultado" body="4 comunidades construidas desde cero, más de 50 piezas educativas y crecimiento 100% orgánico en Discord, LinkedIn, YouTube e Instagram." />
            <CaseBlock title="Aprendizajes" body="La comunidad crece mejor cuando el contenido enseña, conversa y aparece con consistencia en los canales donde la audiencia ya está participando." />

            <section className="scroll-reveal rounded-[1.75rem] border border-hairline bg-surface/22 p-7 shadow-soft transition-all duration-700 hover:-translate-y-1 hover:border-accent/25 hover:bg-surface/32 sm:p-9 lg:p-10">
              <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">Next</p>
              <Link
                to="/#work"
                className="group mt-6 inline-flex items-center gap-3 font-display text-2xl text-foreground transition-colors duration-500 hover:text-accent-soft"
              >
                Back to selected work
                <ArrowUpRight className="h-5 w-5 text-accent transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true" />
              </Link>
              <CaseStudyNav current="lytryum" />
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

const CaseBlock = ({ title, body }: { title: string; body: string }) => (
  <section className="scroll-reveal space-y-4 border-t border-hairline pt-7 transition-colors duration-500 hover:border-accent/25 lg:space-y-5 lg:pt-10">
    <p className="text-[11px] uppercase tracking-[0.24em] text-muted-foreground/88">{title}</p>
    <p className="text-base leading-relaxed text-foreground/76 text-pretty lg:text-[1.08rem]">{body}</p>
  </section>
);

export default Lytryum;
