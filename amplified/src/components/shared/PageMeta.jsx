import { Helmet } from "react-helmet-async"

const SITE_URL = "https://amplified.co.uk"
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.png`

export function PageMeta({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  path = "",
  noIndex = false,
}) {
  const canonical = path ? `${SITE_URL}${path}` : SITE_URL
  const fullOgImage = ogImage.startsWith("http") ? ogImage : `${SITE_URL}${ogImage}`
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noIndex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={ogTitle ?? title} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
    </Helmet>
  )
}
