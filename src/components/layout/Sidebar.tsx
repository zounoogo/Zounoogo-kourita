import { site } from "@/data/site";
import { NavLinks } from "@/components/layout/NavLinks";
import { Socials } from "@/components/layout/Socials";

/**
 * Colonne de gauche :
 *  - desktop (lg+) : fixe, pleine hauteur, nom + titre + accroche en haut,
 *    navigation au centre, réseaux sociaux en bas.
 *  - mobile / tablette : simple bloc d'introduction en haut de page
 *    (la navigation est reprise par MobileHeader).
 */
export function Sidebar() {
  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[46%] lg:max-w-md lg:flex-col lg:justify-between lg:py-24">
      <div>
        <p className="mb-3 font-mono text-sm text-accent">Bonjour, je suis</p>
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
          {site.shortName}
        </h1>
        <p className="mt-3 text-lg font-semibold text-slate-lighter sm:text-xl">
          {site.role}
        </p>
        <p className="mt-4 max-w-xs text-slate leading-relaxed">{site.tagline}</p>
        <p className="mt-2 font-mono text-xs text-slate">{site.location}</p>

        {/* Navigation : visible seulement sur desktop */}
        <div className="mt-16 hidden lg:block">
          <NavLinks orientation="vertical" />
        </div>
      </div>

      <Socials className="mt-8 lg:mt-0" />
    </header>
  );
}
