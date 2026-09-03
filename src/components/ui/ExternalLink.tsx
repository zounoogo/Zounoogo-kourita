import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "@/components/ui/Icons";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Affiche une petite icône « lien externe » après le texte */
  showIcon?: boolean;
}

/** Lien sortant sécurisé (target=_blank + rel), style accent au hover. */
export function ExternalLink({
  href,
  children,
  className,
  showIcon = true,
}: ExternalLinkProps) {
  // Lien interne (ancre sur la même page) : pas de nouvel onglet, pas d'icône.
  const isAnchor = href.startsWith("#");

  return (
    <a
      href={href}
      {...(isAnchor ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      className={cn(
        "group inline-flex items-center gap-1.5 text-slate-light transition-colors hover:text-accent",
        className,
      )}
    >
      <span>{children}</span>
      {showIcon && !isAnchor && (
        <ExternalLinkIcon className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      )}
    </a>
  );
}
