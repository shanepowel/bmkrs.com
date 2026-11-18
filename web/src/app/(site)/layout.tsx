import { GoogleAnalytics } from "@/components/bmkrs/GoogleAnalytics";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { getSiteSettings } from "@/lib/content";
import { resolveMemberLoginUrl } from "@/lib/urls";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await getSiteSettings();

  return (
    <>
      <SkipLink />
      <SiteHeader
        navigation={settings.navigation}
        loginUrl={resolveMemberLoginUrl(settings)}
        contactEmail={settings.generalEmail ?? settings.email}
      />
      <div id="main" tabIndex={-1} className="outline-none">
        {children}
      </div>
      <SiteFooter settings={settings} />
      <GoogleAnalytics />
    </>
  );
}
