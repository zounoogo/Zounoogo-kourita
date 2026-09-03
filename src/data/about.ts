/**
 * Contenu de la section « À propos ».
 * Chaque chaîne de `paragraphs` est un paragraphe. Tu peux utiliser la syntaxe
 * <accent>...</accent> pour mettre un fragment en couleur d'accent.
 */
export const about = {
  /** Texte alternatif de la photo (accessibilité) */
  avatarAlt: "Portrait de Zounoogo Kourita",
  /** Chemin de la photo : remplace public/avatar.png par ta vraie photo */
  avatar: "/avatar.png",

  paragraphs: [
    "Je suis étudiant en Master <accent>IoT & Big Data</accent> à l’INPT (Rabat). " +
      "Je m’intéresse à l’apprentissage automatique appliqué aux données de capteurs " +
      "et aux systèmes distribués, à la frontière entre la recherche et l’ingénierie.",
    "Je prépare actuellement des candidatures de <accent>doctorat</accent> tout en " +
      "cherchant un poste de <accent>ML/AI Engineer</accent>. J’aime autant lire un " +
      "article et reproduire ses résultats que mettre un modèle en production.",
    "En dehors du code, je fais de la veille sur les papiers récents, je contribue à " +
      "de petits projets open source et je documente ce que j’apprends.",
  ],

  /** Compétences affichées en petite grille. */
  skills: [
    "Python",
    "PyTorch",
    "scikit-learn",
    "pandas / NumPy",
    "TensorFlow",
    "SQL",
    "Spark",
    "Docker",
    "FastAPI",
    "Next.js",
    "Git",
    "Linux",
  ],
} as const;
