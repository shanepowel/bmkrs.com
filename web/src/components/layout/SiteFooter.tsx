import Link from "next/link";
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
    <footer className="site-footer" data-surface="ink">
      <div className="site-footer__inner">
        <div className="site-footer__grid">
          <div className="site-footer__capture">
            <FooterEmailCapture />
          </div>
          <nav className="site-footer__nav" aria-label="make">
            <span className="site-footer__nav-label">make</span>
            <ul role="list">
              {MAKE_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav className="site-footer__nav" aria-label="studio">
            <span className="site-footer__nav-label">studio</span>
            <ul role="list">
              {STUDIO_LINKS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="site-footer__legal-row">
          <span className="mono site-footer__legal-contact">
            <a href={`mailto:${general}`}>{general}</a>
            <span aria-hidden="true"> · </span>
            london, and wherever you are
          </span>
          <span className="mono site-footer__legal-quip">
            © {year} {settings.companyName ?? "b makers ltd"} · {quip}
          </span>
        </div>

        <div className="site-footer__legal mono">
          <p>{reg}</p>
          <p className="site-footer__legal-links">
            <Link href="/legal/privacy">privacy notice</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/legal/cookies">cookies notice</Link>
            <span aria-hidden="true"> · </span>
            <Link href="/legal/terms">terms of business</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
