# Portfolio — Zounoogo Kourita

Portfolio personnel one-page (dark theme), inspiré de
[brittanychiang.com](https://brittanychiang.com/).

**Stack :** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Framer Motion
· déploiement Vercel.

---

## Démarrer en local

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de production
npm run start    # sert le build
```

---

## Où modifier le contenu

Tout le contenu vit dans `src/data/`. **Tu n'as pas besoin de toucher aux
composants** pour ajouter ou modifier une entrée.

| Fichier | Contenu |
|---|---|
| `src/data/site.ts` | Identité : nom, titre, accroche, email, réseaux, lien CV, URL du site, ordre du menu |
| `src/data/about.ts` | Texte « À propos », photo, liste de compétences |
| `src/data/research.ts` | Section « Recherche » (tableau `ResearchItem[]`) |
| `src/data/projects.ts` | Section « Développement » (tableau `ProjectItem[]`) |

Les types de chaque entrée sont décrits et commentés dans `src/lib/types.ts`.

---

## Ajouter une activité de recherche

Ouvre `src/data/research.ts` et ajoute un objet dans le tableau :

```ts
{
  slug: "identifiant-unique",
  title: "Titre de l'activité",
  period: "Fév. 2025 – Juin 2025",
  affiliation: "Encadrant : Pr. X — Institution",
  description: "Résumé en 2-3 phrases.",
  tags: ["Techno 1", "Mot-clé 2"],

  // PDF optionnel — voir la section « PDF » ci-dessous
  pdfUrl: "/research/mon-rapport.pdf",
  pdfPreview: true,

  // Liens optionnels
  links: [{ label: "Dépôt GitHub", url: "https://github.com/..." }],
}
```

## Ajouter un projet de développement

Ouvre `src/data/projects.ts` et ajoute un objet :

```ts
{
  slug: "identifiant-unique",
  title: "Nom du projet",
  description: "Ce que fait le projet, en 2-3 phrases.",
  stack: ["Next.js", "FastAPI", "PostgreSQL"],
  githubUrl: "https://github.com/...",
  demoUrl: "https://...",          // optionnel
  videoUrl: "/projects/demo.mp4",  // optionnel — voir « Vidéo » ci-dessous
  featured: true,                  // optionnel : met la carte en avant
}
```

---

## PDF (rapports, articles, posters)

Le champ `pdfUrl` accepte **deux formats** :

1. **Fichier local** — dépose le PDF dans `public/research/` puis :
   ```ts
   pdfUrl: "/research/mon-rapport.pdf"
   ```
2. **URL externe (Google Drive)** — utilise le lien de partage au format
   `preview` :
   ```ts
   pdfUrl: "https://drive.google.com/file/d/<ID_DU_FICHIER>/preview"
   ```
   (Dans Drive : *Partager → Toute personne disposant du lien*, puis remplace
   `/view?...` par `/preview` dans l'URL.)

- `pdfPreview: true` → aperçu intégré dans la page.
- `pdfPreview: false` (ou absent) → seulement les boutons « Ouvrir » /
  « Télécharger ».
- Le bouton « Télécharger » n'apparaît que pour les fichiers locaux.

---

## Vidéo (démos de projets)

Le champ `videoUrl` détecte automatiquement le type :

| Valeur | Rendu |
|---|---|
| `/projects/ma-demo.mp4` (fichier dans `public/projects/`) | Lecteur HTML5 natif, chargé à la lecture |
| `https://youtu.be/<ID>` ou `https://www.youtube.com/watch?v=<ID>` | Vignette légère → iframe YouTube au clic |
| `https://vimeo.com/<ID>` | Vignette légère → iframe Vimeo au clic |

Formats de fichier recommandés : `.mp4` (H.264) ou `.webm`. Garde les fichiers
sous ~10–15 Mo ; au-delà, préfère YouTube/Vimeo ou un lien externe.

---

## Remplacer les fichiers placeholder

| Fichier | Rôle | Format conseillé |
|---|---|---|
| `public/avatar.png` | Photo de profil (section À propos) | carré, ~400×400, PNG/JPG |
| `public/og-image.png` | Image de partage réseaux sociaux | 1200×630, PNG/JPG |
| `public/cv.pdf` | CV téléchargeable | PDF |
| `public/research/pfe-rapport.pdf` | Exemple de rapport | PDF |
| `public/projects/demo-placeholder.mp4` | Exemple de vidéo | MP4 |

Si tu n'as pas encore de CV : mets `resumeUrl: ""` dans `src/data/site.ts`, le
bouton disparaît.

---

## Personnaliser l'apparence

- **Couleurs** : `tailwind.config.ts` (section `colors`) et les variables CSS en
  haut de `src/app/globals.css`.
- **Polices** : `src/app/layout.tsx` (`Inter` et `JetBrains_Mono` via
  `next/font/google`).
- **Animations** : `src/components/ui/FadeIn.tsx`.

---

## Déploiement (Vercel)

1. Pousse le dépôt sur GitHub.
2. Sur [vercel.com/new](https://vercel.com/new), importe le dépôt (le preset
   *Next.js* est détecté automatiquement, aucune configuration).
3. Une fois l'URL de production obtenue, mets à jour `url` dans
   `src/data/site.ts` (utilisé pour le SEO / Open Graph) et recommite.
