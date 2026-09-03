import type { ReactNode } from "react";
import { FadeIn } from "@/components/ui/FadeIn";

interface SectionProps {
  id: string;
  /** Titre affiché ; sert aussi au libellé accessible de la section */
  title: string;
  children: ReactNode;
  /** Numéro décoratif (ex: "01.") en préfixe, façon Brittany Chiang */
  index?: string;
}

/**
 * Enveloppe standard d'une section de la page :
 * - ancre (`id`) pour la navigation
 * - titre sticky translucide sur mobile, statique sur desktop
 * - révélation au scroll
 */
export function Section({ id, title, children, index }: SectionProps) {
  const headingId = `${id}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="scroll-mt-24 py-12 md:py-16 lg:py-20 lg:scroll-mt-0"
    >
      {/* En-tête : sticky + flou sur mobile, simple sur desktop */}
      <div className="sticky top-0 z-20 -mx-6 mb-6 bg-navy/80 px-6 py-4 backdrop-blur md:-mx-12 md:px-12 lg:static lg:mx-0 lg:mb-10 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none">
        <h2
          id={headingId}
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-lighter lg:text-2xl"
        >
          {index && (
            <span className="font-mono text-base font-normal text-accent lg:text-lg">
              {index}
            </span>
          )}
          {title}
          <span
            aria-hidden
            className="ml-2 hidden h-px flex-1 bg-navy-lighter lg:block"
          />
        </h2>
      </div>

      <FadeIn>{children}</FadeIn>
    </section>
  );
}
