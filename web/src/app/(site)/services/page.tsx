import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DisciplinesStack } from "@/components/bmkrs/DisciplinesStack";
import { PageHeroSplit } from "@/components/bmkrs/PageHeroSplit";
import { Reveal } from "@/components/bmkrs/Reveal";
import { getDisciplines, getProducts } from "@/lib/content";
import { pageHeroImages, productImageBySlug } from "@/lib/content/image-fallbacks";
import type { Product, ProductTier } from "@/lib/types";

import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = pageMetadata(
  "services",
  "brand and identity, voice and messaging, pr, and product and growth. four disciplines, one team, built to work together.",
  "/services",
);

const TIERS: { key: ProductTier; label: string; intro: string }[] = [
  { key: "start", label: "start", intro: "a fast, honest read before you commit to anything bigger." },
  {
    key: "make",
    label: "make",
    intro: "fixed-scope sprints that build the brand and everything that carries it.",
  },
  { key: "grow", label: "grow", intro: "one team keeping it all moving, month after month. this is motion." },
];

function productCta(p: Product) {
  if (p.tier === "grow") {
    return { href: "/motion", label: "explore motion →" };
  }
  return { href: "/contact", label: `${p.priceNote ?? "let's talk"} →` };
}

export default async function ServicesPage() {
  const [disciplines, products] = await Promise.all([getDisciplines(), getProducts()]);
  const byTier = (tier: ProductTier) => products.filter((p) => p.tier === tier);
  const hero = pageHeroImages.services;

  const jsonLd = breadcrumbSchema([
    { name: "home", path: "/" },
    { name: "services", path: "/services" },
  ]);

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <PageHeroSplit image={hero} minHeight="min-h-[68vh]">
        <Reveal>
          <p className="eyebrow">services</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="display mt-4 text-[clamp(2.25rem,9vw,8rem)] font-bold">
            everything your brand needs to <span className="text-accent">grow.</span>
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-8 max-w-[560px]">
            four equally strong disciplines, one team. below them, simple ways to start. the work is
            bespoke, the way you begin it does not have to be.
          </p>
        </Reveal>
      </PageHeroSplit>

      <DisciplinesStack disciplines={disciplines} />

      <section className="section-pad section--paper">
        <div className="wrap section">
          <h3 className="display text-[clamp(1.35rem,3vw,2rem)] font-bold">not sure where to start?</h3>
          <ul className="service-router mt-6 flex flex-col gap-3 text-[15px]">
            <li>
              <Link href="/services#launch-kit" className="accent-link">
                launching something new → launch kit
              </Link>
            </li>
            <li>
              <Link href="/services#brand-check" className="accent-link">
                brand feels stale or wrong → brand check, then rebrand
              </Link>
            </li>
            <li>
              <Link href="/services#story" className="accent-link">
                story is muddled → story
              </Link>
            </li>
            <li>
              <Link href="/services#storefront" className="accent-link">
                site is not converting → storefront
              </Link>
            </li>
            <li>
              <Link href="/services#press-launch" className="accent-link">
                launching and need coverage → press launch
              </Link>
            </li>
            <li>
              <Link href="/motion" className="accent-link">
                already live, need momentum → motion
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="wrap section">
          <p className="eyebrow">ways to work with us</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold">start, make, grow.</h2>
          <p className="lead mt-6 max-w-[560px]">
            the same four disciplines, packaged so you know exactly what you are getting.
          </p>
        </div>
      </section>

      {TIERS.map((tier) => (
        <section key={tier.key} className="tier-section scroll-mt-24" id={tier.key}>
          <div className="tier-head">
            <h3 className="display preserve-case text-[clamp(1.75rem,4vw,3rem)] text-accent">
              {tier.label}
            </h3>
            <p className="muted mt-2">{tier.intro}</p>
          </div>

          <div className="product-grid">
            {byTier(tier.key).map((p) => {
              const cta = productCta(p);
              const thumb = productImageBySlug[p.slug];
              return (
                <article key={p.slug} className="product-card scroll-mt-24" id={p.slug}>
                  {thumb && (
                    <div className="product-card-media relative">
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 400px"
                      />
                    </div>
                  )}
                  <h3 className="display text-[clamp(1.25rem,2.5vw,1.75rem)]">{p.name}</h3>
                  {p.priceFrom && p.tier !== "grow" ? (
                    <p className="eyebrow mt-2">from {p.priceFrom} · {p.shape}</p>
                  ) : null}
                  <p className="product-tagline">{p.tagline}</p>

                  {p.forWho && (
                    <p className="product-for">
                      <span className="eyebrow mb-1 block">for</span> {p.forWho}
                    </p>
                  )}

                  {p.included?.length ? (
                    <ul className="product-included">
                      {p.included.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="product-foot">
                    {p.shape && <span className="eyebrow">{p.shape}</span>}
                    {p.proof?.length ? (
                      <span className="product-proof">
                        proof:{" "}
                        {p.proof.map((c, i) => (
                          <span key={c.slug}>
                            <Link href={`/work/${c.slug}`} className="text-accent hover:underline">
                              {c.title}
                            </Link>
                            {i < p.proof!.length - 1 ? ", " : ""}
                          </span>
                        ))}
                      </span>
                    ) : null}
                  </div>

                  <Link className="product-cta" href={cta.href}>
                    {cta.label}
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      ))}

      <section className="section-pad section--paper">
        <div className="wrap bespoke">
          <p className="eyebrow">bigger than a package?</p>
          <h2 className="display mt-4 text-[clamp(2rem,5vw,3.5rem)] font-bold">
            some work does not fit a box. that is fine.
          </h2>
          <p className="lead mt-6 max-w-[520px]">
            if you need something broader, or you are not sure where it sits, start with a conversation
            and we will shape it together.
          </p>
          <Link href="/contact" className="btn-primary mt-10 inline-flex">
            start a project
          </Link>
        </div>
      </section>
    </main>
  );
}
