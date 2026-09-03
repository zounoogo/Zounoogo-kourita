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
 */
export const research: ResearchItem[] = [
  // =====================================================================
  //  PROJET DE R&D — réel (INPT, 2024/2025)
  // =====================================================================
  {
    slug: "edge-pqc-rd",
    title:
      "Projet de R&D — IoT Edge Computing & cryptographie post-quantique (Edge PQC)",
    period: "2024 – 2025",
    affiliation:
      "Projet de Recherche & Développement · Encadrant : Pr. Omar SOUISSI — INPT / ANRT, filière IoT & Big Data",
    description:
      "Conception, implémentation et évaluation d’une infrastructure de " +
      "communication IoT sécurisée combinant cryptographie classique et " +
      "post-quantique (PQC). Architecture à trois niveaux — capteurs simulés " +
      "(MQTT), passerelle Edge appliquant un chiffrement hybride par message, " +
      "et serveur central (Flask + SQLite) avec tableau de bord temps réel. " +
      "L’étude compare classique (AES-256-GCM + RSA-2048-OAEP + ECDSA) et PQC " +
      "(ML-KEM-768/Kyber + AES-256-GCM + ML-DSA-65/Dilithium) sur la latence, " +
      "le CPU, la mémoire et la taille des messages. Résultat : compromis net " +
      "entre efficacité (classique ~0,5 ms, ~1,1 ko) et résilience quantique " +
      "(PQC ~2–7 ms, ~9,2 ko), et proposition d’une stratégie de migration " +
      "hybride progressive.",
    tags: [
      "Post-Quantum Cryptography",
      "ML-KEM / Kyber",
      "ML-DSA / Dilithium",
      "Edge Computing",
      "IoT",
      "MQTT",
      "Benchmark de performance",
      "Python",
    ],
    pdfUrl: "/research/edge-pqc-rapport-rd.pdf",
    pdfPreview: true,
    links: [
      // Ajoute ici le dépôt de code une fois publié sur GitHub :
      // { label: "Code source", url: "https://github.com/zounoogo/edge-pqc" },
      {
        label: "Détails techniques (section Développement)",
        url: "#development",
      },
    ],
  },

  // =====================================================================
  //  EXEMPLES À REMPLACER / SUPPRIMER  (gabarits pour tes prochaines entrées)
  // =====================================================================

  // --- Gabarit : PDF hébergé en externe, sans aperçu (lien seul) ---------
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
    pdfUrl: "https://drive.google.com/file/d/1AbCdEfGhIjKlMnOpQrStUvWxYz/preview",
    pdfPreview: false,
  },

  // --- Gabarit : aucun PDF, seulement des liens ------------------------
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
