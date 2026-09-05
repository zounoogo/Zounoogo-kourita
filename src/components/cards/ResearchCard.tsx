import type { ResearchItem } from "@/lib/types";
import { BadgeList } from "@/components/ui/Badge";
import { ExternalLink } from "@/components/ui/ExternalLink";
import { PdfEmbed } from "@/components/media/PdfEmbed";

/** Carte d'une activité de recherche. */
export function ResearchCard({ item }: { item: ResearchItem }) {
  return (
    <article className="group relative rounded-lg border border-transparent p-4 transition-colors hover:border-navy-lighter hover:bg-navy-light/40 sm:grid sm:grid-cols-[130px_1fr] sm:gap-4 lg:p-5">
      <p className="mb-2 font-mono text-xs uppercase tracking-wider text-slate sm:mb-0 sm:pt-1">
        {item.period}
      </p>

      <div>
        <h3 className="text-base font-semibold text-slate-lighter">
          {item.title}
        </h3>
        <p className="mt-1 font-mono text-xs text-slate">{item.affiliation}</p>

        <p className="mt-3 text-sm leading-relaxed text-slate">
          {item.description}
        </p>

        {item.abstract && (
          <blockquote className="mt-3 border-l-2 border-navy-lighter pl-3 text-sm italic leading-relaxed text-slate">
            <p className="mb-1 not-italic font-mono text-xs uppercase tracking-wider text-slate">
              Abstract
            </p>
            {item.abstract}
          </blockquote>
        )}

        {item.tags.length > 0 && (
          <div className="mt-4">
            <BadgeList items={item.tags} />
          </div>
        )}

        {item.pdfUrl && (
          <PdfEmbed url={item.pdfUrl} title={item.title} preview={item.pdfPreview} />
        )}

        {item.links && item.links.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {item.links.map((link) => (
              <li key={link.url}>
                <ExternalLink href={link.url}>{link.label}</ExternalLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
