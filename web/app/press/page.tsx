import type { Metadata } from 'next';
import { PressPageClient } from '../../client/src/components/press-page-client';

export const metadata: Metadata = {
  title: 'Press and brand kit | bmkrs',
  description:
    'bmkrs logos, colours, boilerplate and key facts for press and partners. Download the full brand kit.',
  alternates: { canonical: 'https://www.bmkrs.com/press' },
  openGraph: {
    title: 'Press and brand kit | bmkrs',
    description: 'bmkrs logos, colours, boilerplate and key facts for press and partners.',
    url: 'https://www.bmkrs.com/press',
    siteName: 'bmkrs',
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
};

export default function Page() {
  return <PressPageClient />;
}
