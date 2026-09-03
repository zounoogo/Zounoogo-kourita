import { site } from "@/data/site";
import { socialIcons } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

/** Rangée d'icônes réseaux sociaux (sidebar + footer). */
export function Socials({ className }: { className?: string }) {
  return (
    <ul className={cn("flex items-center gap-5", className)}>
      {site.socials.map((social) => {
        const Icon = socialIcons[social.label];
        return (
          <li key={social.label}>
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="block text-slate-light transition-colors hover:text-accent"
            >
              {Icon ? <Icon width={22} height={22} /> : social.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
