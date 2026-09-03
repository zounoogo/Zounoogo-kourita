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
  //  ABSENCEIQ — stage INPT (réel) : OCR des fiches d’absence papier
  // =====================================================================
  {
    slug: "absenceiq",
    title:
      "AbsenceIQ — numérisation des fiches d’absence papier par OCR (stage INPT)",
    description:
      "Application web full-stack développée en stage à l’INPT (encadrant " +
      "Pr. Omar SOUISSI) pour digitaliser un processus administratif : " +
      "transformer une photo de feuille d’absence papier en données " +
      "exploitables. Pipeline de vision entièrement côté navigateur — " +
      "préprocessing Canvas (redimensionnement à 1000 px, export JPEG 80 %), " +
      "OCR Tesseract.js (modèle français, WebAssembly), puis parsing ligne à " +
      "ligne (regex de date, filtrage des en-têtes). La mise en correspondance " +
      "des noms d’élèves repose sur un score hybride maison combinant distance " +
      "de Levenshtein (60 %) et similarité de Jaccard sur n-grammes (40 %), " +
      "avec normalisation des accents et seuil de confiance 0,6, pour absorber " +
      "les erreurs d’OCR. Backend Node.js/Express + MySQL (authentification " +
      "bcrypt, modèles users/students/absences/logs). Au-delà d’un seuil de " +
      "3 absences, l’outil envoie des e-mails d’avertissement personnalisés " +
      "(EmailJS) et génère un rapport PDF multipage (jsPDF + html2canvas, " +
      "auto-crop des marges, pied de page horodaté et signé). Architecture " +
      "client-side pensée pour la confidentialité : traitement local, aucun " +
      "transfert des données élèves.",
    stack: [
      "JavaScript",
      "Node.js",
      "Express",
      "MySQL",
      "Tesseract.js",
      "OCR",
      "Bootstrap 5",
      "jsPDF",
      "EmailJS",
      "Canvas API",
      "bcrypt",
    ],
    githubUrl: "https://github.com/zounoogo/Stage-Agent-As-a-service",
    // TODO: uploader la vidéo de démo sur YouTube puis renseigner le lien ici
    // (le type YouTube est détecté automatiquement) :
    // videoUrl: "https://youtu.be/<ID>",
    images: [
      {
        src: "/projects/absenceiq/interface.jpg",
        alt: "Tableau de bord d’AbsenceIQ : configuration de la liste d’élèves, upload d’image, configuration des e-mails et zone de résultats",
        caption: "Tableau de bord — configuration, analyse et résultats",
      },
      {
        src: "/projects/absenceiq/workflow.png",
        alt: "Schéma du workflow en 7 étapes : authentification, import des listes, capture et préprocessing, OCR, correspondance, export PDF et notifications",
        caption: "Workflow complet — de l’authentification aux notifications",
      },
      {
        src: "/projects/absenceiq/exemple-fiche-absence.jpg",
        alt: "Exemple de fiche d’absence utilisée en entrée : colonnes Nom Prénom, Date et Motif",
        caption: "Exemple de document d’entrée (fiche d’absence d’une classe)",
      },
    ],
    links: [
      {
        label: "Rapport de stage (PDF)",
        url: "/projects/absenceiq/rapport-stage-absenceiq.pdf",
      },
    ],
  },

  // =====================================================================
  //  ALMAYA — projet client full-stack : place de marché touristique
  // =====================================================================
  {
    slug: "almaya",
    title:
      "ALMAYA — place de marché de services touristiques (full-stack React / Node)",
    description:
      "Application full-stack réalisée pour une petite entreprise de services " +
      "touristiques (ALMAYA) : une place de marché de prestations et " +
      "d’expériences touristiques au Maroc. SPA React 19 (React Router 7, " +
      "Bootstrap 5) adossée à une API REST Express 5 + MySQL. " +
      "Authentification par cookie JWT httpOnly / sameSite=Strict (expiration " +
      "1 h), mots de passe hachés bcrypt (10 tours), vérification d’e-mail " +
      "obligatoire avant connexion (jeton à usage unique envoyé via Nodemailer " +
      "sur SMTP Gmail) et limitation de débit (5 tentatives / 15 min) sur les " +
      "routes d’authentification. Le catalogue s’explore par catégories, " +
      "destinations et offres ; le panier est persisté côté serveur par " +
      "utilisateur (table cartitems, resynchronisée à chaque modification). " +
      "La commande se finalise par un lien profond WhatsApp pré-rempli avec " +
      "le contenu du panier (une page de paiement simulée complète le " +
      "parcours, sans intégration d’un prestataire de paiement réel). Un " +
      "espace d’administration protégé par rôle — contrôle appliqué côté " +
      "serveur (authenticateToken + authorizeRole), pas seulement masqué dans " +
      "l’interface — offre le CRUD complet des catégories, destinations et " +
      "offres via six formulaires React. Requêtes SQL entièrement " +
      "paramétrées. Déploiement en monorepo : backend sur Railway (build " +
      "Nixpacks + MySQL managé), frontend sur Vercel, configuration par " +
      "variables d’environnement. J’ai également mené un audit de code et de " +
      "sécurité de mon propre projet (lecture directe du dépôt), formalisé " +
      "dans un rapport de 10 sections classant forces, dette technique et " +
      "failles par sévérité — démarche que je considère comme partie " +
      "intégrante du livrable.",
    stack: [
      "React",
      "React Router",
      "Node.js",
      "Express",
      "MySQL",
      "JWT",
      "bcrypt",
      "Nodemailer",
      "Bootstrap 5",
      "Railway",
      "Vercel",
      "REST API",
    ],
    // TODO: publier le dépôt une fois l’historique git nettoyé et les secrets
    // révoqués (mot de passe d’application Gmail, URL MySQL Railway et
    // JWT_SECRET sont encore présents dans l’historique public) :
    githubUrl: "https://github.com/zounoogo/Almaya",
    // (application plus déployée — pas de demoUrl)
    images: [
      {
        src: "/projects/almaya/architecture.png",
        alt: "Schéma d’architecture 3-tiers : SPA React sur Vercel, API Express sur Railway, base MySQL managée, plus Gmail SMTP et lien profond WhatsApp",
        caption:
          "Architecture 3-tiers — React/Vercel, Express/Railway, MySQL, + SMTP Gmail et WhatsApp",
      },
      {
        src: "/projects/almaya/accueil.jpg",
        alt: "Page d’accueil connectée : grille des catégories de services avec, en vue administrateur, les boutons d’ajout / édition / suppression",
        caption: "Accueil (session administrateur) — catégories et contrôles CRUD",
      },
      {
        src: "/projects/almaya/destinations.jpg",
        alt: "Page « Explorez nos destinations » : grille de villes marocaines avec vignettes",
        caption: "Catalogue par destination",
      },
      {
        src: "/projects/almaya/offres-categorie.jpg",
        alt: "Liste des offres d’une catégorie : cartes avec image, prix en dirhams, durée, sélecteur de quantité et ajout au panier",
        caption: "Offres d’une catégorie — ajout au panier et action admin « Ajouter une offre »",
      },
      {
        src: "/projects/almaya/panier.jpg",
        alt: "Page panier : tableau des articles avec prix, quantités, totaux, et bouton « Envoyer votre commande par WhatsApp »",
        caption: "Panier persisté côté serveur — finalisation par WhatsApp",
      },
      {
        src: "/projects/almaya/admin-creation-offre.jpg",
        alt: "Formulaire d’administration de création d’offre, pré-rempli pour la catégorie Guide Touristique",
        caption: "Espace admin — formulaire de création d’offre (route protégée par rôle)",
      },
    ],
    links: [
      {
        label: "Rapport d’audit de l’application (PDF)",
        url: "/projects/almaya/rapport-application-almaya.pdf",
      },
    ],
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
