'use client';

import { useConsultation } from '@/lib/consultation-context';

type Base = { onOpenConsultation: (serviceType?: string) => void };

interface PageWrapperProps<P extends Record<string, unknown>> {
  component: React.ComponentType<Base & P>;
  /** Extra serialisable props, for example data fetched on the server so it is in the first HTML. */
  props?: P;
}

export function PageWrapper<P extends Record<string, unknown> = Record<string, never>>({
  component: Component,
  props,
}: PageWrapperProps<P>) {
  const { openConsultation } = useConsultation();
  return <Component {...(props as P)} onOpenConsultation={openConsultation} />;
}
