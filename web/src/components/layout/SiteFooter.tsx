import Link from "next/link";
import { BMakersLine } from "@/components/bmkrs/BMakersLine";
import type { Project, SiteSettings } from "@/lib/types";

const footerCompany = [
  { label: "home", href: "/" },
  { label: "journal", href: "/journal" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

const footerServices = [
  { label: "brand + identity", href: "/services#branding" },
  { label: "voice + messaging", href: "/services#voice" },
  { label: "pr + communications", href: "/services#pr" },
  { label: "product, web + growth", href: "/services#product" },
  { label: "launches + motion", href: "/motion" },
];

export function SiteFooter({
  settings,
  caseStudies = [],
}: {
  settings: SiteSettings;
  caseStudies?: Project[];
}) {
  const offices = settings.offices ?? [];
  const generalEmail = settings.generalEmail || settings.email || "hello@bmkrs.com";
  const pressEmail = settings.pressEmail || "press@bmkrs.com";
  const networkEmail = settings.networkEmail ?? "network@bmkrs.com";
  const companyLine = [settings.companyName, settings.companyNumber && `co. ${settings.companyNumber}`]
    .filter(Boolean)
    .join(" · ");

  return (
    <footer className="bg-ink px-[var(--pad)] pb-[max(2.5rem,var(--page-bottom))] pt-[clamp(70px,9vw,120px)] text-bg">
      <div className="wrap">
        <p className="mb-5 text-[clamp(44px,9vw,128px)] leading-[0.9]">
          <BMakersLine multiline className="text-[clamp(44px,9vw,128px)]" />
        </p>
        <p className="mb-4 font-display text-[clamp(18px,2vw,27px)] font-semibold text-bg">
          your team, not just your agency.
        </p>
        <p className="mb-[72px] max-w-[34ch] text-base text-bg/55">
          they say no one reads the footer. you made it this far, so let&apos;s{" "}
          <Link
            href="/contact"
            className="text-bg underline underline-offset-[3px] hover:text-accent"
          >
            make something
          </Link>
          .
        </p>

        <div className="mb-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="eyebrow mb-4 text-bg/50">company</h4>
            {footerCompany.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="eyebrow mb-4 text-bg/50">work</h4>
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                case: {project.title}
              </Link>
            ))}
            <Link
              href="/work"
              className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
            >
              more work
            </Link>
          </div>
          <div>
            <h4 className="eyebrow mb-4 text-bg/50">services</h4>
            {footerServices.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h4 className="eyebrow mb-4 text-bg/50">contact</h4>
            <div className="space-y-4">
              <div>
                <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-bg/45">general</p>
                <a
                  href={`mailto:${generalEmail}`}
                  className="nocase font-display text-[clamp(16px,1.5vw,21px)] font-semibold hover:text-accent"
                >
                  {generalEmail}
                </a>
              </div>
              <div>
                <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-bg/45">press</p>
                <a
                  href={`mailto:${pressEmail}`}
                  className="nocase font-display text-[clamp(16px,1.5vw,21px)] font-semibold hover:text-accent"
                >
                  {pressEmail}
                </a>
              </div>
            </div>
            <p className="mt-6 text-sm text-bg/50">
              work and other enquiries via the{" "}
              <Link href="/contact" className="underline hover:text-accent">
                contact form
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="mb-10 flex flex-wrap items-end gap-14">
          {offices.map((office) => (
            <div key={office.name}>
              <h5 className="font-display text-[21px] font-semibold">{office.name}</h5>
            </div>
          ))}
          {settings.registeredAddress && (
            <p className="max-w-[32ch] text-sm text-bg/55">{settings.registeredAddress}</p>
          )}
          <div className="ml-auto flex flex-wrap gap-5">
            {settings.socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {link.platform} ›
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-4 border-t border-bg/20 pt-7 text-[13px] text-bg/55">
          <span>
            {settings.copyright}
            {companyLine ? ` · ${companyLine}` : ""}
          </span>
          <span className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${networkEmail}`}
              className="nocase text-sm opacity-70 hover:text-accent"
            >
              freelancer network
            </a>
            <span>·</span>
            <span className="nocase">privacy notice</span>
            <span>·</span>
            <span className="nocase">terms of use</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
