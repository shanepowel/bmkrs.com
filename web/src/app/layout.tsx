import type { Metadata, Viewport } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import { getSiteSettings } from "@/lib/content";
import { organizationJsonLd } from "@/lib/seo";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const body = Hanken_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#181613",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: "bmkrs. a brand company run by builders.",
      template: "%s",
    },
    description: settings.description,
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: siteUrl,
      title: "bmkrs. we are b makers.",
      description: settings.description,
      siteName: settings.siteName,
      images: [
        {
          url: "/images/bmkrs_white_instapic.png",
          width: 512,
          height: 512,
          alt: "bmkrs. we are b makers.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "bmkrs. we are b makers.",
      description: settings.description,
      images: ["/images/bmkrs_white_instapic.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon.png", type: "image/png", sizes: "32x32" },
      ],
      apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
    },
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();
  const jsonLd = organizationJsonLd(settings);

  return (
    <html lang="en-GB" className={`${display.variable} ${body.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
