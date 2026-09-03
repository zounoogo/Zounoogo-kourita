import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { RichText } from "@/components/ui/RichText";
import { about } from "@/data/about";

/** Section « À propos » : photo + présentation + compétences. */
export function About() {
  return (
    <Section id="about" title="À propos" index="01.">
      <div className="grid gap-8 sm:grid-cols-[200px_1fr] sm:items-start">
        <div className="group relative mx-auto w-40 sm:mx-0 sm:w-full">
          <Image
            src={about.avatar}
            alt={about.avatarAlt}
            width={400}
            height={480}
            priority
            className="relative z-10 aspect-[5/6] w-full rounded-lg object-cover object-[center_20%] grayscale transition-all duration-300 group-hover:grayscale-0"
          />
          <span
            aria-hidden
            className="absolute inset-0 z-0 translate-x-3 translate-y-3 rounded-lg border-2 border-accent transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
          />
        </div>

        <div className="space-y-4 text-slate leading-relaxed">
          {about.paragraphs.map((p, i) => (
            <p key={i}>
              <RichText text={p} />
            </p>
          ))}

          <div>
            <p className="mb-3 mt-6 font-mono text-xs uppercase tracking-widest text-slate-lighter">
              Ce que j’utilise au quotidien
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm sm:grid-cols-3">
              {about.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}
