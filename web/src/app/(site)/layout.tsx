import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { getSiteSettings } from "@/lib/content";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <>
      <SiteHeader navigation={settings.navigation} tagline={settings.tagline} />
      <main className="pt-16">{children}</main>
      <SiteFooter settings={settings} />
    </>
  );
}
