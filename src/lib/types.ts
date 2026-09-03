/**
 * Types partagés du contenu.
 * Le contenu réel vit dans src/data/*.ts — ne modifie pas les composants pour
 * ajouter une entrée, il suffit d'ajouter un objet dans le tableau concerné.
 */

/** Lien externe générique (texte affiché + URL). */
export interface NamedLink {
  label: string;
  url: string;
}

/** Une activité de recherche (section « Recherche »). */
export interface ResearchItem {
  /** identifiant court et unique (key React + ancre éventuelle) */
  slug: string;
  title: string;
  /** ex: "2024 — Présent", "Fév. 2024 – Juin 2024" */
  period: string;
  /** encadrant / institution, ex: "Encadrant : Pr. X — INPT Rabat" */
  affiliation: string;
  description: string;
  /** technos / mots-clés → badges */
  tags: string[];
  /**
   * PDF associé (rapport de PFE, article, poster). Deux cas possibles :
   *  - fichier local  : "/research/mon-rapport.pdf"  (déposé dans public/research/)
   *  - URL externe     : "https://drive.google.com/file/d/<ID>/preview"
   * Optionnel : si absent, aucun bloc PDF n'est affiché.
   */
  pdfUrl?: string;
  /**
   * true  → aperçu du PDF intégré (iframe) + boutons.
   * false / absent → seulement les boutons « Ouvrir » / « Télécharger ».
   */
  pdfPreview?: boolean;
  /** liens complémentaires (publication, dépôt, poster en ligne…) */
  links?: NamedLink[];
}

/** Une réalisation de développement (section « Développement »). */
export interface ProjectItem {
  /** identifiant court et unique */
  slug: string;
  title: string;
  description: string;
  /** stack technique → badges */
  stack: string[];
  githubUrl?: string;
  /** démo live déployée */
  demoUrl?: string;
  /**
   * Vidéo de démonstration. Le type est détecté automatiquement :
   *  - fichier local : "/projects/ma-demo.mp4"   → lecteur HTML5 natif
   *  - YouTube        : "https://www.youtube.com/watch?v=<ID>" ou "https://youtu.be/<ID>"
   *  - Vimeo          : "https://vimeo.com/<ID>"
   * Optionnel : si absent, aucun lecteur n'est affiché.
   */
  videoUrl?: string;
  /** met la carte légèrement en avant */
  featured?: boolean;
}
