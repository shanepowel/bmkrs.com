import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/sections/ProjectCard";
import { getHomeContent, getPage, getProjects } from "@/lib/content";

export default async function HomePage() {
  const [page, home, projects] = await Promise.all([
    getPage("home"),
    getHomeContent(),
    getProjects(),
  ]);

  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="relative min-h-[90vh] overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-40"
          autoPlay
          muted
          loop
          playsInline
          src={page.heroVideoUrl || "/images/headvid4.mp4"}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
        <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col justify-center px-4 py-24 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand">
            {home.bannerText}
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl whitespace-pre-line">
            {page.heroTitle}
          </h1>
          {page.heroSubtitle && (
            <p className="mt-6 max-w-xl text-lg text-muted whitespace-pre-line">
              {page.heroSubtitle}
            </p>
          )}
          <div className="mt-10 flex flex-wrap gap-4">
            {page.heroCtaLabel && page.heroCtaHref && (
              <Button href={page.heroCtaHref}>{page.heroCtaLabel}</Button>
            )}
            <Button href="/work" variant="outline">
              View work
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="Agency"
            title={home.motionTeaser.heading}
            subtitle={home.introText}
          />
          <Link
            href={home.motionTeaser.href}
            className="group rounded-2xl bg-surface p-8 ring-1 ring-white/10 transition hover:ring-brand/40"
          >
            <p className="text-sm uppercase tracking-widest text-brand">
              {home.motionTeaser.label}
            </p>
            <p className="mt-2 text-2xl font-semibold text-white">
              {home.motionTeaser.description}
            </p>
            <span className="mt-4 inline-block text-sm text-muted group-hover:text-brand">
              Explore Motion →
            </span>
          </Link>
        </div>
      </section>

      <section className="border-y border-white/5 bg-surface/50 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Capabilities"
            title="What we do"
            subtitle="Strategy, design, and growth for brands that want to rank up."
            align="center"
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.capabilityTiles.map((tile) => (
              <Link
                key={tile.title}
                href={tile.href}
                className="rounded-2xl bg-surface p-6 ring-1 ring-white/10 transition hover:ring-brand/30"
              >
                <h3 className="text-lg font-semibold text-white">{tile.title}</h3>
                <p className="mt-2 text-sm text-muted">{tile.description}</p>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Button href="/discover">Our capabilities</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title="Intelligent brands choose us"
          subtitle="Case studies across branding, eCommerce, and digital platforms."
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
          <SectionHeading
            eyebrow="How we help"
            title="How can we help you?"
            align="center"
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
            <Button href="/contact">Contact us</Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Image
              src="/images/tag_icon.png"
              alt=""
              width={80}
              height={80}
              className="mb-6"
            />
            <p className="text-sm font-semibold uppercase tracking-widest text-muted">
              We specialize in
            </p>
            <ul className="mt-6 space-y-3">
              {home.specializations.map((item) => (
                <li key={item}>
                  <Link
                    href="/discover"
                    className="text-xl font-medium text-white hover:text-brand"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-gradient-to-br from-brand/20 to-surface p-10 ring-1 ring-white/10">
            <p className="text-sm uppercase tracking-widest text-brand">
              {home.motionProgram.meet}
            </p>
            <h2 className="mt-2 text-4xl font-semibold text-white">
              {home.motionProgram.heading}
            </h2>
            <p className="mt-4 text-muted">{home.motionProgram.offer}</p>
            <div className="mt-8">
              <Button href={home.motionProgram.ctaHref}>
                {home.motionProgram.ctaLabel}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
