import type { Metadata } from "next";
import { ProcessBand } from "@/components/bmkrs/ProcessBand";
import { Reveal } from "@/components/bmkrs/Reveal";
import { Body, Button, H1, H2, Kicker, Section } from "@bmkrs/ui";
import { LadderIntro } from "@/components/services/LadderIntro";
import { LegacyHashRedirect } from "@/components/services/LegacyHashRedirect";
import { MarketingBanner } from "@/components/bmkrs/MarketingBanner";
import { PackageSection } from "@/components/services/PackageSection";
import { WhichOne } from "@/components/services/WhichOne";
import { servicesFaq } from "@/lib/content/expansion-v2";
import { brandMessaging } from "@/lib/content/messaging";
import { getProducts } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbSchema, faqPageSchema, offerCatalogSchema } from "@/lib/structured-data";
import { marketingImages } from "@/lib/marketing-assets";
import type { ProductTier } from "@/lib/types";

export const metadata: Metadata = pageMetadata(
  "services | bmkrs.",
  "strategy, design and technology to move ambitious ideas forward. explore ways to start, build and grow with bmkrs.",
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
            {brandMessaging.servicesHero}
          </H1>
        </Reveal>
        <Reveal delay={2}>
          <Body theme="ink" lead className="mt-8">
            {brandMessaging.servicesLead}
          </Body>
        </Reveal>
      </Section>

      <MarketingBanner
        src={marketingImages.disciplineIcons}
        alt="digital product, ai implementation, governance and handover"
        aspect="4/3"
      />

      <LadderIntro />

      {TIERS.map((tier) => (
        <PackageSection key={tier} tier={tier} products={byTier(tier)} />
      ))}

      <WhichOne />
      <ProcessBand />

      <Section theme="orange">
        <H2 theme="orange">{brandMessaging.closeTitle}</H2>
        <Body theme="orange" lead className="mt-6">
          every package starts with a conversation, not a contract. tell us what you are building
          and we will tell you honestly which of these fits, including &quot;none of them yet.&quot;
        </Body>
        <div className="mt-10">
          <Button href="/contact">{brandMessaging.ctaPrimary}</Button>
        </div>
      </Section>
    </main>
  );
}
