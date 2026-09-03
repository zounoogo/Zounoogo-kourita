import type { ResearchItem } from "@/lib/types";

/**
 * Section « Recherche ».
 *
 * Pour AJOUTER une entrée : copie un objet ci-dessous et adapte les champs.
 * Le PDF (`pdfUrl`) est optionnel et accepte deux formats :
 *   1. Fichier local  → dépose-le dans public/research/ puis mets
 *      pdfUrl: "/research/mon-fichier.pdf"
 *   2. URL externe (Google Drive) → utilise le lien de type « preview » :
 *      pdfUrl: "https://drive.google.com/file/d/<ID>/preview"
 * `pdfPreview: true` affiche l'aperçu intégré ; sinon on n'a que les boutons.
 *
 * Les 3 exemples ci-dessous illustrent les 3 cas (aperçu / lien seul / sans PDF).
 */
export const research: ResearchItem[] = [
  // --- Cas 1 : PDF local AVEC aperçu intégré -------------------------------
  {
    slug: "pfe-anomaly-detection",
    title: "PFE — Détection d’anomalies sur flux de capteurs IoT",
    period: "Fév. 2025 – Juin 2025",
    affiliation: "Encadrant : Pr. A. Exemple — INPT Rabat",
    description:
      "Projet de fin d’études : pipeline temps réel de détection d’anomalies " +
      "sur des séries temporelles multivariées issues de capteurs industriels. " +
      "Comparaison d’autoencodeurs, d’Isolation Forest et de méthodes à base de " +
      "prédiction, avec évaluation sur données réelles et synthétiques.",
    tags: ["Séries temporelles", "Autoencodeurs", "PyTorch", "Kafka", "Anomaly detection"],
    pdfUrl: "/research/pfe-rapport.pdf",
    pdfPreview: true,
    links: [
      { label: "Code du pipeline", url: "https://github.com/zounoogo" },
    ],
  },

  // --- Cas 2 : PDF hébergé en externe, SANS aperçu (lien seul) -------------
  {
    slug: "phd-proposal-federated",
    title: "Proposition de thèse — Apprentissage fédéré pour l’edge IoT",
    period: "2025",
    affiliation: "Candidature doctorat — laboratoire à confirmer",
    description:
      "Note de recherche préparée pour mes candidatures : entraînement " +
      "collaboratif de modèles sur des nœuds edge contraints, sans centraliser " +
      "les données, avec un focus sur la robustesse aux clients hétérogènes.",
    tags: ["Federated learning", "Edge computing", "Privacy", "Optimisation"],
    // Remplace par ton vrai lien Drive au format .../preview
    pdfUrl: "https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/preview",
    pdfPreview: false,
  },

  // --- Cas 3 : AUCUN PDF, seulement des liens -----------------------------
  {
    slug: "reading-graph-neural-nets",
    title: "Étude bibliographique — Graph Neural Networks pour la mobilité urbaine",
    period: "Nov. 2024 – Jan. 2025",
    affiliation: "Travail personnel encadré",
    description:
      "Synthèse d’une dizaine d’articles sur la prévision de trafic à base de " +
      "GNN spatio-temporels, avec reproduction partielle des résultats de deux " +
      "papiers de référence.",
    tags: ["GNN", "Prévision de trafic", "PyTorch Geometric", "Reproductibilité"],
    links: [
      { label: "Notes de lecture", url: "https://github.com/zounoogo" },
      { label: "Notebook de reproduction", url: "https://github.com/zounoogo" },
    ],
  },
];
