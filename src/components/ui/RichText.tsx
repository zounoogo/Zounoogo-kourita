import { Fragment } from "react";

/**
 * Rendu minimal de texte enrichi : transforme `<accent>…</accent>`
 * en fragment coloré avec la couleur d'accent. Rien d'autre n'est interprété
 * (donc pas de risque d'injection HTML).
 */
export function RichText({ text }: { text: string }) {
  const parts = text.split(/(<accent>.*?<\/accent>)/g);
  return (
    <>
      {parts.map((part, i) => {
        const match = part.match(/^<accent>(.*?)<\/accent>$/);
        return match ? (
          <span key={i} className="text-accent">
            {match[1]}
          </span>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        );
      })}
    </>
  );
}
