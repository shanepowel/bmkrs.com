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
  },
  twitter: {
    card: 'summary_large_image',
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
