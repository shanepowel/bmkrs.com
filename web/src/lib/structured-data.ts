import type { JournalPost } from "@/lib/types";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";
const ORG_ID = `${SITE}/#organization`;

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: "bmkrs.",
    legalName: "b makers ltd",
    url: SITE,
    logo: `${SITE}/images/bmkrs_white_instapic.png`,
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

export function articleSchema(post: {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author: string;
  authorSlug?: string;
  image?: string;
}) {
  const date = post.publishedAt.slice(0, 10);
  const image = post.image?.startsWith("http") ? post.image : post.image ? `${SITE}${post.image}` : `${SITE}/images/bmkrs_white_instapic.png`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    url: `${SITE}/journal/${post.slug}`,
    mainEntityOfPage: `${SITE}/journal/${post.slug}`,
    datePublished: date,
    dateModified: date,
    image,
    author: {
      "@type": "Person",
      name: post.author,
      url: post.authorSlug ? `${SITE}/about#${post.authorSlug}` : SITE,
    },
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
