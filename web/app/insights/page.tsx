import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Insights | Notes from the bmkrs studio`,
  description: `Practical notes on brands, products and AI from the bmkrs studio, including AI tokenomics and governed AI-assisted delivery.`,
  openGraph: {
    title: `Insights | Notes from the bmkrs studio`,
    description: `Practical notes on brands, products and AI from the bmkrs studio, including AI tokenomics and governed AI-assisted delivery.`,
    url: 'https://bmkrs.com/insights',
    siteName: 'bmkrs',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `Insights | Notes from the bmkrs studio`,
    description: `Practical notes on brands, products and AI from the bmkrs studio, including AI tokenomics and governed AI-assisted delivery.`,
  },
  alternates: {
    canonical: 'https://bmkrs.com/insights',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Insights from '../../client/src/pages/insights';

export default function Page() {
  return <PageWrapper component={Insights} />;
}
