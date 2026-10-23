import Link from "next/link";
import { Footer } from "@bmkrs/ui";
import { FooterEmailCapture } from "@/components/bmkrs/FooterEmailCapture";
import { companyLine } from "@/lib/content/legal";
import type { SiteSettings } from "@/lib/types";

const MAKE_LINKS = [
  { href: "/services", label: "services" },
  { href: "/motion", label: "motion" },
  { href: "/work", label: "work" },
] as const;

const STUDIO_LINKS = [
  { href: "/about", label: "about" },
  { href: "/journal", label: "journal" },
  { href: "/press", label: "press" },
  { href: "/contact", label: "contact" },
] as const;

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const general = settings.generalEmail ?? settings.email ?? "hello@bmkrs.com";
  const year = new Date().getFullYear();
  const quip =
    settings.footerQuip ?? "they say no one reads the footer. you made it this far, so let's make something.";
  const reg = companyLine(settings.companyNumber, settings.registeredAddress);

  return (
    <Footer
      capture={<FooterEmailCapture />}
      columns={[
        { label: "make", links: MAKE_LINKS },
        { label: "studio", links: STUDIO_LINKS },
      ]}
      meta={
        <>
          <span>
            <a href={`mailto:${general}`}>{general}</a>
            <span aria-hidden="true"> · </span>
            london, and wherever you are
          </span>
          <span>
            © {year} {settings.companyName ?? "b makers ltd"} · {quip}
          </span>
        </>
      }
      legal={
        <>
          <p>{reg}</p>
          <p>
            <Link href="/legal/privacy">privacy notice</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/legal/cookies">cookies notice</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/legal/terms">terms of business</Link>
          </p>
        </>
      }
    />
  );
}
