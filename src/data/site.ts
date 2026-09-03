import type { NamedLink } from "@/lib/types";

/**
 * Identité et configuration globale du site.
 * C'est le premier fichier à éditer pour personnaliser le portfolio.
 */
export const site = {
  /** Nom complet (SEO, footer) */
  name: "KOURITA Zounoogo Oussama Mahomet",
  /** Nom court affiché en gros dans la sidebar */
  shortName: "Zounoogo Kourita",
  /** Titre / rôle */
  role: "PhD candidate · ML Engineer",
  /** Accroche courte sous le titre */
  tagline:
    "Je conçois des systèmes d’apprentissage automatique, de la recherche au produit.",
  location: "Rabat, Maroc",
  email: "kouritazounoogo442@gmail.com",

  /**
   * CV téléchargeable. Dépose ton fichier dans public/ (ex: public/cv.pdf).
   * Laisse une chaîne vide ("") pour masquer complètement le bouton CV.
   */
  resumeUrl: "/cv.pdf",

  url: "https://zounoogo-kourita.vercel.app",

  /** Réseaux sociaux (affichés dans la sidebar et le footer). */
  socials: [
    { label: "GitHub", url: "https://github.com/zounoogo" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/zounoogo-kourita" },
    { label: "Instagram", url: "https://www.instagram.com/k.zounoogo/" },
  ] satisfies NamedLink[],

  /** Navigation par ancre (ordre = ordre d'affichage). */
  nav: [
    { label: "À propos", href: "#about" },
    { label: "Recherche", href: "#research" },
    { label: "Développement", href: "#development" },
    { label: "Contact", href: "#contact" },
  ],
} as const;

export type Site = typeof site;
