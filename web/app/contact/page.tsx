import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: `Contact bmkrs | Let's build something`,
  description: `Tell bmkrs what you want to make: a brand, a product, an AI build or an AI bill that needs taming. Straight answer and a rough price on the first call.`,
  openGraph: {
    title: `Contact bmkrs | Let's build something`,
    description: `Tell bmkrs what you want to make: a brand, a product, an AI build or an AI bill that needs taming. Straight answer and a rough price on the first call.`,
    url: 'https://www.bmkrs.com/contact',
    siteName: 'bmkrs',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    title: `Contact bmkrs | Let's build something`,
    description: `Tell bmkrs what you want to make: a brand, a product, an AI build or an AI bill that needs taming. Straight answer and a rough price on the first call.`,
  },
  alternates: {
    canonical: 'https://www.bmkrs.com/contact',
  },
};

import { PageWrapper } from '../../client/src/components/page-wrapper';
import Contact from '../../client/src/pages/contact';

export default function Page() {
  return <PageWrapper component={Contact} />;
}
