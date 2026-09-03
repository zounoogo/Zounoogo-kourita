"use client";

import { useEffect, useState } from "react";

/**
 * Renvoie l'id de la section actuellement la plus visible à l'écran.
 * Utilisé pour surligner le lien de navigation correspondant.
 *
 * @param ids liste des ids de section, dans l'ordre du document
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState<string>(ids[0] ?? "");

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // On garde la section visible la plus haute dans la page.
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        // La « zone active » est une bande au tiers supérieur de l'écran.
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  return active;
}
