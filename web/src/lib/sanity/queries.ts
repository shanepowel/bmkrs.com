export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  siteName,
  tagline,
  description,
  email,
  generalEmail,
  pressEmail,
  networkEmail,
  companyName,
  companyNumber,
  registeredAddress,
  londonAddress,
  copyright,
  socialLinks,
  socials[]{ platform, url },
  defaultSeo{ metaTitle, metaDescription, "ogImage": ogImage.asset->url },
  "heroReelUrl": coalesce(heroReel.asset->url, heroReelUrl),
  "heroPoster": heroPoster.asset->url,
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
  thinking,
  whatWeDid,
  resultsNarrative,
  results[]{ value, label },
  "testimonial": testimonial->{ quote, name, role, company },
  featured,
  projectType,
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
  name, discipline, bio, "photo": photo{ "url": asset->url, "alt": alt }
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

export const disciplinesQuery = `*[_type == "discipline"] | order(order asc){
  name, proposition, body, deliverables,
  "powers": relatedProducts[]->{ name, "slug": slug.current, tier }
}`;

export const allProductsQuery = `*[_type == "product"] | order(order asc){
  name, "slug": slug.current, tier, tagline, forWho, included, shape, outcome,
  cadence, commitment, monthlyDeliverables, priceFrom, priceNote,
  "proof": relatedCaseStudies[]->{ title, "slug": slug.current }
}`;

export const motionTiersQuery = `*[_type == "product" && tier == "grow"] | order(order asc){
  name, "slug": slug.current, tagline, forWho, cadence, commitment,
  monthlyDeliverables, outcome, priceFrom, priceNote
}`;

export const aboutPageQuery = `*[_type == "aboutPage"][0]{
  headline, intro, story, whoWeAre, whatWeLove, ethos,
  beliefs[]{ title, body }, longGame, inOwnWords
}`;

export const featuredCaseStudiesQuery = `*[_type == "caseStudy" && featured == true] | order(order asc){
  title, "slug": slug.current, positioning, sector, services,
  "heroImage": heroImage{ "url": asset->url, "alt": alt }
}`;

export const journalIndexQuery = `{
  "featured": *[_type == "post" && featured == true] | order(publishedAt desc)[0]{
    title, "slug": slug.current, category, excerpt, readingTime, publishedAt,
    "cover": coverImage{ "url": asset->url, alt }
  },
  "posts": *[_type == "post" && featured != true] | order(publishedAt desc){
    title, "slug": slug.current, category, excerpt, readingTime, publishedAt,
    "cover": coverImage{ "url": asset->url, alt }
  }
}`;

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0]{
  title, "slug": slug.current, category, excerpt, readingTime, publishedAt,
  "cover": coverImage{ "url": asset->url, alt },
  "author": author->{ name, discipline },
  body,
  "relatedProduct": relatedProduct->{ name, "slug": slug.current, tagline },
  "relatedCaseStudy": relatedCaseStudy->{ title, "slug": slug.current },
  seo{ metaTitle, metaDescription, "ogImage": ogImage.asset->url }
}`;

export const postSlugsQuery = `*[_type == "post" && defined(slug.current)].slug.current`;
