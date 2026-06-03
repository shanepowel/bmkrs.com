import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getPage, getProjects } from "@/lib/content";

export const metadata = {
  title: "Work",
};

export default async function WorkPage() {
  const [page, projects] = await Promise.all([getPage("work"), getProjects()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Portfolio"
        title={page.heroTitle || "Our work"}
        subtitle={page.heroSubtitle}
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
