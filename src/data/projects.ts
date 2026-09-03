import type { ProjectItem } from "@/lib/types";

/**
 * Section « Développement ».
 *
 * Pour AJOUTER un projet : copie un objet ci-dessous et adapte les champs.
 * La vidéo (`videoUrl`) est optionnelle. Le type est détecté automatiquement :
 *   - Fichier local  → dépose-le dans public/projects/ puis mets
 *     videoUrl: "/projects/ma-demo.mp4"   (lecteur HTML5 natif)
 *   - YouTube        → videoUrl: "https://youtu.be/<ID>"  (embed, chargé au clic)
 *   - Vimeo          → videoUrl: "https://vimeo.com/<ID>"
 *
 * Les 3 exemples ci-dessous illustrent les 3 cas (fichier local / YouTube / sans vidéo).
 */
export const projects: ProjectItem[] = [
  // --- Cas 1 : vidéo = FICHIER LOCAL (lecteur natif) ----------------------
  {
    slug: "sensor-anomaly-dashboard",
    title: "Sensor Anomaly Dashboard",
    description:
      "Tableau de bord temps réel qui visualise les scores d’anomalie d’un " +
      "modèle de détection sur des flux de capteurs, avec alertes et rejeu " +
      "d’historique. Backend FastAPI + WebSocket, front Next.js.",
    stack: ["Next.js", "FastAPI", "WebSocket", "PyTorch", "TimescaleDB", "Docker"],
    githubUrl: "https://github.com/zounoogo",
    demoUrl: "https://example.com",
    // Dépose ta vidéo ici : public/projects/demo-placeholder.mp4
    videoUrl: "/projects/demo-placeholder.mp4",
    featured: true,
  },

  // --- Cas 2 : vidéo = YOUTUBE (embed chargé au clic) --------------------
  {
    slug: "ml-experiment-tracker",
    title: "Mini ML Experiment Tracker",
    description:
      "Outil léger pour logguer, comparer et reprendre des expériences " +
      "d’entraînement : métriques, hyperparamètres, artefacts, et diff entre " +
      "runs. Pensé pour tourner en local sans service externe.",
    stack: ["Python", "SQLite", "Typer", "Plotly", "scikit-learn"],
    githubUrl: "https://github.com/zounoogo",
    // Remplace par le lien de ta démo YouTube
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
  },

  // --- Cas 3 : AUCUNE vidéo (juste GitHub + démo) -----------------------
  {
    slug: "arabic-text-classifier",
    title: "Classifieur de texte arabe (dialecte marocain)",
    description:
      "Modèle de classification de sentiment sur des textes en darija, avec " +
      "nettoyage spécifique, tokenisation sous-mot et fine-tuning d’un " +
      "transformer multilingue. API d’inférence exposée via FastAPI.",
    stack: ["Transformers", "Hugging Face", "FastAPI", "Docker"],
    githubUrl: "https://github.com/zounoogo",
    demoUrl: "https://example.com",
  },
];
