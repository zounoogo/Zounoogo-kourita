import type { ReactNode } from "react";

/** Pastille pour une techno / un mot-clé. */
export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 font-mono text-xs leading-5 text-accent">
      {children}
    </span>
  );
}

/** Liste de badges à partir d'un tableau de chaînes. */
export function BadgeList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>
          <Badge>{item}</Badge>
        </li>
      ))}
    </ul>
  );
}
