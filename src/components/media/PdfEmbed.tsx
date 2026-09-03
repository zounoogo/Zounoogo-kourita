"use client";

import { useEffect, useRef, useState } from "react";
import { isLocalAsset } from "@/lib/utils";
import { DownloadIcon, ExternalLinkIcon } from "@/components/ui/Icons";

interface PdfEmbedProps {
  url: string;
  /** titre du document (accessibilité de l'iframe) */
  title: string;
  /** true = aperçu intégré ; false = seulement les boutons */
  preview?: boolean;
}

/**
 * Affiche un PDF : boutons « Ouvrir » / « Télécharger » et, si `preview`,
 * un aperçu intégré chargé paresseusement (seulement quand il devient visible).
 *
 * `url` peut être :
 *   - un fichier local  : "/research/rapport.pdf"
 *   - une URL externe   : lien Google Drive au format ".../preview"
 */
export function PdfEmbed({ url, title, preview = false }: PdfEmbedProps) {
  const local = isLocalAsset(url);
  const containerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Lazy-load : on ne monte l'iframe que lorsque le bloc approche du viewport.
  useEffect(() => {
    if (!preview || visible) return;
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [preview, visible]);

  return (
    <div className="mt-4" ref={containerRef}>
      <div className="flex flex-wrap gap-3">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded border border-accent px-3 py-1.5 font-mono text-xs text-accent transition-colors hover:bg-accent/10"
        >
          <ExternalLinkIcon />
          Ouvrir le PDF
        </a>

        {local && (
          <a
            href={url}
            download
            className="inline-flex items-center gap-2 rounded border border-navy-lighter px-3 py-1.5 font-mono text-xs text-slate-light transition-colors hover:border-accent hover:text-accent"
          >
            <DownloadIcon />
            Télécharger
          </a>
        )}
      </div>

      {preview && (
        <div className="mt-4 overflow-hidden rounded-md border border-navy-lighter bg-navy-light">
          {visible ? (
            <iframe
              src={local ? `${url}#view=FitH` : url}
              title={`Aperçu — ${title}`}
              loading="lazy"
              className="h-[70vh] max-h-[640px] w-full"
            />
          ) : (
            <div className="flex h-48 items-center justify-center font-mono text-xs text-slate">
              Chargement de l’aperçu…
            </div>
          )}
        </div>
      )}
    </div>
  );
}
