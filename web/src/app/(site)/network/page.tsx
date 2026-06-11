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

export async function generateMetadata(): Promise<Metadata> {
  const page = await getNetworkPage();
  return pageMetadata(
    page.seo?.metaTitle ?? "the network",
    page.seo?.metaDescription ??
      "the senior builders, designers and specialists behind every bmkrs project. hire them, or join them.",
    "/network",
  );
}

export default async function NetworkPage() {
  const [page, settings] = await Promise.all([getNetworkPage(), getSiteSettings()]);
  const hire = resolveNetworkHireUrl(settings);
  const join = resolveNetworkJoinUrl(settings);
  const login = resolveMemberLoginUrl(settings);

  return (
    <main>
      <Section theme="ink" className="network-hero">
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
              find talent
            </AppLink>
            <AppLink href={join}>join the network</AppLink>
          </div>
        </Reveal>
        <p className="network-login mono mt-6 text-meta text-muted">
          already in?{" "}
          <a href={login} className="underline decoration-1 underline-offset-4" rel="noopener noreferrer" target="_blank">
            log in ↗
          </a>
        </p>
      </Section>

      {page.whatItIs ? (
        <Section theme="paper">
          <Kicker theme="paper">what it is</Kicker>
          <p className="lead mt-6 max-w-[65ch]">{page.whatItIs}</p>
        </Section>
      ) : null}

      <Section theme="ink">
        <div className="network-split">
          {page.forCompanies ? (
            <article className="network-card">
              <Kicker theme="ink">{page.forCompanies.heading}</Kicker>
              <p className="network-body mt-4 leading-relaxed text-muted">{page.forCompanies.body}</p>
              <AppLink href={hire} primary className="mt-6">
                {page.forCompanies.cta ?? "find talent"}
              </AppLink>
            </article>
          ) : null}
          {page.forSpecialists ? (
            <article className="network-card">
              <Kicker theme="ink">{page.forSpecialists.heading}</Kicker>
              <p className="network-body mt-4 leading-relaxed text-muted">{page.forSpecialists.body}</p>
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
