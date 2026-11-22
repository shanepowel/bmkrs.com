import type { Metadata } from 'next';
import { getInsights } from '../../lib/content/insights';

export const metadata: Metadata = {
  title: `Insights on AI tokenomics and practical AI | bmkrs`,
  description: `Guides on AI tokenomics, AI costs and FinOps for AI, plus practical notes on AI delivery, products and brands from the bmkrs studio.`,
  openGraph: {
    title: `Insights on AI tokenomics and practical AI | bmkrs`,
    description: `Guides on AI tokenomics, AI costs and FinOps for AI, plus practical notes on AI delivery, products and brands from the bmkrs studio.`,
    url: 'https://www.bmkrs.com/insights',
    siteName: 'bmkrs',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    title: `Insights on AI tokenomics and practical AI | bmkrs`,
    description: `Guides on AI tokenomics, AI costs and FinOps for AI, plus practical notes on AI delivery, products and brands from the bmkrs studio.`,
  },
  alternates: {
    canonical: 'https://www.bmkrs.com/insights',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Insights from '../../client/src/pages/insights';

export const revalidate = 300;

export default async function Page() {
  const articles = JSON.parse(JSON.stringify(await getInsights()));
  return <PageWrapper component={Insights} props={{ initialArticles: articles }} />;
}
