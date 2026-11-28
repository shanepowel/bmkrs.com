import type { Metadata } from 'next';
import NotFound from '../client/src/pages/not-found';

export const metadata: Metadata = {
  title: 'Page not found | bmkrs',
  description: "This page doesn't exist or has moved. Find what you need from the bmkrs home page.",
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}
