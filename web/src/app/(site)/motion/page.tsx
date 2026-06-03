import Link from "next/link";
import { ArrowIcon } from "@/components/bmkrs/ArrowIcon";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getMotionContent, getPage } from "@/lib/content";

export const metadata = { title: "motion" };

export default async function MotionPage() {
  const [page, motion] = await Promise.all([getPage("motion"), getMotionContent()]);

  return (
    <>
      <section className="flex min-h-[78vh] flex-col justify-center px-[var(--pad)] pt-32">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{page.heroEyebrow}</span>
          </Reveal>
          <Reveal delay={1}>
            <h1 className="display mt-4 text-[clamp(56px,12vw,190px)] font-bold">
              always in <span className="text-accent">motion.</span>
            </h1>
          </Reveal>
          {page.heroSubtitle && (
            <Reveal delay={2}>
              <p className="lead mt-8 max-w-[640px]">{page.heroSubtitle}</p>
            </Reveal>
          )}
          {page.heroCtaLabel && page.heroCtaHref && (
            <Reveal delay={3}>
              <Link href={page.heroCtaHref} className="btn-primary mt-10">
                {page.heroCtaLabel} <ArrowIcon />
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="wrap">
          <div className="grid gap-4 md:grid-cols-2">
            {motion.benefits.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) as 0 | 1}>
                <div className="cap-card">
                  <span className="col-span-2 font-display text-[15px] font-semibold text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="col-span-2">
                    <h3 className="display mb-2.5 text-[clamp(24px,3vw,36px)]">{item.title}</h3>
                    <p className="text-base text-muted">{item.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad block-lilac">
        <div className="wrap">
          <Reveal>
            <span className="eyebrow">{motion.motionPlus.eyebrow}</span>
          </Reveal>
          <h2 className="display mt-4 max-w-[16ch] text-[clamp(36px,7vw,98px)] font-bold">
            from in-house <br />
            to <span className="text-accent">full-house.</span>
          </h2>
          {motion.motionPlus.paragraphs.map((p, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2}>
              <p className="lead mt-6 text-ink/70">{p}</p>
            </Reveal>
          ))}
          {motion.motionPlus.poweredBy && (
            <p className="mt-6 text-sm font-medium text-muted">{motion.motionPlus.poweredBy}</p>
          )}
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-10">
            <Reveal>
              <h2 className="display text-[clamp(38px,6vw,86px)]">
                pick your <span className="text-accent">pace.</span>
              </h2>
            </Reveal>
            <Reveal delay={1}>
              <p className="max-w-[340px] text-muted">{motion.tiersHead.subtitle}</p>
            </Reveal>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {motion.tiers.map((tier, i) => (
              <Reveal key={tier.id} delay={i as 0 | 1 | 2}>
                <div
                  className={`flex h-full flex-col rounded-[var(--radius)] border-2 border-ink p-8 transition hover:-translate-y-2 ${
                    tier.featured
                      ? "bg-ink text-bg"
                      : tier.plus
                        ? "block-lilac"
                        : "bg-bg"
                  }`}
                >
                  {tier.tag && (
                    <span
                      className={`mb-3 block min-h-4 text-xs font-semibold ${
                        tier.featured ? "text-bg" : "text-accent"
                      }`}
                    >
                      {tier.tag}
                    </span>
                  )}
                  <p className="display text-[27px] font-bold">{tier.name}</p>
                  <p className="display mt-4 text-[42px] font-bold tracking-[-0.04em]">
                    {tier.price}
                    {tier.priceNote && (
                      <small
                        className={`ml-1 font-body text-sm font-normal ${
                          tier.featured ? "text-bg/80" : "text-muted"
                        }`}
                      >
                        {tier.priceNote}
                      </small>
                    )}
                  </p>
                  <p
                    className={`mb-5 mt-1 text-sm ${
                      tier.featured ? "text-bg/85" : "text-muted"
                    }`}
                  >
                    {tier.description}
                  </p>
                  <ul className="mb-7 flex-1 space-y-2.5">
                    {tier.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm">
                        <span className={tier.featured ? "text-bg" : "text-accent"}>+</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={
                      tier.featured
                        ? "btn-ghost border-bg text-bg hover:bg-bg hover:text-ink"
                        : tier.plus
                          ? "btn-primary"
                          : "btn-ghost"
                    }
                  >
                    {tier.ctaLabel}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad block-peach text-center">
        <div className="wrap">
          <Reveal>
            <h2 className="display mb-6 text-[clamp(40px,7vw,100px)]">
              {motion.closingCta.title.replace("momentum.", "")}
              <span className="text-accent">momentum.</span>
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <p className="lead mx-auto mb-9">{motion.closingCta.body}</p>
          </Reveal>
          <Reveal delay={2}>
            <Link href={motion.closingCta.ctaHref} className="btn-primary">
              {motion.closingCta.ctaLabel} <ArrowIcon />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
