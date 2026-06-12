import type { Metadata } from "next";
import Link from "next/link";
import { AppLink } from "@/components/bmkrs/AppLink";
import { Reveal } from "@/components/bmkrs/Reveal";
import { H1, H2, Kicker, Section } from "@/components/bmkrs/surfaces";
import { getNetworkPage, getSiteSettings } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import {
  resolveMemberLoginUrl,
  resolveNetworkHireUrl,
  resolveNetworkJoinUrl,
} from "@/lib/urls";

const isReal = (s?: string) => !!s && !s.includes("{{");

export async function generateMetadata(): Promise<Metadata> {
  const page = await getNetworkPage();
  return pageMetadata(
    page.seo?.metaTitle ?? "the network",
    page.seo?.metaDescription ??
      "the vetted bench of senior builders, designers and specialists behind every bmkrs project. hire from it, or earn a place on it.",
    "/network",
  );
}

export default async function NetworkPage() {
  const [page, settings] = await Promise.all([getNetworkPage(), getSiteSettings()]);
  const hire = resolveNetworkHireUrl(settings);
  const join = resolveNetworkJoinUrl(settings);
  const login = resolveMemberLoginUrl(settings);

  const members = (page.members ?? []).filter((m) => m.photo?.url);
  const tiles = page.disciplineTiles ?? [];
  const stats = (page.stats ?? []).filter((s) => isReal(s.value));

  return (
    <main>
      <Section theme="ink" className="network-hero">
        <div className="network-hero--split">
        <div className="network-hero-copy">
          <Reveal>
            <Kicker theme="ink">the network</Kicker>
          </Reveal>
          <Reveal delay={1}>
            <H1 theme="ink" className="mt-4">
              {page.headline}
            </H1>
          </Reveal>
          <Reveal delay={2}>
            <p className="lead mt-8 max-w-[65ch]">{page.intro}</p>
          </Reveal>
          <Reveal delay={3}>
            <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
              <AppLink href={hire} primary>
                hire from the bench
              </AppLink>
              <AppLink href={join}>earn a place on it</AppLink>
            </div>
          </Reveal>
          <p className="network-login mono mt-6 text-meta text-muted">
            already in?{" "}
            <a
              href={login}
              className="underline decoration-1 underline-offset-4"
              rel="noopener noreferrer"
              target="_blank"
            >
              log in ↗
            </a>
          </p>
        </div>

        <div className="bench-wall" aria-label="who is on the bench">
          {members.length > 0
            ? members.map((m, i) => (
                <figure key={i} className="bench-tile bench-tile--member">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={m.photo!.url} alt={m.photo!.alt ?? m.name} />
                  <figcaption>
                    <span>{m.name}</span>
                    <span className="muted">{m.discipline}</span>
                  </figcaption>
                </figure>
              ))
            : tiles.map((t, i) => (
                <div key={i} className="bench-tile">
                  <span className="bench-tile-title">{t.title}</span>
                  {t.sub ? <span className="muted">{t.sub}</span> : null}
                </div>
              ))}
          <a className="bench-tile bench-tile--cta" href={join} rel="noopener noreferrer" target="_blank">
            <span className="bench-tile-title">+ you, maybe</span>
            <span>apply ↗</span>
          </a>
        </div>
        </div>
      </Section>

      {stats.length > 0 ? (
        <Section theme="ink" tight className="network-stats">
          <ul role="list" className="metric-grid">
            {stats.map((s, i) => (
              <li key={i} className="metric-card">
                <span className="metric-value">{s.value}</span>
                <span className="metric-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {page.barSteps?.length ? (
        <Section theme="paper">
          <Kicker theme="paper">how you get in</Kicker>
          <H2 theme="paper" className="mt-4">
            {page.barHeadline}
          </H2>
          <ol className="process mt-10">
            {page.barSteps.map((s, i) => (
              <li key={i} className="process-step">
                <Reveal delay={(i % 2) as 0 | 1}>
                  <span className="eyebrow process-num preserve-case">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display mt-2 text-xl">{s.title}</h3>
                  <p className="mt-2 text-muted">{s.body}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </Section>
      ) : null}

      <Section theme="ink">
        <div className="network-split">
          {page.forCompanies ? (
            <article className="network-card">
              <Kicker theme="ink">for companies</Kicker>
              <h3 className="network-door-heading display mt-2 text-xl">{page.forCompanies.heading}</h3>
              <p className="network-body mt-4 leading-relaxed text-muted">{page.forCompanies.body}</p>
              {page.forCompanies.steps?.length ? (
                <ul role="list" className="door-steps mt-4">
                  {page.forCompanies.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : null}
              <AppLink href={hire} primary className="mt-6">
                {page.forCompanies.cta ?? "find talent"}
              </AppLink>
            </article>
          ) : null}
          {page.forSpecialists ? (
            <article className="network-card">
              <Kicker theme="ink">for specialists</Kicker>
              <h3 className="network-door-heading display mt-2 text-xl">{page.forSpecialists.heading}</h3>
              <p className="network-body mt-4 leading-relaxed text-muted">{page.forSpecialists.body}</p>
              {page.forSpecialists.steps?.length ? (
                <ul role="list" className="door-steps mt-4">
                  {page.forSpecialists.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              ) : null}
              <AppLink href={join} primary className="mt-6">
                {page.forSpecialists.cta ?? "join the network"}
              </AppLink>
            </article>
          ) : null}
        </div>
      </Section>

      {page.connects ? (
        <Section theme="paper">
          <Kicker theme="paper">how it connects</Kicker>
          <H2 theme="paper" className="mt-4">
            the same bench, whoever runs the work.
          </H2>
          <p className="lead mt-6 max-w-[65ch]">{page.connects}</p>
          <div className="hero-cta mt-10 flex flex-wrap items-center gap-4">
            <Link href="/motion" className="btn-primary">
              explore motion
            </Link>
            <Link href="/services" className="text-sm font-semibold text-muted hover:text-accent">
              our services
            </Link>
          </div>
        </Section>
      ) : null}
    </main>
  );
}
