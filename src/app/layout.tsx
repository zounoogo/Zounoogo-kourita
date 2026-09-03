import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { site } from "@/data/site";
import "./globals.css";

// Polices chargées et optimisées par Next (self-host automatique).
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

// --- SEO / Open Graph -------------------------------------------------------
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.shortName} — ${site.role}`,
    template: `%s — ${site.shortName}`,
  },
  description: site.tagline,
  keywords: [
    "Machine Learning",
    "ML Engineer",
    "PhD",
    "Doctorat",
    "IoT",
    "Big Data",
    "Deep Learning",
    site.shortName,
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: site.url,
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
    siteName: site.shortName,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: `${site.shortName} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.shortName} — ${site.role}`,
    description: site.tagline,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a192f",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen antialiased selection:bg-accent/20">
        {/* Lien d'évitement pour la navigation clavier / lecteurs d'écran */}
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:text-navy"
        >
          Aller au contenu
        </a>
        {children}
      </body>
    </html>
  );
}
