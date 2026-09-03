/** Concatène des classes conditionnelles (mini remplaçant de clsx). */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/** Résultat de l'analyse d'une URL de vidéo. */
export type VideoEmbed =
  | { kind: "file"; src: string }
  | { kind: "youtube"; id: string; src: string }
  | { kind: "vimeo"; id: string; src: string };

/**
 * Détecte le type d'une URL de vidéo (fichier local, YouTube ou Vimeo)
 * et renvoie l'URL d'embed prête à l'emploi.
 */
export function parseVideoUrl(url: string): VideoEmbed {
  // YouTube : youtu.be/<id>  ou  youtube.com/watch?v=<id>  ou  /embed/<id>
  const yt = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/,
  );
  if (yt) {
    return {
      kind: "youtube",
      id: yt[1],
      // -nocookie = pas de cookie tant que l'utilisateur ne lance pas la vidéo
      src: `https://www.youtube-nocookie.com/embed/${yt[1]}?rel=0`,
    };
  }

  // Vimeo : vimeo.com/<id>
  const vm = url.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  if (vm) {
    return {
      kind: "vimeo",
      id: vm[1],
      src: `https://player.vimeo.com/video/${vm[1]}`,
    };
  }

  // Sinon : fichier vidéo (local dans /public ou URL directe .mp4/.webm)
  return { kind: "file", src: url };
}

/** true si l'URL pointe vers un fichier servi par notre app (commence par "/"). */
export function isLocalAsset(url: string): boolean {
  return url.startsWith("/");
}
