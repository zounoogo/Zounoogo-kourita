import { Section } from "@/components/ui/Section";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { projects } from "@/data/projects";

/** Section « Développement » : liste des projets depuis src/data/projects.ts. */
export function Development() {
  return (
    <Section id="development" title="Développement" index="03.">
      <div className="space-y-6">
        {projects.map((item) => (
          <ProjectCard key={item.slug} item={item} />
        ))}
      </div>
    </Section>
  );
}
