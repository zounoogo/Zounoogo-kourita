import type { ResearchItem } from "@/lib/types";
import { site } from "./site";

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
  //  PROJET DE RECHERCHE — Quantum Machine Learning pour l'IoT (INPT, S3)
  // =====================================================================
  {
    slug: "qml-iot-intrusion-detection",
    title:
      "Étude empirique — Quantum Machine Learning pour la détection d'intrusion IoT",
    period: "2026",
    affiliation:
      "Kourita Zounoogo Oussama Mahomet · Encadrant : Hassan El Ghazi — " +
      "Projet de recherche personnel (Projet S3), INPT, filière IoT & Big Data",
    description:
      "Revue de littérature (~25 articles, 2020–2026) sur le QML appliqué à la " +
      "détection d'intrusion réseau en IoT, suivie d'une étude empirique sur le " +
      "dataset DataSense (CIC IIoT 2025, ~75 000 échantillons, 71 features, " +
      "détection binaire d'attaque). Un classifieur quantique variationnel " +
      "(VQC, PennyLane — encodage par angle avec re-upload, 4/6/8 qubits, " +
      "1 à 3 couches) est comparé à des baselines classiques (Régression " +
      "logistique, Random Forest) à taille d'échantillon et nombre de features " +
      "strictement appariés, sur 5 graines aléatoires et avec test de " +
      "significativité (Welch). Résultat honnête : à cette échelle (simulateur " +
      "sans bruit, jusqu'à 8 qubits), le Random Forest devance le meilleur VQC " +
      "de 4 à 5 points de F1 (p < 0,01) ; la profondeur du circuit compte plus " +
      "que le nombre de qubits, et l'écart ne se referme pas avec plus de " +
      "données d'entraînement. L'article n'est pas encore publié : seuls le " +
      "résumé et les auteurs sont diffusés ici ; le manuscrit complet est " +
      "communiqué sur demande.",
    abstract:
      "Quantum machine learning is regularly proposed as a way to bring " +
      "accurate intrusion detection to resource-constrained IoT devices. " +
      "Reported accuracies are often above 99%, but few studies compare the " +
      "quantum model against a classical model trained on the same amount of " +
      "data, and fewer report results across more than one random seed. We " +
      "run this comparison on a real IoT flow-statistics dataset. A " +
      "variational quantum classifier (VQC) is trained and evaluated at " +
      "three qubit counts and three circuit depths, five seeds each, against " +
      "Logistic Regression and Random Forest baselines trained on the same " +
      "sample. Classical models outperform the VQC at every qubit count " +
      "tested, by four to five points of F1 (Welch's t-test, p < 0.01 in " +
      "every case), and the gap does not close when the training set is made " +
      "eight times larger. Circuit depth, not qubit count, drives quantum " +
      "model performance: a single embedding layer without data re-uploading " +
      "is weak and unstable across seeds, while two or three re-uploading " +
      "layers roughly double its accuracy. The result is scoped to one " +
      "dataset, one encoding, and a noiseless simulator capped at eight " +
      "qubits, and does not rule out an eventual quantum advantage on this " +
      "problem. It is, however, a controlled comparison of a kind still " +
      "uncommon in the literature surveyed here, joining a small emerging " +
      "cluster of similarly matched benchmarks that reach the same conclusion " +
      "on other datasets; this study's contribution within that cluster is a " +
      "qubit-count-by-circuit-depth sweep on IoT/IIoT flow-statistics data " +
      "specifically, which locates the difficulty in circuit expressivity " +
      "rather than qubit count.",
    tags: [
      "Quantum Machine Learning",
      "PennyLane",
      "Variational Quantum Classifier",
      "IoT Security",
      "Détection d'intrusion",
      "scikit-learn",
      "Revue de littérature",
      "Python",
    ],
    pdfUrl: "/research/qml-iot-research-statement.pdf",
    pdfPreview: true,
    links: [
      // Dépôt privé (code, données, résultats) tant que l'article n'est pas publié.
      // Accès sur demande : e-mail pré-rempli vers l'auteur.
      {
        label: "Dépôt GitHub privé — accès sur demande",
        url: `mailto:${site.email}?subject=${encodeURIComponent(
          "Accès au dépôt GitHub — QML IoT Intrusion Detection",
        )}&body=${encodeURIComponent(
          "Bonjour,\n\nJe souhaiterais consulter le dépôt GitHub privé du projet " +
            "de recherche QML IoT (VQC vs baselines classiques, dataset DataSense).\n\nMerci,",
        )}`,
      },
    ],
  },
]