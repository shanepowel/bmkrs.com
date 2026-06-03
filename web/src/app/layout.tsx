import type { Metadata } from "next";
import { Figtree, Schibsted_Grotesk } from "next/font/google";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

const display = Schibsted_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const body = Figtree({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      default: "bmkrs. we are b makers.",
      template: "%s | bmkrs.",
    },
    description: settings.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com"),
    openGraph: {
      title: "bmkrs. we are b makers.",
      description: settings.description,
      siteName: settings.siteName,
      images: [
        {
          url: "/images/bmkrs_white_instapic.png",
          alt: "bmkrs. we are b makers.",
        },
      ],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className={`${display.variable} ${body.variable} min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
