import { Section } from "@/components/ui/Section";
import { Socials } from "@/components/layout/Socials";
import { site } from "@/data/site";
import { MailIcon, DownloadIcon } from "@/components/ui/Icons";

/** Section « Contact » + pied de page. */
export function Contact() {
  return (
    <Section id="contact" title="Contact" index="04.">
      <div className="max-w-xl">
        <p className="text-slate leading-relaxed">
          Je suis ouvert aux opportunités de <span className="text-accent">doctorat</span>{" "}
          comme aux postes de <span className="text-accent">ML/AI Engineer</span>.
          N’hésitez pas à m’écrire — je réponds rapidement.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-4">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded border border-accent px-5 py-3 font-mono text-sm text-accent transition-colors hover:bg-accent/10"
          >
            <MailIcon width={18} height={18} />
            {site.email}
          </a>

          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded border border-navy-lighter px-5 py-3 font-mono text-sm text-slate-light transition-colors hover:border-accent hover:text-accent"
            >
              <DownloadIcon width={16} height={16} />
              Télécharger mon CV
            </a>
          )}
        </div>

        <Socials className="mt-8" />
      </div>

      <footer className="mt-20 border-t border-navy-lighter/50 pt-6 font-mono text-xs text-slate">
        <p>
          Conçu et développé par {site.name}. Construit avec Next.js, Tailwind CSS
          et Framer Motion, déployé sur Vercel.
        </p>
      </footer>
    </Section>
  );
}
