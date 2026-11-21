'use client';

import { useEffect } from 'react';

interface StructuredDataProps {
  data: Record<string, unknown>;
  id?: string;
}

export function StructuredData({ data, id }: StructuredDataProps) {
  const scriptId = id || `ld-${Object.values(data).join('').slice(0, 16).replace(/\W/g, '')}`;

  useEffect(() => {
    const existing = document.getElementById(scriptId);
    if (existing) existing.remove();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = scriptId;
    document.head.appendChild(script);
    return () => { document.getElementById(scriptId)?.remove(); };
  }, [data, scriptId]);

  return null;
}

interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}

export function ServiceSchema({ name, description, url, serviceType = "ConsultingService" }: ServiceSchemaProps) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": name,
    "description": description,
    "url": url,
    "serviceType": serviceType,
    "provider": { "@id": "https://bmkrs.com/#organization" },
    "areaServed": { "@type": "Country", "name": "United Kingdom" },
    "audience": {
      "@type": "Audience",
      "audienceType": "Founders, growing businesses, marketing teams and CTOs"
    }
  };
  return <StructuredData data={data} id={`service-schema-${name.replace(/\s+/g, '-').toLowerCase()}`} />;
}
