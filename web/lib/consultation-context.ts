'use client';

import { createContext, useContext } from 'react';

interface ConsultationContextType {
  openConsultation: (serviceType?: string) => void;
}

export const ConsultationContext = createContext<ConsultationContextType>({
  openConsultation: () => {},
});

export function useConsultation() {
  return useContext(ConsultationContext);
}
