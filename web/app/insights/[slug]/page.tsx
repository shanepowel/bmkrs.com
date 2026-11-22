import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PageWrapper } from '../../../client/src/components/page-wrapper';
import ArticleDetail from '../../../client/src/pages/article-detail';
import { getInsightBySlug } from '../../../lib/content/insights';

export const revalidate = 300;

type Props = { params: Promise<{ slug: string }> };

/** Plain JSON so dates and other values cross the server/client boundary cleanly. */
async function loadArticle(slug: string) {
  const item = await getInsightBySlug(slug);
  return item ? JSON.parse(JSON.stringify(item)) : null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = await loadArticle(slug);
  if (!article) return { title: 'Article not found | bmkrs', robots: { index: false } };
  const url = `https://www.bmkrs.com/insights/${slug}`;
  const description: string =
    article.content?.description || `${article.title}: notes from the bmkrs studio on AI, products and brands.`;
  const image = article.content?.image || '/og-image.png';
  return {
    title: `${article.title} | bmkrs`,
    description,
    openGraph: {
      title: article.title,
      description,
      url,
      siteName: 'bmkrs',
      images: [{ url: image }],
      type: 'article',
      publishedTime: article.content?.date,
    },
    twitter: { card: 'summary_large_image', title: article.title, description, images: [image] },
    alternates: { canonical: url },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const article = await loadArticle(slug);
  if (!article) notFound();
  const url = `https://www.bmkrs.com/insights/${slug}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BlogPosting',
        '@id': `${url}#article`,
        headline: article.title,
        description: article.content?.description,
        datePublished: article.content?.date,
        dateModified: article.lastModified ?? article.content?.date,
        author: { '@type': 'Organization', name: 'bmkrs', url: 'https://www.bmkrs.com' },
        publisher: { '@id': 'https://www.bmkrs.com/#organisation' },
        image: article.content?.image || 'https://www.bmkrs.com/og-image.png',
        mainEntityOfPage: url,
        inLanguage: 'en-GB',
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.bmkrs.com/' },
          { '@type': 'ListItem', position: 2, name: 'Insights', item: 'https://www.bmkrs.com/insights' },
          { '@type': 'ListItem', position: 3, name: article.title, item: url },
        ],
      },
    ],
  };
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageWrapper component={ArticleDetail} props={{ initialArticle: article }} />
    </>
  );
}
