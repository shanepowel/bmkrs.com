import type { Metadata } from 'next';
import { HomePageClient } from '../client/src/components/home-page-client';
import { brand } from '../client/src/lib/brand';

export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  openGraph: {
    title: brand.metaTitle,
    description: brand.metaDescription,
    url: `${brand.url}/`,
    siteName: brand.name,
    type: 'website',
    locale: 'en_GB',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'bmkrs' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
    title: brand.metaTitle,
    description: brand.metaDescription,
  },
  alternates: {
    canonical: `${brand.url}/`,
  },
};

export default function Page() {
  return <HomePageClient />;
}
