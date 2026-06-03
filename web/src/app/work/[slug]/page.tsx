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
  return { title: project.title, description: project.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">
        {project.category}
      </p>
      <h1 className="mt-2 text-4xl font-semibold text-white sm:text-5xl">
        {project.title}
      </h1>

      <div className="mt-16 grid gap-16 lg:grid-cols-[320px_1fr]">
        <aside className="space-y-8 lg:sticky lg:top-24 lg:self-start">
          {project.client && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                The client
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{project.client}</p>
            </div>
          )}
          {project.background && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                Background
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{project.background}</p>
            </div>
          )}
          {project.problem && (
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted">
                The problem
              </h2>
              <p className="mt-2 text-white/90 leading-relaxed">{project.problem}</p>
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
