import type { Metadata } from "next";
import Link from "next/link";
import { getProducts } from "@/lib/content";
import type { Product, ProductTier } from "@/lib/types";

export const metadata: Metadata = {
  title: "services",
  description:
    "ways to work with us: a fast brand check to start, fixed-scope sprints to build, and motion to keep it growing. one team throughout.",
};

const TIERS: { key: ProductTier; label: string; intro: string }[] = [
  { key: "start", label: "start", intro: "a fast, honest read before you commit to anything bigger." },
  {
    key: "make",
    label: "make",
    intro: "fixed-scope sprints that build the brand and everything that carries it.",
  },
  { key: "grow", label: "grow", intro: "one team keeping it all moving, month after month. this is motion." },
];

export default async function ServicesPage() {
  const products = await getProducts();
  const byTier = (tier: ProductTier) => products.filter((p) => p.tier === tier);

  return (
    <main>
      <section className="page-hero min-h-[68vh]">
        <div className="wrap section">
          <p className="eyebrow">services</p>
          <h1 className="display mt-4 text-[clamp(2.25rem,9vw,8rem)] font-bold">
            everything your brand needs to <span className="text-accent">grow.</span>
          </h1>
          <p className="lead mt-8 max-w-[560px]">
            brand, voice, pr and the product to back it up, packaged so you know exactly what you are
            getting. the work is bespoke. the way you start it does not have to be.
          </p>
        </div>
      </section>

      {TIERS.map((tier) => (
        <section key={tier.key} className="tier-section" id={tier.key}>
          <div className="tier-head">
            <h2 className="display preserve-case text-[clamp(1.75rem,4vw,3rem)] text-accent">
              {tier.label}
            </h2>
            <p className="muted mt-2">{tier.intro}</p>
          </div>

          <div className="product-grid">
            {byTier(tier.key).map((p) => (
              <article key={p.slug} className="product-card" id={p.slug}>
                <h3 className="display text-[clamp(1.25rem,2.5vw,1.75rem)]">{p.name}</h3>
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

                <Link className="product-cta" href="/contact">
                  let&apos;s talk →
                </Link>
              </article>
            ))}
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
