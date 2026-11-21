export function createBreadcrumbSchema(
  items: Array<{ name: string; url: string }>
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}


export function createArticleSchema({
  headline,
  description,
  url,
  datePublished,
  dateModified,
  authorName,
  image,
  keywords,
  wordCount,
}: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
  image?: string;
  keywords: string[];
  wordCount?: number;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    url,
    datePublished,
    dateModified,
    author: {
      '@type': 'Person',
      name: authorName,
      url: 'https://bmkrs.com/about',
    },
    publisher: {
      '@id': 'https://bmkrs.com/#organisation',
      name: 'bmkrs',
      logo: {
        '@type': 'ImageObject',
        url: 'https://bmkrs.com/favicon.png',
      },
    },
    image: image || 'https://bmkrs.com/og-image.png',
    keywords: keywords.join(', '),
    ...(wordCount && { wordCount }),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    inLanguage: 'en-GB',
  };
}


export function createFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}


export const insightsHubSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://bmkrs.com/insights',
  'name': 'bmkrs Insights: notes from the studio',
  'description': 'Practical notes on brands, digital products and AI from the bmkrs studio, including AI tokenomics and governed AI-assisted delivery.',
  'url': 'https://bmkrs.com/insights',
  'publisher': {
    '@type': 'Organization',
    'name': 'bmkrs',
    'url': 'https://bmkrs.com',
    '@id': 'https://bmkrs.com/#organisation',
  },
  'breadcrumb': {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://bmkrs.com/' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Insights', 'item': 'https://bmkrs.com/insights' },
    ],
  },
};


