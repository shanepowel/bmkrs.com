// GROQ queries and the raw shapes Sanity returns for each document type.

const INSIGHT_FIELDS = `
  _id,
  title,
  "slug": slug.current,
  category,
  description,
  "image": image.asset->url,
  imageUrl,
  date,
  readTime,
  author,
  keyTakeaways,
  body,
  sources,
  _updatedAt,
  _createdAt
`;

export const INSIGHTS_QUERY = `*[_type == "insight"] | order(date desc){${INSIGHT_FIELDS}}`;

export const INSIGHT_BY_SLUG_QUERY = `*[_type == "insight" && slug.current == $slug][0]{${INSIGHT_FIELDS}}`;

export const BMK_PAGE_QUERY = `*[_type == "bmkPage" && pageId == $id][0]{
  pageId, path, metaTitle, metaDescription, hero, blocks, cta
}`;

export interface SanityInsight {
  _id: string;
  title: string;
  slug: string | null;
  category?: string;
  description?: string;
  image?: string;
  imageUrl?: string;
  date?: string;
  readTime?: string;
  author?: string;
  keyTakeaways?: string[];
  body?: string;
  sources?: string;
  _updatedAt?: string;
  _createdAt?: string;
}
