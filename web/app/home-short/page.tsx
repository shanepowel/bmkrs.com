import type { Metadata } from 'next';
import { HomeShortPageClient } from '../../client/src/components/home-short-page-client';
import { brand } from '../../client/src/lib/brand';

/** Test version of the home page. Canonical points at the real home page and it is kept out of search. */
export const metadata: Metadata = {
  title: brand.metaTitle,
  description: brand.metaDescription,
  robots: { index: false, follow: true },
  alternates: { canonical: `${brand.url}/` },
};

export default function Page() {
  return <HomeShortPageClient />;
}
