'use client';

import Link from "next/link";
import { memo } from "react";
import { Linkedin, Mail } from "lucide-react";
import { SiInstagram } from "react-icons/si";
import { Container, Eyebrow, Grid, Stack, Text } from "@/components/system";
import { brand } from "@/lib/brand";
import { navMenus, legalLinks } from "@/content/nav";

/** Footer columns come from the same menu data as the header, so they always match. */
const byId = Object.fromEntries(navMenus.map((m) => [m.id, m]));
const footerColumns = [
  { label: byId.what.label, items: [{ name: "Overview", href: "/services", desc: "" }, ...byId.what.items] },
  { label: byId.ai.label, items: byId.ai.items },
  { label: "Studio", items: [...byId.work.items, ...byId.company.items] },
  { label: byId.who.label, items: byId.who.items },
];

const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-[#60266A]/40 bg-[#181F4F] font-sans">
      <Container className="py-12">
        <Grid
          cols="12"
          gap="lg"
          equal={false}
          className="mb-10 border-b border-[#60266A]/30 pb-10 lg:grid-cols-6"
        >
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="mb-4 inline-block font-sans text-2xl font-semibold tracking-tight text-white transition-colors hover:text-[#F85C70]"
              data-testid="footer-logo"
            >
              {brand.nameDisplay}
            </Link>
            <Text variant="small" className="mb-2 text-white/60">
              {brand.tagline}
            </Text>
            <Text variant="small" className="mb-1 text-white/40">
              {brand.location}
            </Text>
            <a
              href={`mailto:${brand.email}`}
              className="text-sm text-white/40 transition-colors hover:text-[#F85C70]"
            >
              {brand.email}
            </a>
          </div>

          {footerColumns.map((col) => (
            <div key={col.label}>
              <Eyebrow className="mb-4">{col.label}</Eyebrow>
              <ul className="space-y-2">
                {col.items.map((link) => (
                  <li key={link.href + link.name}>
                    <Link href={link.href} className="text-sm text-white/50 transition-colors hover:text-white/90">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>

        <Stack direction="row-responsive" gap="md" justify="between" align="center" className="flex-wrap">
          <Text variant="caption" className="text-white/30">
            © {new Date().getFullYear()} {brand.legalName} · UK
          </Text>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {legalLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-xs text-white/30 transition-colors hover:text-white/70"
                data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="ml-2 flex items-center gap-3">
              {[
                { href: brand.social.linkedin, label: "LinkedIn", icon: <Linkedin className="h-4 w-4" /> },
                { href: brand.social.instagram, label: "Instagram", icon: <SiInstagram className="h-4 w-4" /> },
                { href: `mailto:${brand.email}`, label: "Email", icon: <Mail className="h-4 w-4" /> },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  aria-label={s.label}
                  className="text-white/30 transition-colors hover:text-[#F85C70]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </Stack>
      </Container>
    </footer>
  );
});

export default Footer;
