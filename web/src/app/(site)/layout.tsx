import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SkipLink } from "@/components/layout/SkipLink";
import { getProjects, getSiteSettings } from "@/lib/content";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, projects] = await Promise.all([getSiteSettings(), getProjects()]);

  return (
    <>
      <SkipLink />
      <SiteHeader navigation={settings.navigation} />
      <main id="main-content">{children}</main>
      <SiteFooter settings={settings} caseStudies={projects.slice(0, 3)} />
    </>
  );
}
