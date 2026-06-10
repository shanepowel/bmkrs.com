import Link from "next/link";
import { Wordmark } from "@/components/bmkrs/Wordmark";
import type { SiteSettings } from "@/lib/types";

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const general = settings.generalEmail ?? settings.email ?? "hello@bmkrs.com";
  const press = settings.pressEmail ?? "press@bmkrs.com";
  const network = settings.networkEmail;
  const year = new Date().getFullYear();

  const reg = settings.companyNumber
    ? `${settings.companyName ?? "b makers ltd"} · company no. ${settings.companyNumber} · registered in england and wales.`
    : "b makers ltd · registered in england and wales.";

  return (
    <footer className="site-footer">
      <div className="site-footer-top">
        <div className="footer-brand">
          <Wordmark className="wordmark" />
          <p className="muted">a brand company run by builders.</p>
          <p className="footer-thesis">the better-told brand wins. we make sure it&apos;s yours.</p>
        </div>

        <div className="footer-cols">
          <div>
            <span className="eyebrow">work with us</span>
            <ul role="list">
              <li>
                <Link href="/services">services</Link>
              </li>
              <li>
                <Link href="/motion">motion</Link>
              </li>
              <li>
                <Link href="/work">work</Link>
              </li>
              <li>
                <Link href="/journal">journal</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">studio</span>
            <ul role="list">
              <li>
                <Link href="/about">about</Link>
              </li>
              <li>
                <Link href="/contact">contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <span className="eyebrow">say hello</span>
            <ul role="list" className="footer-emails">
              <li>
                <a className="mono" href={`mailto:${general}`}>
                  {general}
                </a>
              </li>
              <li>
                <a className="mono" href={`mailto:${press}`}>
                  {press}
                </a>{" "}
                <span className="muted">(press)</span>
              </li>
              {network ? (
                <li>
                  <a className="mono" href={`mailto:${network}`}>
                    {network}
                  </a>{" "}
                  <span className="muted">(network)</span>
                </li>
              ) : null}
            </ul>
            {settings.socialLinks.length ? (
              <ul role="list" className="footer-socials">
                {settings.socialLinks.map((s) => (
                  <li key={s.platform}>
                    <a href={s.url} target="_blank" rel="noopener noreferrer">
                      {s.platform}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>

      <div className="site-footer-bottom">
        <p className="muted">london, and wherever you are.</p>
        <p className="mono muted footer-reg text-meta">{reg}</p>
        <p className="muted">
          © {year} {settings.companyName ?? "b makers ltd"}. they say no one reads the footer. hi.
        </p>
      </div>
    </footer>
  );
}
