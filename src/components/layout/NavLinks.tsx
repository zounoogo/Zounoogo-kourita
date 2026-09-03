"use client";

import { site } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";

const sectionIds = site.nav.map((item) => item.href.replace("#", ""));

interface NavLinksProps {
  /** "vertical" pour la sidebar desktop, "horizontal" pour le header mobile */
  orientation?: "vertical" | "horizontal";
  onNavigate?: () => void;
}

/**
 * Navigation par ancre avec surlignage de la section active.
 * Le défilement doux est géré par `scroll-behavior: smooth` (globals.css).
 */
export function NavLinks({ orientation = "vertical", onNavigate }: NavLinksProps) {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Navigation principale"
      className={cn(
        orientation === "vertical"
          ? "flex flex-col gap-3"
          : "flex gap-5 overflow-x-auto",
      )}
    >
      {site.nav.map((item) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <a
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            aria-current={isActive ? "true" : undefined}
            className={cn(
              "group flex items-center gap-3 whitespace-nowrap font-mono text-xs uppercase tracking-widest transition-colors",
              isActive ? "text-white" : "text-slate hover:text-slate-lighter",
            )}
          >
            {orientation === "vertical" && (
              <span
                aria-hidden
                className={cn(
                  "h-px bg-slate transition-all",
                  isActive
                    ? "w-12 bg-accent"
                    : "w-6 group-hover:w-10 group-hover:bg-slate-lighter",
                )}
              />
            )}
            {item.label}
          </a>
        );
      })}
    </nav>
  );
}
