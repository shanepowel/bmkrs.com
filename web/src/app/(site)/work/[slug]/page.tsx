import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
import {
  getCaseStudySlugs,
  getProject,
  hasFilledMetrics,
  isFilled,
} from "@/lib/content";
import { creativeWorkJsonLd } from "@/lib/seo";
import type { MediaItem, Project } from "@/lib/types";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 3600;

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
  return null;
}

function NarrativeBlock({
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
        <h2 className="eyebrow mb-0">{label}</h2>
      </Reveal>
      <Reveal delay={delay}>{children}</Reveal>
    </div>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "work" };

  const title = project.seo?.metaTitle ?? `${project.title} | bmkrs.`;
  const description =
    project.seo?.metaDescription ?? project.positioning ?? project.tagline ?? "";
  const ogImage =
    project.seo?.ogImage ?? project.heroImage?.url ?? project.thumbnailPath;
  const ogUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteUrl}/work/${slug}`,
      images: [{ url: ogUrl, width: 1200, height: 630, alt: project.title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogUrl],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();

  const services = project.serviceTags?.length
    ? project.serviceTags
    : [project.category];

  const metrics = (project.results ?? project.outcomeMetrics ?? []).filter(
    (m) => isFilled(m.value) && isFilled(m.label),
  );
  const showMetrics = hasFilledMetrics(metrics);
  const showResultsNarrative = isFilled(project.resultsNarrative);
  const showResults = showMetrics || showResultsNarrative;

  const quote = project.testimonial;
  const showQuote =
    quote &&
    isFilled(quote.quote) &&
    (isFilled(quote.name) || isFilled(quote.attribution));

  const jsonLd = creativeWorkJsonLd(project, `${siteUrl}/work/${slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <p className="eyebrow mt-8 block">
              {[project.sector || project.category, project.year].filter(Boolean).join(" · ")}
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(2.25rem,11vw,9.375rem)] font-bold">
              {project.title}
            </h1>
          </Reveal>
          {project.positioning && (
            <Reveal delay={2}>
              <p className="lead mt-5 max-w-[540px]">{project.positioning}</p>
            </Reveal>
          )}
          <Reveal delay={2}>
            <div className="relative my-14 aspect-[16/8] overflow-hidden rounded-[var(--radius)] section--paper">
              <Image
                src={project.thumbnailPath}
                alt={project.heroImage?.alt || project.title}
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
              <dt className="eyebrow mb-2 block text-[11px]">services</dt>
              <dd className="nocase text-ink/90">{services.join(" · ")}</dd>
            </div>
            {project.client && (
              <div>
                <dt className="eyebrow mb-2 block text-[11px]">client</dt>
                <dd className="mt-1 text-ink/90">{project.client}</dd>
              </div>
            )}
          </dl>

          {project.brief && (
            <NarrativeBlock label="the brief">
              <p className="text-[17px] leading-relaxed text-ink/90">{project.brief}</p>
            </NarrativeBlock>
          )}

          {project.challenge && (
            <NarrativeBlock label="the challenge" delay={1}>
              <p className="text-[17px] leading-relaxed text-ink/90">{project.challenge}</p>
            </NarrativeBlock>
          )}

          {project.whatWeDid && (
            <NarrativeBlock label="what we did">
              <p className="text-[17px] leading-relaxed text-ink/90">{project.whatWeDid}</p>
            </NarrativeBlock>
          )}

          {showResults && (
            <section className="results-block border-b-2 border-[var(--line)] py-12">
              <Reveal>
                <h2 className="eyebrow mb-8">the result</h2>
              </Reveal>
              {showMetrics && (
                <ul className="metric-grid">
                  {metrics.map((m) => (
                    <li key={`${m.value}-${m.label}`} className="metric-card">
                      <span className="metric-value">{m.value}</span>
                      <span className="metric-label">{m.label}</span>
                    </li>
                  ))}
                </ul>
              )}
              {showResultsNarrative && (
                <Reveal delay={1}>
                  <p className="text-[17px] leading-relaxed text-ink/90">
                    {project.resultsNarrative}
                  </p>
                </Reveal>
              )}
            </section>
          )}

          {showQuote && quote && (
            <Reveal>
              <figure className="case-testimonial">
                <blockquote>&ldquo;{quote.quote}&rdquo;</blockquote>
                <figcaption>
                  {quote.name}
                  {quote.role ? `, ${quote.role}` : ""}
                  {quote.company ? `, ${quote.company}` : ""}
                </figcaption>
              </figure>
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
