"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { useEffect, useState } from "react";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
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
    <section className="hero hero--reel">
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
        <Reveal>
          <p className="eyebrow text-[var(--bmkrs-paper)]">{eyebrow}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display mt-4 max-w-[16ch] text-[clamp(2.5rem,11vw,6.5rem)] font-bold leading-[0.95] text-[var(--bmkrs-paper)]">
            {headline}
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-6 max-w-[520px] text-[var(--bmkrs-paper)]/85">{sub}</p>
        </Reveal>
        <Reveal delay={3}>
          <div className="hero-cta flex flex-wrap items-center gap-4">
            <Link href={primaryCta.href} className="btn-primary">
              {primaryCta.label} <ArrowIcon />
            </Link>
            <Link
              href={secondaryCta.href}
              className="font-semibold text-[var(--bmkrs-paper)] hover:text-accent"
            >
              {secondaryCta.label}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
