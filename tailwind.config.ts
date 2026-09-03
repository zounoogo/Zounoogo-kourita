import type { Config } from "tailwindcss";

/**
 * Palette et tokens du portfolio (dark theme façon brittanychiang.com).
 * Les couleurs sont aussi exposées en variables CSS dans globals.css.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0a192f", // fond principal
          light: "#112240", // cartes / surfaces
          lighter: "#233554", // bordures
        },
        slate: {
          DEFAULT: "#8892b0", // texte secondaire
          light: "#a8b2d1", // texte courant (contraste AA sur navy)
          lighter: "#ccd6f6", // sous-titres
        },
        white: {
          DEFAULT: "#e6f1ff", // titres
        },
        accent: {
          DEFAULT: "#64ffda", // cyan/teal — liens, hovers, détails
          tint: "rgba(100, 255, 218, 0.1)", // fond au hover
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.5s ease both",
      },
    },
  },
  plugins: [],
};
export default config;
