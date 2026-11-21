'use client';

import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-intersection-observer";
import { useConsultation } from "@/lib/consultation-context";
import { AmpButton, Container, Eyebrow, PageShell, Text } from "@/components/system";
import type { BmkBlock, BmkImageKey, BmkPageContent } from "@/content/bmk-types";
import { Corners, FigLabel, SectionHead, SnapLine, revealStyle } from "./primitives";
import { BmkCard, BmkFaq, SpecTags } from "./ui";

import imgVr from "@assets/56_1760470571209.webp";
import imgMegaphone from "@assets/36_1760470798015.webp";
import imgSpeakers from "@assets/46_1760470581285.webp";
import imgHeadphones from "@assets/35_1760470608291.webp";
import imgWhatNow from "@assets/50_1760470599806.webp";
import imgMesh from "@assets/52_1760470651176.webp";
import imgPortrait from "@assets/59_1760471391711.webp";
import imgLaptop from "@assets/66_1760470632126.webp";
import imgWorkshop from "@assets/68_1760470836673.webp";

const images: Record<BmkImageKey, { src: StaticImageData; alt: string }> = {
  vr: { src: imgVr, alt: "Person exploring a virtual reality interface" },
  megaphone: { src: imgMegaphone, alt: "Person shouting through a megaphone against a yellow wall" },
  speakers: { src: imgSpeakers, alt: "Loudspeakers on a pole against a violet sky" },
  headphones: { src: imgHeadphones, alt: "Person in a red jumper wearing headphones" },
  whatNow: { src: imgWhatNow, alt: "Road sign reading What Now against a blue sky" },
  mesh: { src: imgMesh, alt: "Abstract violet data mesh" },
  portrait: { src: imgPortrait, alt: "Smiling person in an orange jumper against a purple wall" },
  laptop: { src: imgLaptop, alt: "Hands holding an open laptop" },
  workshop: { src: imgWorkshop, alt: "A team mapping ideas on sticky notes on a glass wall" },
};

function SmartLink({
  href,
  external,
  className,
  style,
  children,
}: {
  href: string;
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  if (external || href.startsWith("http") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} style={style} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className} style={style}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */

function Hero({ hero }: { hero: BmkPageContent["hero"] }) {
  const [ref, visible] = useReveal(0.05);
  const img = hero.image ? images[hero.image] : null;
  return (
    <section ref={ref} className="bmk-chalk-grid relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 15%, rgba(96, 38, 106, 0.35) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(248, 92, 112, 0.10) 0%, transparent 50%)",
        }}
      />
      <Container className="relative z-10 pb-14 pt-12 lg:pb-20 lg:pt-16">
        <div className={`grid grid-cols-1 items-end gap-12 ${img ? "lg:grid-cols-12" : ""}`}>
          <div className={`min-w-0 ${img ? "lg:col-span-7" : "max-w-4xl"}`} style={revealStyle(visible)}>
            <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
              <span className="text-white/45">{hero.code}</span>
              <span className="h-px w-8 bg-[#F85C70]" aria-hidden />
              <span className="text-[#F85C70]">{hero.eyebrow}</span>
            </div>
            <h1 className="font-display text-[2.4rem] font-extrabold uppercase leading-[0.92] tracking-[-0.025em] [font-stretch:118%] sm:text-5xl lg:text-[3.9rem]">
              {hero.title}
              {hero.accent && <span className="mt-2 block text-[#F85C70]">{hero.accent}</span>}
            </h1>
            <Text variant="lead" tone="white-80" className="mt-7 max-w-[38rem]">
              {hero.lead}
            </Text>
            {(hero.primaryCta || hero.secondaryCta) && (
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                {hero.primaryCta && (
                  <AmpButton asChild size="md">
                    <Link href={hero.primaryCta.href}>
                      {hero.primaryCta.label} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </AmpButton>
                )}
                {hero.secondaryCta && (
                  <AmpButton asChild size="md" variant="outlineLight">
                    <SmartLink href={hero.secondaryCta.href} external={hero.secondaryCta.external}>
                      {hero.secondaryCta.label}
                    </SmartLink>
                  </AmpButton>
                )}
              </div>
            )}
            {hero.facts && (
              <dl className="mt-12 grid grid-cols-2 gap-px border border-white/10 bg-white/10 sm:grid-cols-3">
                {hero.facts.map((f) => (
                  <div key={f.label} className="bg-[#181F4F] p-4">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{f.label}</dt>
                    <dd className="mt-1.5 text-sm font-semibold text-white">{f.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
          {img && (
            <div className="min-w-0 lg:col-span-5" style={revealStyle(visible, 0.15)}>
              <figure className="bmk-tile group relative h-[340px] overflow-hidden sm:h-[420px] lg:h-[480px]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                {hero.figLabel && <FigLabel>{hero.figLabel}</FigLabel>}
                <Corners />
              </figure>
            </div>
          )}
        </div>
      </Container>
      <Container className="relative z-10">
        <div className="bmk-ruler" aria-hidden />
      </Container>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function GridBlock({ block, alt }: { block: Extract<BmkBlock, { type: "grid" }>; alt: boolean }) {
  const [ref, visible] = useReveal();
  const cols = block.cols === 2 ? "sm:grid-cols-2" : "sm:grid-cols-2 lg:grid-cols-3";
  return (
    <section ref={ref} className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <SectionHead code={block.code} eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
        <div className={`grid grid-cols-1 border-l border-t border-white/10 ${cols}`}>
          {block.items.map((item, i) => {
            const inner = (
              <>
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-[2px] w-0 bg-[#F85C70] transition-all duration-500 group-hover:w-full"
                />
                {item.code && <span className="font-mono text-xs tracking-[0.14em] text-[#F85C70]">{item.code}</span>}
                <h3 className="mt-4 font-display text-2xl font-bold tracking-[-0.01em] [font-stretch:110%]">{item.title}</h3>
                <Text variant="small" tone="white-70" className="mt-3 flex-1">
                  {item.body}
                </Text>
                <SpecTags tags={item.tags} className="mt-6" />
                {item.href && (
                  <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all group-hover:gap-3">
                    Find out more {item.external ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowRight className="h-3 w-3" />}
                  </span>
                )}
              </>
            );
            const cls =
              "group relative flex flex-col border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10";
            return item.href ? (
              <SmartLink key={item.title} href={item.href} external={item.external} className={cls} style={revealStyle(visible, i * 0.05)}>
                {inner}
              </SmartLink>
            ) : (
              <div key={item.title} className={cls} style={revealStyle(visible, i * 0.05)}>
                {inner}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

function StepsBlock({ block, alt }: { block: Extract<BmkBlock, { type: "steps" }>; alt: boolean }) {
  return (
    <section className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <SectionHead code={block.code} eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
        <ol className={`grid grid-cols-1 gap-10 sm:grid-cols-2 ${block.items.length >= 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"} lg:gap-0`}>
          {block.items.map((m, i) => (
            <li key={m.title} className="relative lg:pr-8">
              <div className="mb-5 flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#F85C70] font-mono text-xs text-[#F85C70]">
                  {i + 1}
                </span>
                {i < block.items.length - 1 && <SnapLine className="hidden flex-1 lg:block" />}
              </div>
              <h3 className="font-display text-2xl font-extrabold uppercase tracking-[-0.02em] [font-stretch:115%] lg:text-[1.7rem]">
                {m.title}
              </h3>
              <Text variant="small" tone="white-70" className="mt-2 max-w-[18rem]">
                {m.body}
              </Text>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}

function SplitBlock({ block, alt }: { block: Extract<BmkBlock, { type: "split" }>; alt: boolean }) {
  const img = block.image ? images[block.image] : null;
  return (
    <section className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <div className="mb-8 flex items-center gap-4">
          <span className="font-mono text-xs tracking-[0.12em] text-white/40">{block.code}</span>
          <SnapLine className="flex-1" />
        </div>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className={`lg:col-span-6 ${block.reverse ? "lg:order-2 lg:col-start-7" : ""}`}>
            <Eyebrow className="mb-4">{block.eyebrow}</Eyebrow>
            <Text variant="h2" tone="white" className="text-3xl md:text-4xl lg:text-[2.6rem]">
              {block.title}
            </Text>
            {block.paragraphs.map((p) => (
              <Text key={p.slice(0, 24)} variant="lead" tone="white-75" className="mt-5">
                {p}
              </Text>
            ))}
          </div>
          <div className={`lg:col-span-5 ${block.reverse ? "lg:order-1" : "lg:col-start-8"}`}>
            {img && (
              <figure className="relative mb-8 aspect-[4/3] overflow-hidden">
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />
                {block.figLabel && <FigLabel>{block.figLabel}</FigLabel>}
              </figure>
            )}
            {block.list && (
              <div className="border border-white/10 p-7">
                {block.listTitle && (
                  <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">{block.listTitle}</p>
                )}
                <ul className="space-y-3">
                  {block.list.map((l) => (
                    <li key={l} className="flex items-start gap-3 text-sm text-white/85">
                      <span className="mt-2.5 h-px w-4 shrink-0 bg-[#F85C70]" aria-hidden />
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

function LedgerBlock({ block, alt }: { block: Extract<BmkBlock, { type: "ledger" }>; alt: boolean }) {
  return (
    <section className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <SectionHead code={block.code} eyebrow={block.eyebrow} title={block.title} lead={block.lead} />
        <ul className="border-t border-white/10">
          {block.items.map((r, i) => (
            <li key={r.title} className="group grid grid-cols-1 gap-3 border-b border-white/10 py-7 sm:grid-cols-12 sm:gap-6">
              <span className="font-mono text-xs tracking-[0.14em] text-white/40 sm:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sm:col-span-7">
                <h3 className="font-display text-xl font-extrabold uppercase tracking-[-0.01em] [font-stretch:112%] transition-colors group-hover:text-[#F85C70] lg:text-2xl">
                  {r.title}
                </h3>
                <Text variant="small" tone="white-70" className="mt-2">
                  {r.body}
                </Text>
              </div>
              {r.meta && (
                <p className="self-center font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-[#F85C70] sm:col-span-4 sm:text-right">
                  {r.meta}
                </p>
              )}
            </li>
          ))}
        </ul>
        {block.footnote && (
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">{block.footnote}</p>
        )}
      </Container>
    </section>
  );
}

function CalloutBlock({ block }: { block: Extract<BmkBlock, { type: "callout" }> }) {
  return (
    <section className="border-t border-white/10 py-14 lg:py-16">
      <Container>
        <SmartLink href={block.href} external={block.external} className="group block">
          <BmkCard className="flex flex-col gap-6 overflow-hidden border-[#F85C70]/40 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{ background: "radial-gradient(circle at 0% 0%, rgba(248, 92, 112, 0.14) 0%, transparent 55%)" }}
          />
          <div className="relative max-w-2xl">
            <Eyebrow className="mb-3">{block.eyebrow}</Eyebrow>
            <h2 className="font-display text-2xl font-extrabold uppercase leading-tight tracking-[-0.015em] [font-stretch:112%] lg:text-4xl">
              {block.title}
            </h2>
            <Text variant="body" tone="white-75" className="mt-4">
              {block.body}
            </Text>
          </div>
          <span className="relative inline-flex shrink-0 items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all group-hover:gap-3">
            {block.linkLabel} {block.external ? <ArrowUpRight className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
          </span>
          </BmkCard>
        </SmartLink>
      </Container>
    </section>
  );
}

function StatementBlock({ block }: { block: Extract<BmkBlock, { type: "statement" }> }) {
  return (
    <section className="bmk-chalk-grid border-t border-white/10 py-20 lg:py-28">
      <Container>
        <p className="max-w-5xl font-display text-3xl font-extrabold uppercase leading-[0.98] tracking-[-0.02em] [font-stretch:116%] sm:text-4xl lg:text-6xl">
          {block.text} {block.accent && <span className="text-[#F85C70]">{block.accent}</span>}
        </p>
      </Container>
    </section>
  );
}

function FaqBlock({ block, alt }: { block: Extract<BmkBlock, { type: "faq" }>; alt: boolean }) {
  return (
    <section className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <SectionHead code={block.code} eyebrow="Questions" title={block.title} />
        <BmkFaq items={block.items} />
      </Container>
    </section>
  );
}

function LinksBlock({ block, alt }: { block: Extract<BmkBlock, { type: "links" }>; alt: boolean }) {
  return (
    <section className={`border-t border-white/10 py-20 lg:py-24 ${alt ? "bg-[#141a44]" : ""}`}>
      <Container>
        <SectionHead code={block.code} eyebrow={block.eyebrow} title={block.title} />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {block.items.map((l) => (
            <SmartLink key={l.href + l.label} href={l.href} external={l.external} className="group block">
              <BmkCard className="h-full p-7">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl font-bold [font-stretch:108%]">{l.label}</h3>
                {l.external ? (
                  <ArrowUpRight className="h-4 w-4 text-[#F85C70]" />
                ) : (
                  <ArrowRight className="h-4 w-4 text-[#F85C70] transition-transform group-hover:translate-x-1" />
                )}
              </div>
              <Text variant="small" tone="white-70" className="mt-2">
                {l.desc}
              </Text>
              </BmkCard>
            </SmartLink>
          ))}
        </div>
      </Container>
    </section>
  );
}

function CtaSection({ cta, onOpen }: { cta: NonNullable<BmkPageContent["cta"]>; onOpen: (s?: string) => void }) {
  return (
    <section className="bmk-chalk-grid relative overflow-hidden border-t border-white/10 py-20 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 50% 120%, rgba(248, 92, 112, 0.25) 0%, transparent 60%)" }}
      />
      <Container className="relative z-10 text-center">
        <p className="font-display text-4xl font-black uppercase leading-[0.9] tracking-[-0.03em] [font-stretch:122%] sm:text-6xl lg:text-[5.5rem]">
          <span className="bmk-outline-text block">{cta.title}</span>
          {cta.accent && <span className="block text-[#F85C70]">{cta.accent}</span>}
        </p>
        <Text variant="lead" tone="white-75" className="mx-auto mt-8 max-w-xl">
          {cta.lead}
        </Text>
        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <AmpButton size="md" onClick={() => onOpen(cta.serviceType)}>
            {cta.label ?? "Book the call"} <ArrowRight className="h-4 w-4" />
          </AmpButton>
          <a
            href="mailto:hello@bmkrs.com"
            className="font-mono text-sm uppercase tracking-[0.12em] text-white/70 underline-offset-4 hover:text-white hover:underline"
          >
            hello@bmkrs.com
          </a>
        </div>
      </Container>
    </section>
  );
}

const defaultCta: NonNullable<BmkPageContent["cta"]> = {
  title: "Let's build",
  accent: "something.",
  lead: "No pitch deck. A 30-minute call, an honest view of where to start, and a rough price before you hang up.",
};

/* ------------------------------------------------------------------ */

export function BmkPage({ page }: { page: BmkPageContent }) {
  const { openConsultation } = useConsultation();
  let alt = false;
  return (
    <PageShell className="bg-[#181F4F]">
      <div className="bg-[#181F4F] text-white">
        <Hero hero={page.hero} />
        {page.blocks.map((block, i) => {
          if (block.type !== "callout" && block.type !== "statement") alt = !alt;
          const key = `${block.type}-${i}`;
          switch (block.type) {
            case "grid":
              return <GridBlock key={key} block={block} alt={!alt} />;
            case "steps":
              return <StepsBlock key={key} block={block} alt={!alt} />;
            case "split":
              return <SplitBlock key={key} block={block} alt={!alt} />;
            case "ledger":
              return <LedgerBlock key={key} block={block} alt={!alt} />;
            case "callout":
              return <CalloutBlock key={key} block={block} />;
            case "statement":
              return <StatementBlock key={key} block={block} />;
            case "faq":
              return <FaqBlock key={key} block={block} alt={!alt} />;
            case "links":
              return <LinksBlock key={key} block={block} alt={!alt} />;
            default:
              return null;
          }
        })}
        <CtaSection cta={page.cta ?? defaultCta} onOpen={openConsultation} />
      </div>
    </PageShell>
  );
}
