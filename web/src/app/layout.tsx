import type { Metadata, Viewport } from "next";
import { cabinet, fragment } from "@/app/fonts";
import { getSiteSettings } from "@/lib/content";
import { DEFAULT_OG_IMAGE, OG_SIZE, SITE_URL } from "@/lib/og-image";
import { organizationSchema } from "@/lib/structured-data";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#181613",
};

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  const isPreview = process.env.VERCEL_ENV === "preview";
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: "bmkrs. a brand company run by builders.",
      template: "%s",
    },
    description: settings.description,
    robots: isPreview ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "en_GB",
      url: SITE_URL,
      title: "bmkrs. a brand company run by builders.",
      description: settings.description,
      siteName: settings.siteName,
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: OG_SIZE.width,
          height: OG_SIZE.height,
          alt: "bmkrs. a brand company run by builders.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "bmkrs. a brand company run by builders.",
      description: settings.description,
      images: [DEFAULT_OG_IMAGE],
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
  const jsonLd = organizationSchema();

  return (
    <html lang="en-GB" className={`${cabinet.variable} ${fragment.variable}`}>
      <body className="min-h-screen font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
