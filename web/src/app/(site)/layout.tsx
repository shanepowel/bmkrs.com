import { CookieBanner } from "@/components/bmkrs/CookieBanner";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { getSiteSettings } from "@/lib/content";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <>
      <SkipLink />
      <SiteHeader navigation={settings.navigation} />
      <div id="main" tabIndex={-1} className="outline-none">
        {children}
      </div>
      <SiteFooter settings={settings} />
      <CookieBanner />
    </>
  );
}
