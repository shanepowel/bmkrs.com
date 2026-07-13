import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-4GXGNXYMVL";

/** loads gtag in production (skipped in local and vercel preview) */
export function GoogleAnalytics() {
  if (!GA_ID) return null;
  if (process.env.NODE_ENV !== "production") return null;
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === "preview") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="bmkrs-ga-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
