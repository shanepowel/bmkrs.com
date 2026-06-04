export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  description,
  email,
  generalEmail,
  pressEmail,
  companyName,
  companyNumber,
  registeredAddress,
  londonAddress,
  copyright,
  socialLinks,
  socials[]{ platform, url },
  defaultSeo{ metaTitle, metaDescription, "ogImage": ogImage.asset->url },
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
  heroEyebrow,
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

const caseStudyFields = `
  "slug": slug.current,
  title,
  client,
  positioning,
  sector,
  year,
  services,
  "heroImage": heroImage{ "url": asset->url, "alt": alt },
  "gallery": gallery[]{ "url": asset->url, "alt": alt },
  brief,
  challenge,
  whatWeDid,
  resultsNarrative,
  results[]{ value, label },
  "testimonial": testimonial->{ quote, name, role, company },
  featured,
  order,
  seo{
    metaTitle,
    metaDescription,
    "ogImage": ogImage.asset->url
  }
`;

const legacyProjectFields = `
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

export const caseStudiesQuery = `*[_type == "caseStudy"] | order(order asc){${caseStudyFields}}`;

export const caseStudyBySlugQuery = `*[_type == "caseStudy" && slug.current == $slug][0]{${caseStudyFields}}`;

export const caseStudySlugsQuery = `*[_type == "caseStudy" && defined(slug.current)].slug.current`;

export const projectsQuery = `*[_type == "project"] | order(order asc){${legacyProjectFields}}`;

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{${legacyProjectFields}}`;

export const homeTestimonialsQuery = `*[_type == "testimonial" && defined(quote)] | order(_createdAt asc)[0...3]{
  quote, name, role, company
}`;

export const teamQuery = `*[_type == "teamMember"] | order(order asc){
  name, discipline, "photo": photo{ "url": asset->url, "alt": alt }
}`;

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
