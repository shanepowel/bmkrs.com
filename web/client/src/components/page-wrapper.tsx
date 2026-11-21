'use client';

import { useConsultation } from '@/lib/consultation-context';

interface PageWrapperProps {
  component: React.ComponentType<{ onOpenConsultation: (serviceType?: string) => void }>;
}

export function PageWrapper({ component: Component }: PageWrapperProps) {
  const { openConsultation } = useConsultation();
  return <Component onOpenConsultation={openConsultation} />;
}
