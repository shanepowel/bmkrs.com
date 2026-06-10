import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Kicker } from "@/components/bmkrs/Kicker";
import { Reveal } from "@/components/bmkrs/Reveal";
import { SectionRule } from "@/components/bmkrs/SectionRule";
import { Section } from "@/components/bmkrs/surfaces";
import { ServiceTags } from "@/components/bmkrs/ServiceTags";
import {
  getNextProject,
  getCaseStudySlugs,
  getProject,
  hasFilledMetrics,
  isFilled,
} from "@/lib/content";
import { creativeWorkJsonLd, metadataWithImage, siteUrl } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";
import type { MediaItem } from "@/lib/types";

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

function CaseSection({
  kicker,
  children,
  delay = 0,
}: {
  kicker: string;
  children: ReactNode;
  delay?: 0 | 1;
}) {
  return (
    <section className="case-section">
      <SectionRule />
      <div className="case-section__inner">
        <Kicker className="mt-[var(--space-tight)]">{kicker}</Kicker>
        <Reveal delay={delay}>
          <div className="case-section__body measure mt-[var(--space-tight)]">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return { title: "work" };

  const title = project.seo?.metaTitle ?? `${project.title} | bmkrs.`;
  const description =
    project.seo?.metaDescription ?? project.positioning ?? project.tagline ?? "";
  const base: Metadata = {
    title,
    description,
    alternates: { canonical: `${siteUrl}/work/${slug}` },
    openGraph: {
      title,
      description,
      type: "article",
      url: `${siteUrl}/work/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };

  if (project.seo?.ogImage) {
    return metadataWithImage(base, project.seo.ogImage);
  }

  return base;
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const [project, nextProject] = await Promise.all([getProject(slug), getNextProject(slug)]);
  if (!project) notFound();

  const services = project.serviceTags?.length
    ? project.serviceTags
    : [project.category];

  const metrics = (project.results ?? project.outcomeMetrics ?? []).filter(
    (m) => isFilled(m.value) && isFilled(m.label),
  );
  const outcomeNarrative = project.resultsNarrative || project.outcome;
  const showOutcome = isFilled(outcomeNarrative) || hasFilledMetrics(metrics);

  const quote = project.testimonial;
  const showQuote =
    quote &&
    isFilled(quote.quote) &&
    (isFilled(quote.name) || isFilled(quote.attribution));

  const thinking = project.thinking || project.challenge;

  const jsonLd = [
    creativeWorkJsonLd(project, `${siteUrl}/work/${slug}`),
    breadcrumbSchema([
      { name: "home", path: "/" },
      { name: "work", path: "/work" },
      { name: project.title, path: `/work/${slug}` },
    ]),
  ];

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <Section theme="ink" className="!pb-0">
        <Reveal>
          <Link
            href="/work"
            className="mono text-meta text-muted transition-colors hover:text-accent"
          >
            ← work
          </Link>
        </Reveal>
        <Reveal delay={1}>
          <p className="mono mt-8 text-meta text-muted">
            {[project.sector || project.category, project.year].filter(Boolean).join(" · ")}
          </p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display text-hero mt-[var(--space-tight)] font-medium">{project.title}</h1>
        </Reveal>
        {project.positioning && (
          <Reveal delay={2}>
            <p className="lead mt-[var(--space-tight)]">{project.positioning}</p>
          </Reveal>
        )}
        <Reveal delay={2}>
          <div className="relative mt-[var(--space-block)] aspect-[21/9] overflow-hidden rounded-[var(--radius)] bg-ink/5">
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
      </Section>

      <Section theme="paper" className="!pt-8">
        <div className="max-w-[900px]">
          <div className="case-meta">
            <div>
              <p className="mono text-meta text-muted">services</p>
              <ServiceTags tags={services} />
            </div>
            {project.client && (
              <div>
                <p className="mono text-meta text-muted">client</p>
                <p className="mt-2 text-body-lg">{project.client}</p>
              </div>
            )}
          </div>

          {project.brief && (
            <CaseSection kicker="the brief">
              <p>{project.brief}</p>
            </CaseSection>
          )}

          {project.whatWeDid && (
            <CaseSection kicker="what we did" delay={1}>
              <p>{project.whatWeDid}</p>
            </CaseSection>
          )}

          {thinking && (
            <CaseSection kicker="the thinking">
              <p>{thinking}</p>
            </CaseSection>
          )}

          {showOutcome && (
            <section className="case-section">
              <SectionRule />
              <div className="case-section__inner">
                <Kicker className="mt-[var(--space-tight)]">outcome</Kicker>
                {hasFilledMetrics(metrics) && (
                  <ul className="metric-grid mt-[var(--space-tight)]">
                    {metrics.map((m) => (
                      <li key={`${m.value}-${m.label}`} className="metric-card">
                        <span className="metric-value mono">{m.value}</span>
                        <span className="metric-label mono">{m.label}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {isFilled(outcomeNarrative) && (
                  <Reveal delay={1}>
                    <p className="measure mt-[var(--space-tight)] text-body-lg">{outcomeNarrative}</p>
                  </Reveal>
                )}
              </div>
            </section>
          )}

        </div>
      </Section>

      {showQuote && quote ? (
        <Section theme="orange">
          <figure className="case-testimonial max-w-[900px]">
            <blockquote className="text-h3 font-medium leading-snug">&ldquo;{quote.quote}&rdquo;</blockquote>
            <figcaption className="mono mt-4 text-meta">
              {quote.name}
              {quote.role ? `, ${quote.role}` : ""}
              {quote.company ? `, ${quote.company}` : ""}
            </figcaption>
          </figure>
        </Section>
      ) : null}

      <Section theme="ink">
        <div className="max-w-[900px]">
          {project.media.length > 1 && (
            <div className="space-y-8">
              <SectionRule />
              {project.media.slice(1).map((item, idx) => (
                <Reveal key={idx}>
                  <MediaBlock item={item} title={project.title} />
                </Reveal>
              ))}
            </div>
          )}

          <div className="case-footer mt-[var(--space-block)]">
            <SectionRule />
            <div className="mt-[var(--space-tight)] flex flex-wrap items-center justify-between gap-6">
              {nextProject ? (
                <Link
                  href={`/work/${nextProject.slug}`}
                  className="group inline-flex flex-col gap-1"
                >
                  <span className="mono text-meta text-muted">next project</span>
                  <span className="text-h3 font-medium transition-colors group-hover:text-accent">
                    {nextProject.title} →
                  </span>
                </Link>
              ) : (
                <Link href="/work" className="btn-primary">
                  all projects <ArrowIcon />
                </Link>
              )}
              <Link href="/contact" className="btn-ghost">
                start a project
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
