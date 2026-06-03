import Link from "next/link";
import type { Project, SiteSettings } from "@/lib/types";

const footerCompany = [
  { label: "home", href: "/" },
  { label: "about", href: "/about" },
  { label: "contact", href: "/contact" },
];

const footerClients = [
  { label: "established brands", href: "/contact" },
  { label: "growing brands", href: "/contact" },
  { label: "new brands", href: "/contact" },
  { label: "all clients", href: "/work" },
];

const footerServices = [
  { label: "brand + identity", href: "/services#branding" },
  { label: "voice + messaging", href: "/services#voice" },
  { label: "pr + communications", href: "/services#pr" },
  { label: "product, web + growth", href: "/services#product" },
  { label: "launches + motion", href: "/motion" },
];

const footerNetwork = [
  { label: "motion plus", href: "/motion" },
  { label: "for companies", href: "/motion" },
];

export function SiteFooter({
  settings,
  caseStudies = [],
}: {
  settings: SiteSettings;
  caseStudies?: Project[];
}) {
  const offices = settings.offices ?? [];
  const departments = settings.departments ?? [];
  const networkEmail = settings.networkEmail ?? "network@bmkrs.com";

  return (
    <footer className="bg-ink px-[var(--pad)] pb-10 pt-[clamp(70px,9vw,120px)] text-bg">
      <div className="wrap">
        <p className="display mb-5 text-[clamp(44px,9vw,128px)] font-bold leading-[0.9] tracking-[-0.04em]">
          we are the <br />
          <span className="text-accent">brandmakers.</span>
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

        <div className="mb-14 grid gap-9 sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h4 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-accent">company</h4>
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
            <h4 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-accent">work</h4>
            {caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                case: {project.title.toLowerCase()}
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
            <h4 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-accent">clients</h4>
            {footerClients.map((item) => (
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
            <h4 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-accent">services</h4>
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
            <h4 className="mb-4 text-[12px] font-semibold tracking-[0.06em] text-accent">the network</h4>
            {footerNetwork.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${networkEmail}`}
              className="nocase mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
            >
              for freelancers
            </a>
            <a
              href={`mailto:${networkEmail}`}
              className="nocase mb-2.5 block text-sm opacity-80 transition hover:text-accent hover:opacity-100"
            >
              {networkEmail}
            </a>
          </div>
        </div>

        {departments.length > 0 && (
          <div className="mb-9 grid gap-7 border-y border-bg/20 py-10 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((dept) => (
              <div key={dept.label}>
                <h5 className="mb-2 text-[12px] font-semibold tracking-[0.06em] text-bg/50">
                  {dept.label}
                </h5>
                <a
                  href={`mailto:${dept.email}`}
                  className="nocase font-display text-[clamp(16px,1.5vw,21px)] font-semibold hover:text-accent"
                >
                  {dept.email}
                </a>
              </div>
            ))}
          </div>
        )}

        <div className="mb-10 flex flex-wrap items-end gap-14">
          {offices.map((office) => (
            <div key={office.name}>
              <h5 className="font-display text-[21px] font-semibold">{office.name}</h5>
            </div>
          ))}
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
          <span>{settings.copyright}</span>
          <span className="nocase">
            <span>privacy notice</span>
            <span className="mx-2">·</span>
            <span>terms of use</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
