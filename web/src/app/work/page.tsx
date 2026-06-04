import { PageBanner } from "@/components/sections/PageMedia";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects, getPage } from "@/lib/content";
import { marketingImages } from "@/lib/marketing-assets";

export const metadata = {
  title: "Work",
};

export default async function WorkPage() {
  const [page, projects] = await Promise.all([getPage("work"), getFeaturedProjects()]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow={page.heroEyebrow || "Work"}
        title={page.heroTitle || "Brands we've built."}
        subtitle={page.heroSubtitle}
      />
      <PageBanner
        src={marketingImages.filmProduction}
        alt="Campaign and film production for brand work"
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
