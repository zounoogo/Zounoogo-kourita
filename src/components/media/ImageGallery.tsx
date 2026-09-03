"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import type { GalleryImage } from "@/lib/types";

/**
 * Galerie de captures d'écran : grille de vignettes + visionneuse plein écran
 * (ouverture au clic, navigation flèches, fermeture avec Échap).
 * Les images sont chargées paresseusement par next/image.
 */
export function ImageGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const go = useCallback(
    (dir: 1 | -1) =>
      setOpen((i) =>
        i === null ? i : (i + dir + images.length) % images.length,
      ),
    [images.length],
  );

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, close, go]);

  return (
    <div className="mt-4">
      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {images.map((img, i) => (
          <li key={img.src}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full overflow-hidden rounded-md border border-navy-lighter bg-navy-light focus-visible:outline-accent"
              aria-label={`Agrandir : ${img.alt}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={640}
                height={360}
                loading="lazy"
                className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </button>
          </li>
        ))}
      </ul>

      {open !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={images[open].alt}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-navy/95 p-4 backdrop-blur"
          onClick={close}
        >
          <div
            className="relative max-h-[85vh] w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[open].src}
              alt={images[open].alt}
              width={1600}
              height={900}
              className="h-auto max-h-[80vh] w-full rounded-md object-contain"
            />
            {images[open].caption && (
              <p className="mt-3 text-center font-mono text-xs text-slate-light">
                {images[open].caption}
              </p>
            )}
          </div>

          <div className="mt-4 flex items-center gap-4 font-mono text-xs">
            {images.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => go(-1)}
                  className="rounded border border-navy-lighter px-3 py-1.5 text-slate-light hover:border-accent hover:text-accent"
                >
                  ← Précédent
                </button>
                <span className="text-slate">
                  {open + 1} / {images.length}
                </span>
                <button
                  type="button"
                  onClick={() => go(1)}
                  className="rounded border border-navy-lighter px-3 py-1.5 text-slate-light hover:border-accent hover:text-accent"
                >
                  Suivant →
                </button>
              </>
            )}
            <button
              type="button"
              onClick={close}
              className="rounded border border-accent px-3 py-1.5 text-accent hover:bg-accent/10"
            >
              Fermer (Échap)
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
