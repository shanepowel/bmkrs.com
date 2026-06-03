import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getProject, getProjects } from "@/lib/content";
import type { MediaItem } from "@/lib/types";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

function MediaBlock({ item, title }: { item: MediaItem; title: string }) {
  if (item.type === "iframe" && item.src) {
    return (
      <div className="aspect-video overflow-hidden rounded-[var(--radius)] ring-2 ring-ink/10">
        <iframe
          src={item.src}
          title={`${title} video`}
          className="h-full w-full"
          loading="lazy"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
    );
  }
  if (item.type === "image" && item.src) {
    return (
      <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius)]">
        <Image
          src={item.src}
          alt={item.alt || title}
          fill
          quality={75}
          loading="lazy"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 720px"
        />
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

function CaseStudySection({
  label,
  children,
  delay = 0,
}: {
  label: string;
  children: ReactNode;
  delay?: 0 | 1;
}) {
  return (
    <div className="grid gap-8 border-b-2 border-[var(--line)] py-12 md:grid-cols-[180px_1fr] md:gap-14">
      <Reveal>
        <h2 className="section-label text-sm font-semibold text-accent">{label}</h2>
      </Reveal>
      <Reveal delay={delay}>{children}</Reveal>
    </div>
  );
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

  const services = project.serviceTags?.length
    ? project.serviceTags
    : [project.category];

  return (
    <>
      <section className="page-top px-[var(--pad)] pb-12">
        <div className="wrap">
          <Reveal>
            <Link
              href="/work"
              className="text-sm font-semibold text-muted transition-colors hover:text-accent"
            >
              ← work
            </Link>
          </Reveal>
          <Reveal delay={1}>
            <span className="eyebrow mt-8 block">
              {[project.sector || project.category, project.year].filter(Boolean).join(" · ")}
            </span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display heading-case mt-4 text-[clamp(2.25rem,11vw,9.375rem)] font-bold">
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
                quality={75}
                className="object-cover"
                priority
                fetchPriority="high"
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap max-w-[900px]">
          <dl className="mb-4 flex flex-wrap gap-x-10 gap-y-4 border-b-2 border-[var(--line)] pb-10 text-sm">
            <div>
              <dt className="meta-label font-semibold text-accent">Services</dt>
              <dd className="nocase mt-1 text-ink/90">{services.join(" · ")}</dd>
            </div>
            {project.client && (
              <div>
                <dt className="meta-label font-semibold text-accent">Client</dt>
                <dd className="mt-1 text-ink/90">{project.client}</dd>
              </div>
            )}
          </dl>

          {project.context && (
            <CaseStudySection label="Context">
              <p className="text-[17px] leading-relaxed text-ink/90">{project.context}</p>
            </CaseStudySection>
          )}

          {project.challenge && (
            <CaseStudySection label="The challenge" delay={1}>
              <p className="text-[17px] leading-relaxed text-ink/90">{project.challenge}</p>
            </CaseStudySection>
          )}

          {project.whatWeDid && (
            <CaseStudySection label="What we did">
              <p className="text-[17px] leading-relaxed text-ink/90">{project.whatWeDid}</p>
            </CaseStudySection>
          )}

          {project.outcome && (
            <CaseStudySection label="The outcome" delay={1}>
              <p className="text-[17px] leading-relaxed text-ink/90">{project.outcome}</p>
              {project.outcomeMetrics && project.outcomeMetrics.length > 0 && (
                <ul className="mt-8 grid gap-6 sm:grid-cols-3">
                  {project.outcomeMetrics.map((m) => (
                    <li key={m.label} className="rounded-[var(--radius)] bg-ink/[0.04] p-5">
                      <span className="display block text-[clamp(1.5rem,4vw,2.25rem)] font-bold text-accent">
                        {m.value}
                      </span>
                      <span className="mt-2 block text-sm text-muted">{m.label}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CaseStudySection>
          )}

          {project.testimonial?.quote && (
            <Reveal>
              <blockquote className="my-14 border-l-4 border-accent pl-8">
                <p className="display text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium leading-snug text-ink">
                  &ldquo;{project.testimonial.quote}&rdquo;
                </p>
                {project.testimonial.attribution && (
                  <footer className="mt-4 text-sm text-muted">
                    {project.testimonial.attribution}
                  </footer>
                )}
              </blockquote>
            </Reveal>
          )}

          {project.media.length > 1 && (
            <div className="mt-8 space-y-8 border-t-2 border-[var(--line)] pt-14">
              {project.media.slice(1).map((item, idx) => (
                <Reveal key={idx}>
                  <MediaBlock item={item} title={project.title} />
                </Reveal>
              ))}
            </div>
          )}

          <div className="mt-14 flex flex-wrap gap-4">
            <Link href="/work" className="btn-primary">
              all projects <ArrowIcon />
            </Link>
            <Link href="/contact" className="btn-secondary">
              start a project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
