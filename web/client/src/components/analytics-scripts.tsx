'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GTM_ID = 'GTM-MC5S82CJ';
const MAILCHIMP_SCRIPT =
  'https://chimpstatic.com/mcjs-connected/js/users/0093b5b911c3fa3403a042a58/12fa33d6538a7ef133f2c2210.js';

function hasAnalyticsConsent(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem('analytics-cookies') === 'accepted';
}

export function AnalyticsScripts() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const onConsentChange = () => {
      setEnabled(hasAnalyticsConsent());
    };

    onConsentChange();
    window.addEventListener('storage', onConsentChange);
    window.addEventListener('bmkrs:cookie-consent', onConsentChange);
    return () => {
      window.removeEventListener('storage', onConsentChange);
      window.removeEventListener('bmkrs:cookie-consent', onConsentChange);
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

export function GoogleTagManagerNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
