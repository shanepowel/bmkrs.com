import Image from "next/image";
import Link from "next/link";
import { companyLine } from "@/lib/content/legal";
import type { SiteSettings } from "@/lib/types";

const groups = [
  { title: "MAKE", links: [{ href: "/services", label: "Services" }, { href: "/motion", label: "Motion" }, { href: "/work", label: "Work" }] },
  { title: "STUDIO", links: [{ href: "/about", label: "About" }, { href: "/journal", label: "Journal" }, { href: "/press", label: "Press" }, { href: "/contact", label: "Contact" }] },
];

export function SiteFooter({ settings }: { settings: SiteSettings }) {
  const email = settings.generalEmail ?? settings.email ?? "hello@bmkrs.com";
  const year = new Date().getFullYear();
  const registration = companyLine(settings.companyNumber, settings.registeredAddress);
  return <footer className="hybrid-footer">
    <div className="hybrid-footer__top"><Link href="/" aria-label="bmkrs home"><Image src="/brand/bmkrs-primary-light.svg" alt="bmkrs." width={126} height={40}/></Link><p>Independent by nature.<br/>Connected by design.</p><Link className="hybrid-footer__contact" href="/contact">HAVE A GOOD ONE IN MIND? <span>LET’S TALK ↗</span></Link></div>
    <div className="hybrid-footer__links">{groups.map((group) => <div key={group.title}><span>{group.title}</span>{group.links.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>)}<div><span>ELSEWHERE</span><a href={`mailto:${email}`}>{email}</a><span className="hybrid-footer__location">LoֻǱ˞