'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';
import { CONSENT_CHANGED, hasAnalyticsConsent, markAnalyticsLoaded } from '@/lib/consent';

const GTM_ID = 'GTM-MC5S82CJ';
const MAILCHIMP_SCRIPT =
  'https://chimpstatic.com/mcjs-connected/js/users/0093b5b911c3fa3403a042a58/12fa33d6538a7ef133f2c2210.js';

export function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const onConsentChange = () => {
      const on = hasAnalyticsConsent();
      if (on) markAnalyticsLoaded();
      setEnabled(on);
    };

    onConsentChange();
    window.addEventListener('storage', onConsentChange);
    window.addEventListener(CONSENT_CHANGED, onConsentChange);
    return () => {
      window.removeEventListener('storage', onConsentChange);
      window.removeEventListener(CONSENT_CHANGED, onConsentChange);
    };
  }, []);

  if (!enabled) {
    return null;
  }

  return (
    <>
      <Script id="gtm-loader" strategy="afterInteractive">{`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}</Script>
      <Script id="mailchimp-connected-sites" src={MAILCHIMP_SCRIPT} strategy="afterInteractive" />
    </>
  );
}
