export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  description,
  email,
  copyright,
  socialLinks,
  "navigation": navigation[]->{
    label,
    href,
    highlight,
    order
  } | order(order asc)
}`;

export const pageBySlugQuery = `*[_type == "page" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  metaDescription,
  heroTitle,
  heroSubtitle,
  heroCtaLabel,
  heroCtaHref,
  heroVideoUrl,
  sections
}`;

export const servicesQuery = `*[_type == "service"] | order(order asc){
  "slug": slug.current,
  title,
  summary,
  body,
  imagePath,
  bullets,
  order
}`;

const projectFields = `
  "slug": slug.current,
  title,
  category,
  excerpt,
  tagline,
  sector,
  year,
  client,
  context,
  challenge,
  whatWeDid,
  outcome,
  outcomeMetrics,
  testimonial,
  serviceTags,
  featured,
  background,
  problem,
  brief,
  result,
  thumbnailPath,
  media,
  order
`;

export const projectsQuery = `*[_type == "project"] | order(order asc){${projectFields}}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{${projectFields}}`;

export const journalArticlesQuery = `*[_type == "journalArticle"] | order(publishedAt desc){
  "slug": slug.current,
  title,
  seoTitle,
  metaDescription,
  h1,
  targetKeyword,
  publishedAt,
  body,
  relatedLinks
}`;

export const journalArticleBySlugQuery = `*[_type == "journalArticle" && slug.current == $slug][0]{
  "slug": slug.current,
  title,
  seoTitle,
  metaDescription,
  h1,
  targetKeyword,
  publishedAt,
  body,
  relatedLinks
}`;

export const homePillarsQuery = `*[_type == "homePillar"] | order(order asc){
  title,
  description,
  order
}`;
