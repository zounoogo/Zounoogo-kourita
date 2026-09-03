import type { ProjectItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import { BadgeList } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { VideoEmbed } from "@/components/media/VideoEmbed";
import { GitHubIcon, ExternalLinkIcon } from "@/components/ui/Icons";

/** Carte d'une réalisation de développement. */
export function ProjectCard({ item }: { item: ProjectItem }) {
  return (
    <article
      className={cn(
        "rounded-lg border p-5 transition-colors",
        item.featured
          ? "border-accent/30 bg-navy-light/40"
          : "border-navy-lighter/60 hover:border-navy-lighter hover:bg-navy-light/30",
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-slate-lighter">{item.title}</h3>
        <div className="flex shrink-0 items-center gap-3 pt-1">
          {item.githubUrl && (
            <a
              href={item.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} — code source sur GitHub`}
              className="text-slate-light transition-colors hover:text-accent"
            >
              <GitHubIcon width={20} height={20} />
            </a>
          )}
          {item.demoUrl && (
            <a
              href={item.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${item.title} — démo en ligne`}
              className="text-slate-light transition-colors hover:text-accent"
            >
              <ExternalLinkIcon width={18} height={18} />
            </a>
          )}
        </div>
      </div>

      <p className="mt-3 text-sm leading-relaxed text-slate">{item.description}</p>

      {item.videoUrl && <VideoEmbed url={item.videoUrl} title={item.title} />}

      <div className="mt-4">
        <BadgeList items={item.stack} />
      </div>

      {(item.githubUrl || item.demoUrl) && (
        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          {item.githubUrl && (
            <ExternalLink href={item.githubUrl} showIcon={false}>
              Code source
            </ExternalLink>
          )}
          {item.demoUrl && (
            <ExternalLink href={item.demoUrl}>Voir la démo</ExternalLink>
          )}
        </div>
      )}
    </article>
  );
}
