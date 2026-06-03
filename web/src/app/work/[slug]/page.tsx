import Image from "next/image";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { getProject, getProjects } from "@/lib/content";
import type { MediaItem } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

function MediaBlock({ item }: { item: MediaItem }) {
  if (item.type === "iframe" && item.src) {
    return (
      <div className="aspect-video overflow-hidden rounded-2xl ring-1 ring-white/10">
        <iframe
          src={item.src}
          title="Project video"
          className="h-full w-full"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  if (item.type === "image" && item.src) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
        <Image src={item.src} alt={item.alt || ""} fill className="object-cover" />
      </div>
    );
  }
  if (item.type === "html" && item.htmlContent) {
    return (
      <div
        className="prose prose-invert max-w-none rounded-2xl bg-surface p-6"
        dangerouslySetInnerHTML={{ __html: item.htmlContent }}
      />
    );
  }
  return null;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "Project" };
  return { title: project.title, description: project.tagline || project.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const brief = project.brief || project.problem;
  const whatWeDid = project.whatWeDid || project.background;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        {project.category}
      </p>
      <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
        {project.title}
      </h1>
      {project.tagline && (
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.tagline}</p>
      )}

      <div className="mt-16 grid gap-16 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {brief && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                The brief
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{brief}</p>
            </div>
          )}
          {whatWeDid && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                What we did
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{whatWeDid}</p>
            </div>
          )}
          {project.result && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                The result
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{project.result}</p>
            </div>
          )}
          {project.serviceTags && project.serviceTags.length > 0 && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Services
              </h2>
              <p className="mt-2 text-sm text-white/90">
                {project.serviceTags.join(" · ")}
              </p>
            </div>
          )}
          <Button href="/work" variant="outline">
            All projects
          </Button>
        </aside>

        <div className="space-y-8">
          {project.media.map((item, idx) => (
            <MediaBlock key={idx} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
