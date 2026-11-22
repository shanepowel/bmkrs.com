'use client';

import { useState, memo, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, X, ArrowRight } from "lucide-react";
import { AmpButton, Container } from "@/components/system";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { brand } from "@/lib/brand";
import { navMenus, type NavItem, type NavMenu } from "@/content/nav";

interface NavigationProps {
  onOpenConsultation: () => void;
}

const panel = "absolute top-full z-50 overflow-hidden border border-white/10 bg-[#141a44] shadow-2xl shadow-black/40";
const itemCls =
  "group/navitem flex items-start gap-3 px-3 py-2.5 transition-colors duration-150 hover:bg-white/[0.05] focus:outline-none focus-visible:bg-white/[0.07]";

/**
 * Extra classes for links inside the shadcn menu. They're passed to NavigationMenuLink (not the
 * Next Link) so tailwind-merge replaces shadcn's defaults (stacked layout, light hover fill).
 */
const menuLinkReset =
  "flex-row gap-3 rounded-none p-0 text-inherit hover:bg-white/[0.05] hover:text-inherit focus:bg-white/[0.07] focus:text-inherit data-[active=true]:bg-white/[0.07] data-[active=true]:text-inherit";

function MenuItems({ items, onNavigate, inMenu }: { items: NavItem[]; onNavigate?: () => void; inMenu?: boolean }) {
  return (
    <>
      {items.map((item) => {
        const link = (
        <Link key={item.href + item.name} href={item.href} className={inMenu ? undefined : itemCls} onClick={onNavigate}>
          {item.tag && (
            <span className="w-12 flex-shrink-0 pt-0.5 font-mono text-[11px] tracking-[0.08em] text-[#F85C70]">{item.tag}</span>
          )}
          <span className="min-w-0">
            <span className="block text-sm font-semibold text-white group-hover/navitem:text-[#F85C70] group-focus-visible/navitem:text-[#F85C70]">{item.name}</span>
            <span className="mt-0.5 block text-xs text-white/55">{item.desc}</span>
          </span>
        </Link>
        );
        return inMenu ? (
          <NavigationMenuLink asChild key={item.href + item.name} className={`${menuLinkReset} ${itemCls}`}>
            {link}
          </NavigationMenuLink>
        ) : (
          link
        );
      })}
    </>
  );
}

const featureCls = "group/navfeat block border-b border-white/10 bg-[#181F4F] px-5 py-4 transition-colors hover:bg-[#60266A]/40";

function Feature({ feature, onNavigate, inMenu }: { feature: NonNullable<NavMenu["feature"]>; onNavigate?: () => void; inMenu?: boolean }) {
  const link = (
    <Link
      href={feature.href}
      onClick={onNavigate}
      className={inMenu ? undefined : featureCls}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="mb-1 font-mono text-[11px] uppercase tracking-[0.14em] text-[#F85C70]">{feature.eyebrow}</p>
          <p className="text-sm font-semibold text-white">{feature.title}</p>
          <p className="mt-0.5 text-xs text-white/55">{feature.desc}</p>
        </div>
        <ArrowRight className="mt-1 h-4 w-4 flex-shrink-0 text-[#F85C70] transition-transform group-hover/navfeat:translate-x-1" />
      </div>
    </Link>
  );
  return inMenu ? (
    <NavigationMenuLink asChild className={`${menuLinkReset} ${featureCls} focus:bg-[#60266A]/40 hover:bg-[#60266A]/40`}>
      {link}
    </NavigationMenuLink>
  ) : (
    link
  );
}

const Navigation = memo(function Navigation(_props: NavigationProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [openMenu, setOpenMenu] = useState("");
  // Hovering opens a menu after a short delay, so a mouse click that follows would toggle it shut.
  // We remember how the trigger was pressed and ignore mouse clicks on a menu that's already open.
  const lastPointer = useRef<string>("");

  useEffect(() => {
    setIsOpen(false);
    setOpenMenu("");
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      if (y < 10) setIsVisible(true);
      else if (y > lastScrollY && y > 100) setIsVisible(false);
      else if (y < lastScrollY) setIsVisible(true);
      setLastScrollY(y);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-white/10 bg-[#181F4F] transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            aria-label={`${brand.name}, return to homepage`}
            className="group relative block flex-shrink-0 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F85C70] focus-visible:ring-offset-4 focus-visible:ring-offset-[#181F4F]"
          >
            <span
              className="font-display text-2xl font-extrabold tracking-[-0.02em] text-white transition-colors duration-200 [font-stretch:115%] group-hover:text-[#F85C70]"
              data-testid="logo"
            >
              {brand.name}
              <span className="text-[#F85C70]">.</span>
            </span>
          </Link>

          {/* Desktop: shadcn NavigationMenu (Radix) for keyboard, focus and screen-reader behaviour */}
          <div className="hidden items-center gap-4 lg:flex xl:gap-6">
            <NavigationMenu viewport={false} value={openMenu} onValueChange={setOpenMenu}>
              <NavigationMenuList className="gap-0 xl:gap-1">
                {navMenus.map((menu) => {
                  const active =
                    menu.items.some((i) => pathname === i.href) || (menu.feature && pathname === menu.feature.href);
                  return (
                    <NavigationMenuItem key={menu.id} value={menu.id}>
                      <NavigationMenuTrigger
                        className={`h-9 rounded-none bg-transparent px-2.5 font-mono text-[12px] uppercase tracking-[0.12em] hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent data-[state=open]:hover:bg-transparent data-[state=open]:focus:bg-transparent xl:px-3 ${
                          active
                            ? "text-[#F85C70] hover:text-[#F85C70] focus:text-[#F85C70] data-[state=open]:text-[#F85C70]"
                            : "text-white/80 hover:text-white focus:text-white data-[state=open]:text-white"
                        }`}
                        data-testid={`nav-${menu.id}`}
                        onPointerDown={(e) => {
                          lastPointer.current = e.pointerType;
                        }}
                        onClick={(e) => {
                          if (lastPointer.current === "mouse" && openMenu === menu.id) e.preventDefault();
                          lastPointer.current = "";
                        }}
                      >
                        {menu.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent
                        className={`!mt-0 !rounded-none !border-white/10 !bg-[#141a44] !p-0 !text-white !shadow-2xl shadow-black/40 ${menu.width} ${
                          menu.align === "right" ? "!left-auto right-0" : "left-1/2 -translate-x-1/2"
                        }`}
                      >
                        <div className="h-[2px] w-full bg-[#F85C70]" aria-hidden />
                        {menu.feature && <Feature feature={menu.feature} inMenu />}
                        <div className="p-2">
                          <MenuItems items={menu.items} inMenu />
                        </div>
                        {menu.footer && (
                          <NavigationMenuLink
                            asChild
                            className={`${menuLinkReset} items-center justify-between border-t border-white/10 px-5 py-3 transition-colors hover:bg-white/[0.04]`}
                          >
                            <Link href={menu.footer.href}>
                              <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{menu.footer.label}</span>
                              <span className="text-xs font-semibold text-[#F85C70]">{menu.footer.value}</span>
                            </Link>
                          </NavigationMenuLink>
                        )}
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <AmpButton
              asChild
              size="sm"
              variant="outlineLight"
              className="!h-9 !border-2 !border-[#F85C70] !px-5 !font-semibold !text-[#F85C70] hover:!bg-[#F85C70] hover:!text-white"
              data-testid="button-get-in-touch"
            >
              <Link href="/contact">{brand.ctaPrimary} →</Link>
            </AmpButton>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="amp-focus-ring rounded text-white/85 hover:bg-white/10 hover:text-white"
                  aria-label={isOpen ? "Close menu" : "Open menu"}
                  aria-expanded={isOpen}
                  data-testid="button-mobile-menu"
                >
                  {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-80 border-l border-white/10 bg-[#141a44] p-0 text-white sm:w-96"
                aria-describedby="mobile-nav-desc"
              >
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <SheetDescription id="mobile-nav-desc" className="sr-only">
                  Main navigation for {brand.name}
                </SheetDescription>
                <div className="flex h-full flex-col">
                  <div className="border-b border-white/10 p-6">
                    <span className="font-display text-2xl font-extrabold [font-stretch:115%]">
                      {brand.name}
                      <span className="text-[#F85C70]">.</span>
                    </span>
                  </div>
                  <div className="flex-1 overflow-y-auto px-2 py-2">
                    {/* Same menus as desktop, as a shadcn Accordion: one section open at a time */}
                    <Accordion
                      type="single"
                      collapsible
                      defaultValue={navMenus.find((m) => m.items.some((i) => pathname === i.href))?.id}
                    >
                      {navMenus.map((menu) => (
                        <AccordionItem key={menu.id} value={menu.id} className="border-white/10">
                          <AccordionTrigger className="px-3 py-4 font-mono text-[12px] uppercase tracking-[0.14em] text-white hover:no-underline data-[state=open]:text-[#F85C70] [&>svg]:text-[#F85C70]">
                            {menu.label}
                          </AccordionTrigger>
                          <AccordionContent className="pb-3">
                            {menu.feature && (
                              <div className="mb-1">
                                <Feature feature={menu.feature} onNavigate={() => setIsOpen(false)} />
                              </div>
                            )}
                            <MenuItems items={menu.items} onNavigate={() => setIsOpen(false)} />
                            {menu.footer && (
                              <Link
                                href={menu.footer.href}
                                onClick={() => setIsOpen(false)}
                                className="mt-1 flex items-center justify-between border-t border-white/10 px-3 pt-3"
                              >
                                <span className="font-mono text-[11px] uppercase tracking-[0.12em] text-white/45">{menu.footer.label}</span>
                                <span className="text-xs font-semibold text-[#F85C70]">{menu.footer.value}</span>
                              </Link>
                            )}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  <div className="border-t border-white/10 p-6">
                    <AmpButton asChild fullWidth size="lg" className="!text-white" data-testid="button-mobile-get-in-touch">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>
                        {brand.ctaPrimary} →
                      </Link>
                    </AmpButton>
                    <p className="mt-3 text-center text-xs text-white/50">No pitch. No deck. Just a 30-minute call.</p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </nav>
  );
});

export default Navigation;
