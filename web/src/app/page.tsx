import Image from "next/image";
import Link from "next/link";
import { MediaStrip, PageBanner } from "@/components/sections/PageMedia";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getFeaturedProjects, getHomeContent, getPage } from "@/lib/content";
import { marketingImages, marketingVideos } from "@/lib/marketing-assets";

export default async function HomePage() {
  const [page, home, featured] = await Promise.all([
    getPage("home"),
    getHomeContent(),
    getFeaturedProjects(),
  ]);

  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          poster={marketingImages.heroSculpture}
          src={page.heroVideoUrl || marketingVideos.heroReel}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          {page.heroEyebrow && (
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
              {page.heroEyebrow}
            </p>
          )}
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            {page.heroTitle}
          </h1>
          {page.heroSubtitle && (
            <p className="mt-6 max-w-xl text-lg text-muted">{page.heroSubtitle}</p>
          )}
          <div className="mt-10 flex flex-wrap gap-4">
            {page.heroCtaLabel && page.heroCtaHref && (
              <Button href={page.heroCtaHref}>{page.heroCtaLabel}</Button>
            )}
            {page.heroCta2Label && page.heroCta2Href && (
              <Button href={page.heroCta2Href} variant="outline">
                {page.heroCta2Label}
              </Button>
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow={home.motionTeaser.eyebrow}
            title={home.motionTeaser.heading}
            subtitle={home.motionTeaser.body}
          />
          <Link
            href={home.motionTeaser.href}
            className="group overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10 transition hover:ring-brand/40"
          >
            <div className="relative aspect-[16/10]">
              <Image
                src={marketingImages.filmProduction}
                alt="Motion partnership — production and content"
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8">
              <span className="inline-block rounded-full bg-brand/10 px-4 py-2 text-sm font-medium text-brand">
                {home.motionTeaser.ctaLabel}
              </span>
              <span className="mt-4 block text-sm text-muted group-hover:text-white">
                Learn more →
              </span>
            </div>
          </Link>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do"
            subtitle="Strategy, design, and growth for brands with ambition."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.capabilityTiles.map((tile) => {
              const tileImage: Record<string, string> = {
                "/discover#branding": marketingImages.brandGuidelines,
                "/discover#web": marketingImages.digitalEcosystem,
                "/discover#ecommerce": marketingImages.creativeDesk,
                "/discover#performance": marketingImages.socialStrategy,
              };
              const src = tileImage[tile.href];
              return (
                <Link
                  key={tile.title}
                  href={tile.href}
                  className="overflow-hidden rounded-2xl bg-surface ring-1 ring-white/10 transition hover:ring-brand/30"
                >
                  {src && (
                    <div className="relative aspect-[3/2]">
                      <Image
                        src={src}
                        alt=""
                        fill
                        className="object-cover"
                        sizes="(max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                    <p className="mt-2 text-sm text-muted">{tile.description}</p>
                    <span className="mt-4 inline-block text-sm text-brand">Read more →</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="mt-10 text-center">
            <Button href="/discover">All capabilities</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={home.selectedWork.eyebrow}
          title={home.selectedWork.title}
          subtitle={home.selectedWork.subtitle}
        />
        <div className="grid gap-8 md:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-10">
          <Button href="/work" variant="outline">
            All projects
          </Button>
        </div>
      </section>

      <section className="border-t border-white/5 bg-surface py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PageBanner
            src={marketingImages.brandArchitecture}
            alt="Brand strategy workshop — architecture and planning"
            className="mb-16"
          />
          <SectionHeading
            eyebrow="How we work"
            title="One team, built around your brand"
            subtitle={home.howWeWorkIntro}
            align="center"
          />
          <MediaStrip
            className="mb-16"
            items={[
              { src: marketingImages.designStudio, alt: "Design and illustration" },
              { src: marketingImages.videoEditing, alt: "Video and content production" },
              { src: marketingImages.podcastStudio, alt: "Audio and studio production" },
              { src: marketingImages.creativeToolkit, alt: "Creative tools and media" },
            ]}
          />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {home.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/5 bg-background p-6"
              >
                <h3 className="text-xl font-semibold text-brand">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button href="/contact">Start a project</Button>
          </div>
        </div>
      </section>
    </>
  );
}
