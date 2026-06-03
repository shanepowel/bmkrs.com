import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteSettings } from "@/lib/content";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const settings = await getSiteSettings();
  return {
    title: {
      default: "BMKRS — We are the Brandmakers.",
      template: "%s | BMKRS",
    },
    description: settings.description,
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://bmkrs.com"),
    openGraph: {
      title: "BMKRS — We are the Brandmakers.",
      description: settings.description,
      siteName: settings.siteName,
      images: [
        {
          url: "/images/bmkrs_white_instapic.png",
          alt: "BMKRS — design and growth studio",
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
      <body className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
