import type { Metadata } from "next";
import { ProcessBand } from "@/components/bmkrs/ProcessBand";
import { Reveal } from "@/components/bmkrs/Reveal";
import { Button, H1, H2, Kicker, Section } from "@bmkrs/ui";
import { LadderIntro } from "@/components/services/LadderIntro";
import { LegacyHashRedirect } from "@/components/services/LegacyHashRedirect";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import { PackageSection } from "@/components/services/PackageSection";
import { WhichOne } from "@/components/services/WhichOne";
import { servicesFaq } from "@/lib/content/expansion-v2";
import { getProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, offerCatalogSchema } from "@/lib/structured-data";
import { marketingImages } from "@/lib/marketing-assets";
import type { ProductTier } from "@/lib/types";

export const metadata: Metadata = pageMetadata(
  "services | bmkrs.",
  "start small, make properly, grow on purpose. fixed-scope packages with prices, from brand check to motion.",
  "/services",
);

const TIERS: ProductTier[] = ["start", "make", "grow"];

export default async function ServicesPage() {
  const products = await getProducts();
  const byTier = (tier: ProductTier) => products.filter((p) => p.tier === tier);

  const jsonLd = [
    breadcrumbSchema([
      { name: "home", path: "/" },
      { name: "services", path: "/services" },
    ]),
    offerCatalogSchema(products),
    faqPageSchema(servicesFaq),
  ];

  return (
    <main>
      <LegacyHashRedirect />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Section theme="ink">
        <Reveal>
          <Kicker theme="ink">services</Kicker>
        </Reveal>
        <Reveal delay={1}>
          <H1 theme="ink" className="mt-4 max-w-[16ch]">
            start small, make properly, grow on purpose.
          </H1>
        </Reveal>
        <Reveal delay={2}>
          <p className="lead mt-8 max-w-[65ch]">
            every engagement is bespoke. the packages below shape how we begin, what you get, and what
            it costs. not how the creative gets made. fixed scope, fixed timeline, one point of
            contact.
          </p>
        </Reveal>
      </Section>

      <MarketingBanner
        src={marketingImages.disciplineIcons}
        alt="branding, messaging, communications and digital product"
        aspect="4/3"
      />

      <LadderIntro />

      {TIERS.map((tier) => (
        <PackageSection key={tier} tier={tier} products={byTier(tier)} />
      ))}

      <WhichOne />
      <ProcessBand />

      <Section theme="orange">
        <H2>let&apos;s make something worth choosing.</H2>
        <p className="lead mt-6 max-w-[65ch]">
          every package starts with a conversation, not a contract. tell us what you&apos;re building
          and we&apos;ll tell you honestly which of these fits, including &quot;none of them
          yet.&quot;
        </p>
        <div className="mt-10">
          <Button href="/contact">start a project</Button>
        </div>
      </Section>
    </main>
  );
}
