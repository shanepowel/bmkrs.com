import Image from "next/image";
import Link from "next/link";
import type { NavItem } from "@/lib/types";
import { MEMBER_LOGIN_URL } from "@/lib/urls";

const DEFAULT_NAV: NavItem[] = [
  { label: "work", href: "/work" },
  { label: "services", href: "/services" },
  { label: "motion", href: "/motion" },
  { label: "studio", href: "/about" },
];

export function SiteHeader({ navigation, loginUrl }: { navigation?: NavItem[]; loginUrl?: string; contactEmail?: string }) {
  const items = navigation?.filter((item) => item.href !== "/" && item.href !== "/contact" && !item.highlight) ?? DEFAULT_NAV;
  const links = items.length ? items : DEFAULT_NAV;
  return <header className="hybrid-header"><Link href="/" className="hybrid-header__brand" aria-label="bmkrs home"><Image src="/brand/bmkrs-primary-dark.svg" alt="bmkrs." width={126} height={40} priority /></Link><nav className="hybrid-header__nav" aria-label="Main navigation">{links.slice(0, 4).map((item) => <Link href={item.href} key={`${item.label}-${item.href}`}>{item.label}</Link>)}</nav><div className="hybrid-header__actions"><Link className="hybrid-header__login" href={loginUrl ?? MEMBER_LOGIN_URL}>LOG IN ↗</Link><Link className="hybrid-header__cta" href="/contact">LET’S BUILD <span>↗</span></Link></div></header>;
}
