"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Kicker } from "@/components/bmkrs/Kicker";
import { Reveal } from "@/components/bmkrs/Reveal";

export type HeroReelProps = {
  reelUrl?: string;
  poster?: string;
  eyebrow: string;
  headline: ReactNode;
  sub: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
};

export function HeroReel({
  reelUrl,
  poster,
  eyebrow,
  headline,
  sub,
  primaryCta,
  secondaryCta,
}: HeroReelProps) {
  const [motionOk, setMotionOk] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: no-preference)");
    setMotionOk(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setMotionOk(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const showVideo = Boolean(reelUrl) && motionOk;

  return (
    <section className="hero hero--reel" data-surface="ink">
      <div className="hero-media" aria-hidden="true">
        {showVideo ? (
          <video className="hero-bg" src={reelUrl} poster={poster} autoPlay muted loop playsInline />
        ) : poster ? (
          <Image src={poster} alt="" fill priority sizes="100vw" className="object-cover" />
        ) : (
          <div className="hero-bg hero-bg--solid" />
        )}
        <div className="hero-scrim" />
      </div>

      <div className="hero-content wrap">
        <div className="site-grid items-end">
          <div className="site-span-9 cluster-tight">
            <Reveal>
              <Kicker className="text-[var(--bmkrs-off-white)]">{eyebrow}</Kicker>
            </Reveal>
            <Reveal delay={1}>
              <h1 className="display text-hero font-medium text-[var(--bmkrs-off-white)]">
                {headline}
              </h1>
            </Reveal>
            <Reveal delay={2}>
              <p className="lead text-[var(--bmkrs-off-white)]/90">{sub}</p>
            </Reveal>
          </div>
          <Reveal delay={3} className="site-span-cta mt-[var(--space-tight)] lg:mt-0">
            <div className="hero-cta flex flex-wrap items-center gap-4 lg:justify-end">
              <Link href={primaryCta.href} className="btn-primary">
                {primaryCta.label} <ArrowIcon />
              </Link>
              <Link
                href={secondaryCta.href}
                className="font-medium text-[var(--bmkrs-off-white)] transition-colors hover:text-accent"
              >
                {secondaryCta.label}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
