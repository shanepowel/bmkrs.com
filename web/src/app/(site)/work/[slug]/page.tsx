import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
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
      <div className="aspect-video overflow-hidden rounded-[var(--radius)] ring-2 ring-ink/10">
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
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
        <Image src={item.src} alt={item.alt || ""} fill className="object-cover" sizes="100vw" />
      </div>
    );
  }
  if (item.type === "html" && item.htmlContent) {
    return (
      <div
        className="rounded-[var(--radius)] border-2 border-ink/10 bg-bg p-6"
        dangerouslySetInnerHTML={{ __html: item.htmlContent }}
      />
    );
  }
  return null;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "project" };
  return { title: project.title, description: project.tagline || project.excerpt };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const brief = project.brief || project.problem;
  const whatWeDid = project.whatWeDid || project.background;

  return (
    <>
      <section className="px-[var(--pad)] pb-12 pt-36">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{project.category}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(48px,11vw,150px)] font-bold">
              {project.title}
            </h1>
          </Reveal>
          {project.tagline && (
            <Reveal delay={2}>
              <p className="lead mt-5 max-w-[540px]">{project.tagline}</p>
            </Reveal>
          )}
          <Reveal delay={2}>
            <div className="relative my-14 aspect-[16/8] overflow-hidden rounded-[var(--radius)] block-peach">
              <Image
                src={project.thumbnailPath}
                alt={project.title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          <div className="grid gap-14 border-b-2 border-[var(--line)] pb-10 md:grid-cols-[200px_1fr]">
            <dl className="space-y-6">
              <Reveal>
                <dt className="text-[13px] font-semibold text-accent">client</dt>
                <dd className="mt-1 text-base">{project.client || project.title}</dd>
              </Reveal>
              <Reveal delay={1}>
                <dt className="text-[13px] font-semibold text-accent">services</dt>
                <dd className="mt-1 text-base">
                  {(project.serviceTags || [project.category]).join(", ")}
                </dd>
              </Reveal>
            </dl>
            {brief && (
              <Reveal delay={1}>
                <p className="display text-[clamp(20px,2.5vw,32px)] font-semibold leading-[1.18] tracking-[-0.02em]">
                  {brief}
                </p>
              </Reveal>
            )}
          </div>

          {whatWeDid && (
            <div className="grid gap-14 border-b-2 border-[var(--line)] py-14 md:grid-cols-[200px_1fr]">
              <Reveal>
                <h3 className="text-sm font-semibold text-accent">what we did</h3>
              </Reveal>
              <Reveal delay={1}>
                <p className="max-w-[620px] text-muted">{whatWeDid}</p>
              </Reveal>
            </div>
          )}

          {project.result && (
            <div className="grid gap-14 border-b-2 border-[var(--line)] py-14 md:grid-cols-[200px_1fr]">
              <Reveal>
                <h3 className="text-sm font-semibold text-accent">the result</h3>
              </Reveal>
              <Reveal delay={1}>
                <p className="max-w-[620px] text-muted">{project.result}</p>
              </Reveal>
            </div>
          )}

          {project.media.length > 1 && (
            <div className="mt-14 space-y-8">
              {project.media.slice(1).map((item, idx) => (
                <Reveal key={idx}>
                  <MediaBlock item={item} />
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-14 text-center">
            <Link href="/work" className="btn-primary">
              all projects <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
