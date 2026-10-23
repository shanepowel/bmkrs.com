import { BRAND_AVATAR } from "@/lib/brand";
import type { FaqItem } from "@/lib/content/expansion-v2";
import { SITE_URL } from "@/lib/og-image";
import type { JournalPost, Product } from "@/lib/types";

const SITE = SITE_URL;
const ORG_ID = `${SITE}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "bmkrs.",
    legalName: "b makers ltd",
    alternateName: ["bmkrs", "b makers ltd"],
    foundingDate: "2013",
    founder: { "@type": "Person", name: "Shane Powell" },
    url: SITE,
    logo: `${SITE}${BRAND_AVATAR}`,
    description:
      "bmkrs. is a brand company run by builders. brand and identity, voice and messaging, pr and communications, and the product and growth to back it up.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "london",
      addressCountry: "GB",
    },
    sameAs: [
      "https://instagram.com/bmkrs.global",
      "https://www.linkedin.com/company/bmkrs",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@bmkrs.com",
      contactType: "new business",
    },
  };
}

function gbpAmount(price?: string): string | undefined {
  if (!price) return undefined;
  const amount = price.replace(/[^0-9.]/g, "");
  return amount || undefined;
}

function productUrl(product: Product) {
  return product.tier === "grow" ? `${SITE}/motion` : `${SITE}/services#${product.slug}`;
}

export function offerCatalogSchema(products: Product[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "brand, product and communications studio",
    provider: { "@id": ORG_ID },
    areaServed: "GB",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "bmkrs services",
      itemListElement: products.map((product) => {
        const amount = gbpAmount(product.price ?? product.priceFrom);
        const offer: Record<string, unknown> = {
          "@type": "Offer",
          name: product.name,
          url: productUrl(product),
          priceCurrency: "GBP",
        };
        if (amount && product.priceQualifier === "from") {
          offer.priceSpecification = {
            "@type": "PriceSpecification",
            minPrice: amount,
            priceCurrency: "GBP",
          };
        } else if (amount) {
          offer.price = amount;
        }
        return offer;
      }),
    },
  };
}

export function faqPageSchema(faqs: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  updatedAt?: string;
  author: string;
  authorSlug?: string;
  image?: string;
}) {
  const date = post.publishedAt.slice(0, 10);
  const modified = (post.updatedAt ?? post.publishedAt).slice(0, 10);
  const image = post.image?.startsWith("http") ? post.image : post.image ? `${SITE}${post.image}` : `${SITE}${BRAND_AVATAR}`;
  const namedAuthor = post.author && post.author.toLowerCase() !== "bmkrs";

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE}/journal/${post.slug}`,
    mainEntityOfPage: `${SITE}/journal/${post.slug}`,
    datePublished: date,
    dateModified: modified,
    image,
    author: namedAuthor
      ? {
          "@type": "Person",
          name: post.author,
          url: post.authorSlug ? `${SITE}/about#${post.authorSlug}` : SITE,
        }
      : { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
  };
}

export function articleSchemaFromPost(post: JournalPost) {
  return articleSchema({
    title: post.title,
    slug: post.slug,
    excerpt: post.excerpt,
    publishedAt: post.publishedAt,
    author: post.author?.name ?? "bmkrs",
    authorSlug: post.author?.name?.toLowerCase().split(" ")[0],
    image: post.cover?.url,
  });
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE}${c.path}`,
    })),
  };
}

export function personSchema(person: {
  name: string;
  jobTitle: string;
  description: string;
  linkedinUrl?: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.jobTitle,
    description: person.description,
    worksFor: { "@id": ORG_ID },
    ...(person.linkedinUrl ? { sameAs: [person.linkedinUrl] } : {}),
    ...(person.image ? { image: person.image } : {}),
  };
}
