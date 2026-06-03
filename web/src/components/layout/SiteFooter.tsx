import Link from "next/link";
import type { SiteSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  return (
    <footer className="bg-ink px-[var(--pad)] pb-10 pt-[clamp(70px,9vw,120px)] text-bg">
      <div className="wrap">
        <div className="mb-[70px] flex flex-wrap justify-between gap-12">
          <p className="display text-[clamp(46px,9vw,134px)] font-bold leading-[0.9] tracking-[-0.04em]">
            we are the <br />
            <span className="text-accent">brandmakers.</span>
          </p>
          <div className="flex flex-wrap gap-16">
            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-accent">explore</h4>
              {settings.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="mb-2.5 block text-[15px] opacity-80 transition hover:text-accent hover:opacity-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-accent">connect</h4>
              {settings.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2.5 block text-[15px] opacity-80 transition hover:text-accent hover:opacity-100"
                >
                  {link.platform.toLowerCase()}
                </a>
              ))}
            </div>
            <div>
              <h4 className="mb-4 text-[13px] font-semibold text-accent">studio</h4>
              <a
                href={`mailto:${settings.email}`}
                className="nocase mb-2.5 block text-[15px] opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {settings.email}
              </a>
              <Link
                href="/contact"
                className="mb-2.5 block text-[15px] opacity-80 transition hover:text-accent hover:opacity-100"
              >
                start a project
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 border-t border-bg/20 pt-7 text-[13px] text-bg/60">
          <span>{settings.copyright}</span>
          <span className="nocase">privacy policy · terms of use</span>
        </div>
      </div>
    </footer>
  );
}
