import type { ProjectItem } from "@/lib/types";

/**
 * Section « Développement ».
 *
 * Pour AJOUTER un projet : copie un objet ci-dessous et adapte les champs.
 *
 * Vidéo (`videoUrl`, optionnel) — type détecté automatiquement :
 *   - Fichier local  → "/projects/ma-demo.mp4"  (lecteur HTML5 natif)
 *   - YouTube        → "https://youtu.be/<ID>"
 *   - Vimeo          → "https://vimeo.com/<ID>"
 *
 * Captures (`images`, optionnel) — grille + plein écran au clic.
 *   Dépose les fichiers dans public/projects/<slug>/ .
 */
export const projects: ProjectItem[] = [
  // =====================================================================
  //  EDGE PQC — volet ingénierie du projet de R&D (réel)
  // =====================================================================
  {
    slug: "edge-pqc-platform",
    title: "Edge PQC — plateforme IoT sécurisée & banc d’essai post-quantique",
    description:
      "Système complet à trois niveaux issu de mon projet de R&D. " +
      "(1) Simulateur de 30 capteurs (température/humidité, GPS, pression) " +
      "multithread publiant en JSON sur un broker MQTT. " +
      "(2) Passerelle Edge : abonnement MQTT, double chiffrement par message " +
      "(voie classique AES-256-GCM + RSA-OAEP + ECDSA, voie post-quantique " +
      "Kyber + AES-256-GCM + Dilithium) et mesure de performance (latence, " +
      "CPU, mémoire, taille) via psutil. " +
      "(3) Serveur central Flask : déchiffrement, vérification de signature, " +
      "stockage SQLite, API REST et tableau de bord temps réel (Tailwind CSS " +
      "+ Chart.js) qui compare les deux voies et pilote les simulations.",
    stack: [
      "Python",
      "Flask",
      "paho-mqtt",
      "cryptography",
      "pqcrypto",
      "psutil",
      "SQLite",
      "MQTT",
      "Chart.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/zounoogo/edge-pqc",
    images: [
      {
        src: "/projects/edge-pqc/dashboard.jpg",
        alt: "Tableau de bord de performance : contrôle des simulations et du gateway",
        caption: "Tableau de bord central — contrôle des simulations et du gateway",
      },
      {
        src: "/projects/edge-pqc/benchmark-latence-cpu.jpg",
        alt: "Graphiques comparant la latence et l’utilisation CPU du chiffrement classique et post-quantique",
        caption: "Comparaison latence (ms) et CPU (%) — classique vs post-quantique",
      },
      {
        src: "/projects/edge-pqc/benchmark-taille.jpg",
        alt: "Graphique comparant la taille des messages chiffrés classique et post-quantique",
        caption: "Taille des messages chiffrés — le PQC est ~8× plus volumineux",
      },
      {
        src: "/projects/edge-pqc/mesures-detaillees.jpg",
        alt: "Tableau des 50 dernières mesures détaillées de performance",
        caption: "Historique des mesures (latence, CPU, mémoire, tailles)",
      },
      {
        src: "/projects/edge-pqc/donnees-dechiffrees.jpg",
        alt: "Aperçu JSON des dernières données de capteurs déchiffrées, voie classique et voie PQC",
        caption: "Vérification : données déchiffrées identiques sur les deux voies",
      },
    ],
    links: [
      { label: "Rapport de R&D (section Recherche)", url: "#research" },
    ],
    featured: true,
  },

  // =====================================================================
  //  DOMOTIQUE CLOUD — projet du cours « Protocoles & communications IoT »
  // =====================================================================
  {
    slug: "domotique-cloud-pubsub",
    title:
      "Supervision domotique cloud-native — Google Cloud Pub/Sub & tableau de bord temps réel",
    description:
      "Chaîne IoT complète à données simulées. Un publisher Python génère " +
      "température et humidité et publie des messages JSON sur un topic " +
      "Google Cloud Pub/Sub toutes les 5 s (authentification par compte de " +
      "service). Un subscriber consomme le flux via un abonnement avec accusé " +
      "de réception, et un tableau de bord Streamlit tire les messages puis " +
      "trace les courbes en temps réel (pandas). Le projet, d’abord conçu pour " +
      "Google Cloud IoT Core, a été ré-architecturé vers Pub/Sub + Streamlit " +
      "après l’arrêt d’IoT Core (août 2023) : gestion des appareils et " +
      "visualisation ré-implémentées à la main. Latence moyenne mesurée " +
      "~50 ms, débit ~12 msg/min configurable. Volet complémentaire : " +
      "prototype de sécurisation des messages (signature RSA-2048 + SHA-256, " +
      "registre JSON chaîné, mesure du coût signature/vérification) qui " +
      "prépare le projet de R&D post-quantique.",
    stack: [
      "Python",
      "Google Cloud Pub/Sub",
      "Streamlit",
      "pandas",
      "pycryptodome",
      "JSON",
      "Service account GCP",
    ],
    githubUrl: "https://github.com/zounoogo/domotique-cloud-pubsub",
    images: [
      {
        src: "/projects/domotique-cloud/dashboard-streamlit.png",
        alt: "Tableau de bord Streamlit traçant température et humidité en temps réel",
        caption: "Tableau de bord Streamlit — température & humidité en direct",
      },
      {
        src: "/projects/domotique-cloud/publisher-subscriber-console.png",
        alt: "Consoles du publisher et du subscriber échangeant des messages JSON via Pub/Sub",
        caption: "Publisher / subscriber : messages JSON échangés via Pub/Sub",
      },
      {
        src: "/projects/domotique-cloud/config-pubsub-gcp.png",
        alt: "Console Google Cloud : abonnement Pub/Sub domotique-subscriber actif",
        caption: "Console GCP — topic et abonnement Pub/Sub configurés",
      },
    ],
    links: [
      {
        label: "Présentation du projet (PDF)",
        url: "/projects/domotique-cloud/presentation.pdf",
      },
      { label: "Projet de R&D lié (section Recherche)", url: "#research" },
    ],
  },

  // =====================================================================
  //  VIDÉOSURVEILLANCE SIMULÉE — projet du cours « Protocoles & communications IoT »
  // =====================================================================
  {
    slug: "videosurveillance-blynk",
    title:
      "Système de vidéosurveillance simulé — alertes push temps réel (Blynk IoT)",
    description:
      "Architecture événementielle sans matériel. Une caméra virtuelle en " +
      "Python génère aléatoirement des événements (motion_detected / " +
      "no_motion) ; à chaque détection, le système envoie une notification " +
      "push via l’API REST Blynk Cloud v1 (HTTP POST), journalise l’alerte " +
      "horodatée dans un fichier local et l’affiche dans une interface web " +
      "Flask (liste des alertes + déclenchement manuel). Une version étendue " +
      "gère 4 caméras, des types d’alertes typés (intrusion, violation de " +
      "zone, caméra hors ligne…), des niveaux de sévérité, une simulation " +
      "automatique multithread et des scénarios de panne / restauration. " +
      "Point technique : diagnostic et migration de l’API Blynk dépréciée " +
      "(erreur 404 → nouvel endpoint v1).",
    stack: [
      "Python",
      "Flask",
      "Jinja2",
      "API REST Blynk Cloud",
      "requests",
      "threading",
      "HTML/CSS",
    ],
    githubUrl: "https://github.com/zounoogo/blynk-video-surveillance-sim",
    images: [
      {
        src: "/projects/videosurveillance-blynk/interface-web-alertes.png",
        alt: "Interface web Flask affichant le journal horodaté des alertes de la caméra virtuelle",
        caption: "Interface web Flask — journal des alertes + bouton de simulation",
      },
    ],
    links: [
      {
        label: "Présentation du projet (PDF)",
        url: "/projects/videosurveillance-blynk/presentation.pdf",
      },
    ],
  },
];
