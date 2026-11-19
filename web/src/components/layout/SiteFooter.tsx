import Image from "next/image";
import Link from "next/link";
import { FooterEmailCapture } from "@/components/bmkrs/FooterEmailCapture";
import { companyLine } from "@/lib/content/legal";
import { brandMessaging } from "@/lib/content/messaging";
import type { SiteSettings } from "@/lib/types";

const FOOTER_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/motion", label: "Motion" },
  { href: "/about", label: "About" },
  { href: "/journal", label: "Journal" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
] as const;
const COPYRIGHT_YEAR = new Date().getFullYear();

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const email = settings.generalEmail ?? settings.email ?? "hello@bmkrs.com";

  return (
    <footer className="hybrid-footer" data-surface="ink">
      <div className="hybrid-footer__inner">
        <div className="hybrid-footer__main">
          <div className="hybrid-footer__brand">
            <Link href="/" aria-label="bmkrs home" className="hybrid-footer__logo">
              <Image src="/brand/bmkrs-primary-dark.svg" alt="bmkrs." width={126} height={40} />
            </Link>
            <p>Independent by nature.<br />Connected by design.</p>
          </div>

          <nav className="hybrid-footer__nav" aria-label="Explore">
            <h2>Explore</h2>
            <ul>{FOOTER_LINKS.map((item) => <li key={item.href}><Link href={item.href}>{item.label}</Link></li>)}</ul>
          </nav>

          <div className="hybrid-footer__contact">
            <h2>Get in touch</h2>
            <a href={`mailto:${email}`}>{email}</a>
            <p>London, and wherever you are</p>
            {settings.socialLinks.length > 0 && (
              <ul className="hybrid-footer__socials" aria-label="Social links">
                {settings.socialLinks.map((social) => (
                  <li key={social.url}><a href={social.url} target="_blank" rel="noreferrer">{social.platform}<span aria-hidden="true"> +</span></a></li>
                ))}
              </ul>
            )}
          </div>

          <div className="hybrid-footer__newsletter">
            <FooterEmailCapture email={email} />
          </div>
        </div>

        <div className="hybrid-footer__legal">
          <p className="hybrid-footer__registration">{companyLine(settings.companyNumber, settings.registeredAddress)}</p>
          <div className="hybrid-footer__legal-bottom">
            <span>© {COPYRIGHT_YEAR} <span className="nocase">{settings.companyName ?? "LRC Labs Ltd"}</span></span>
            <nav aria-label="Legal">
              <Link href="/legal/privacy">Privacy</Link>
              <Link href="/legal/cookies">Cookies</Link>
              <Link href="/legal/terms">Terms</Link>
            </nav>
            <Link className="hybrid-footer__cta" href="/contact">{brandMessaging.ctaPrimary} <span aria-hidden="true">+</span></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
