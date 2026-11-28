'use client';

import Home from '@/pages/home';
import { PageWrapper } from './page-wrapper';

type Props = { onOpenConsultation: (serviceType?: string) => void };

function HomeShort(props: Props) {
  return <Home {...props} variant="short" />;
}

/** The trimmed home page, for comparing against the full one. Not linked from the site and not indexed. */
export function HomeShortPageClient() {
  return <PageWrapper component={HomeShort} />;
}
