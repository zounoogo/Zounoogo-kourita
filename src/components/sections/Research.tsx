import { Section } from "@/components/ui/Section";
import { ResearchCard } from "@/components/cards/ResearchCard";
import { research } from "@/data/research";

/** Section « Recherche » : liste des activités depuis src/data/research.ts. */
export function Research() {
  return (
    <Section id="research" title="Recherche" index="02.">
      <div className="space-y-4">
        {research.map((item) => (
          <ResearchCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  );
}
