"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { fadeUp } from "./animations";
import { SectionIntro } from "./SectionIntro";
import type { Product } from "@/lib/types";

type MonthInMotion = {
  kicker: string;
  headline: string;
  paragraphs: string[];
};

export function MotionTiers({
  monthInMotion,
  tiers,
}: {
  monthInMotion: MonthInMotion;
  tiers: Product[];
}) {
  return (
    <section id="tiers" className="section-pad scroll-mt-24 bg-[var(--bg)]" data-surface="paper">
      <div className="wrap">
        <SectionIntro
          eyebrow={monthInMotion.kicker}
          title={monthInMotion.headline}
          body={monthInMotion.paragraphs[0]}
        />
        {monthInMotion.paragraphs.slice(1).map((paragraph) => (
          <p key={paragraph.slice(0, 28)} className="lead mt-5 max-w-[65ch] text-lg leading-relaxed">
            {paragraph}
          </p>
        ))}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-[var(--space-block)] border-t border-[var(--line)] pt-[var(--space-block)]"
        >
          <p className="eyebrow">the tiers</p>
          <h3 className="display mt-2 text-3xl font-bold">grow with us.</h3>
        </motion.div>

        <div className="motion-tier-grid mt-10">
          {tiers.map((tier) => (
            <article key={tier.slug} className="motion-tier-card">
              <h3 className="display">{tier.name}</h3>
              <p className="mt-2">{tier.tagline}</p>
              {tier.forWho ? <p className="motion-meta mt-3">{tier.forWho}</p> : null}
              {tier.cadence ? (
                <p className="motion-meta">
                  <span className="eyebrow mb-1 block">cadence</span> {tier.cadence}
                </p>
              ) : null}
              {tier.commitment ? (
                <p className="motion-meta">
                  <span className="eyebrow mb-1 block">commitment</span> {tier.commitment}
                </p>
              ) : null}
              {tier.priceFrom ? (
                <p className="display mt-4 text-2xl font-bold tracking-[-0.04em]">
                  from {tier.priceFrom}
                  {tier.priceNote ?? "/month"}
                </p>
              ) : null}
              {tier.monthlyDeliverables?.length ? (
                <ul className="product-included mt-3">
                  {tier.monthlyDeliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
              {tier.outcome ? <p className="mt-3 text-sm text-muted">{tier.outcome}</p> : null}
              <Link href="/contact" className="product-cta mt-auto pt-4">
                let&apos;s talk →
              </Link>
              {tier.slug === "motion-plus" ? (
                <p className="motion-meta mt-3">
                  extended network via{" "}
                  <Link href="/network" className="underline decoration-1 underline-offset-4">
                    the network
                  </Link>
                </p>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
