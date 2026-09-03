"use client";

import { useState } from "react";
import { parseVideoUrl } from "@/lib/utils";
import { PlayIcon } from "@/components/ui/Icons";

interface VideoEmbedProps {
  url: string;
  /** titre (accessibilité) */
  title: string;
}

/**
 * Lecteur de vidéo de démonstration.
 *  - Fichier local (.mp4/.webm) → <video> natif, `preload="none"` (pas de
 *    téléchargement tant que l'utilisateur ne lance pas la lecture).
 *  - YouTube / Vimeo → « façade » : une image-bouton légère ; l'iframe (et ses
 *    scripts tiers) n'est chargée qu'au clic.
 */
export function VideoEmbed({ url, title }: VideoEmbedProps) {
  const video = parseVideoUrl(url);
  const [activated, setActivated] = useState(false);
  const [failed, setFailed] = useState(false);

  // --- Fichier vidéo hébergé (local ou URL directe) -----------------------
  if (video.kind === "file") {
    if (failed) {
      return (
        <div className="mt-4 flex aspect-video w-full items-center justify-center rounded-md border border-dashed border-navy-lighter bg-navy-light p-6 text-center font-mono text-xs text-slate">
          Vidéo introuvable. Dépose le fichier ici :
          <br />
          <span className="text-slate-light">public{url}</span>
        </div>
      );
    }
    return (
      <div className="mt-4 overflow-hidden rounded-md border border-navy-lighter bg-black">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          controls
          preload="none"
          playsInline
          onError={() => setFailed(true)}
          className="aspect-video w-full"
          aria-label={`Vidéo de démonstration — ${title}`}
        >
          <source src={video.src} />
          Votre navigateur ne peut pas lire cette vidéo.
        </video>
      </div>
    );
  }

  // --- YouTube / Vimeo : façade puis iframe au clic ----------------------
  return (
    <div className="mt-4 overflow-hidden rounded-md border border-navy-lighter bg-navy-light">
      {activated ? (
        <iframe
          src={`${video.src}${video.kind === "youtube" ? "&autoplay=1" : "?autoplay=1"}`}
          title={`Vidéo de démonstration — ${title}`}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="aspect-video w-full"
        />
      ) : (
        <button
          type="button"
          onClick={() => setActivated(true)}
          className="group relative flex aspect-video w-full items-center justify-center bg-gradient-to-br from-navy to-navy-light"
          aria-label={`Lire la vidéo de démonstration — ${title}`}
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent ring-1 ring-accent/40 transition-transform group-hover:scale-110">
            <PlayIcon />
          </span>
          <span className="absolute bottom-3 left-3 font-mono text-xs text-slate">
            {video.kind === "youtube" ? "YouTube" : "Vimeo"} — cliquer pour lire
          </span>
        </button>
      )}
    </div>
  );
}
