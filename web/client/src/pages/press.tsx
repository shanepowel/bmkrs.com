'use client';

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, Check, Copy, Download } from "lucide-react";
import { AmpButton, Container, Eyebrow, PageShell, Text } from "@/components/system";
import { BmkCard, SpecTag } from "@/components/bmk/ui";
import { BrandLogo } from "@/components/bmk/logo";
import { SectionHead } from "@/components/bmk/primitives";
import { brand } from "@/lib/brand";

const KIT = "/brand/bmkrs-brand-kit.zip";

const facts = [
  { label: "Name", value: "bmkrs (always lowercase)" },
  { label: "Company", value: `${brand.legalName}, trading as bmkrs` },
  { label: "What we do", value: "Brands, digital products and practical AI" },
  { label: "Part of", value: "LRC Labs, a UK company that builds and runs software products" },
  { label: "Based", value: "UK, working wherever the work is" },
  { label: "Press contact", value: "hello@bmkrs.com" },
];

const boilerplates = [
  {
    label: "One line",
    text: "bmkrs is a small, senior studio that designs, builds and launches brands, digital products and practical AI.",
  },
  {
    label: "Short",
    text: "bmkrs is a small, senior studio that designs, builds and launches brands, digital products and practical AI. It works in short, visible cycles, helps organisations control what their AI costs, and runs its own products, including EmberNest, Viralyz, FreelanceNearMe and OneScope. bmkrs is part of LRC Labs, a UK company that builds and runs software products.",
  },
];

type LogoTile = {
  name: string;
  use: string;
  svg: string;
  png?: string;
  bg: string;
  preview: string;
  border?: boolean;
};

const logos: LogoTile[] = [
  { name: "Primary, dark", use: "Default. For dark backgrounds.", svg: "bmkrs-primary-dark.svg", png: "bmkrs-primary-dark.png", bg: "#181F4F", preview: "bmkrs-primary-dark.svg" },
  { name: "Primary, light", use: "Documents, print, light backgrounds.", svg: "bmkrs-primary-light.svg", png: "bmkrs-primary-light.png", bg: "#FFFFFF", preview: "bmkrs-primary-light.svg" },
  { name: "Mono white", use: "Over photography or where coral clashes.", svg: "bmkrs-mono-white.svg", bg: "#3B3F5C", preview: "bmkrs-mono-white.svg" },
  { name: "Mono black", use: "Single-colour print and embossing.", svg: "bmkrs-mono-black.svg", bg: "#FFFFFF", preview: "bmkrs-mono-black.svg" },
  { name: "Inverse coral", use: "Campaign moments only. Never the default.", svg: "bmkrs-inverse-coral.svg", bg: "#141A44", preview: "bmkrs-inverse-coral.svg" },
  { name: "Icon, “b.”", use: "Favicon, app icon, small avatars.", svg: "bmkrs-icon-dark.svg", png: "bmkrs-icon-512.png", bg: "#181F4F", preview: "bmkrs-icon-dark.svg" },
  { name: "Icon, light", use: "The “b.” mark for light contexts.", svg: "bmkrs-icon-light.svg", bg: "#FFFFFF", preview: "bmkrs-icon-light.svg" },
  { name: "Social avatar", use: "Profile images. PNG at 512 and 1024.", svg: "bmkrs-avatar-512.svg", png: "bmkrs-avatar-1024.png", bg: "#181F4F", preview: "bmkrs-avatar-512.svg" },
];

const colours = [
  { group: "Brand", name: "Navy", hex: "#181F4F", note: "Page background; logo on light." },
  { group: "Brand", name: "Coral", hex: "#F85C70", note: "The logo's full stop, actions and highlights." },
  { group: "Brand", name: "White", hex: "#FFFFFF", note: "Logo and text on navy." },
  { group: "Support", name: "Deep navy", hex: "#141A44", note: "Alternate sections and panels." },
  { group: "Support", name: "Plum", hex: "#60266A", note: "Glows and gradients." },
];

const rules = [
  "The full stop is always there, always last, always coral in colour versions.",
  "Keep clear space the height of the lowercase b on every side.",
  "Below 96px wide on screen (24mm in print), use the “b.” icon instead.",
  "Don't recolour the dot, add effects, stretch the wordmark or retype it in another font.",
  "Write the name in lowercase in running text: bmkrs.",
];

function CopyButton({ text }: { text: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(text);
          setDone(true);
          setTimeout(() => setDone(false), 1800);
        } catch {
          /* clipboard unavailable: text is still selectable */
        }
      }}
      className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F85C70] hover:text-white"
    >
      {done ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
      {done ? "Copied" : "Copy"}
    </button>
  );
}

export default function Press() {
  return (
    <PageShell className="bg-[#181F4F]">
      <div className="bg-[#181F4F] text-white">
        {/* Hero */}
        <section className="bmk-chalk-grid relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 85% 15%, rgba(96, 38, 106, 0.35) 0%, transparent 55%)" }}
          />
          <Container className="relative z-10 pb-14 pt-12 lg:pb-20 lg:pt-16">
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em]">
                  <span className="text-white/45">BMK / PRESS</span>
                  <span className="h-px w-8 bg-[#F85C70]" aria-hidden />
                  <span className="text-[#F85C70]">Press and brand kit</span>
                </div>
                <h1 className="font-display text-[2.4rem] font-extrabold uppercase leading-[0.92] tracking-[-0.025em] [font-stretch:118%] sm:text-5xl lg:text-[3.9rem]">
                  Writing about us?
                  <span className="mt-2 block text-[#F85C70]">Here&apos;s everything.</span>
                </h1>
                <Text variant="lead" tone="white-80" className="mt-7 max-w-[38rem]">
                  Logos, colours, a ready-to-use description and the key facts. Download the whole kit, or take just what you need.
                </Text>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                  <AmpButton asChild size="md">
                    <a href={KIT} download>
                      <Download className="h-4 w-4" /> Download the brand kit
                    </a>
                  </AmpButton>
                  <AmpButton asChild size="md" variant="outlineLight">
                    <a href="mailto:hello@bmkrs.com?subject=Press%20enquiry">Press enquiries</a>
                  </AmpButton>
                </div>
              </div>
              <div className="lg:col-span-5">
                <BmkCard className="flex aspect-[4/3] items-center justify-center bg-[#181F4F] p-10">
                  <span className="text-white">
                    <BrandLogo className="h-16 w-auto sm:h-20" title="bmkrs" />
                  </span>
                </BmkCard>
              </div>
            </div>
          </Container>
          <Container className="relative z-10">
            <div className="bmk-ruler" aria-hidden />
          </Container>
        </section>

        {/* Facts and boilerplate */}
        <section className="border-t border-white/10 py-20 lg:py-24">
          <Container>
            <SectionHead code="§ 01" eyebrow="At a glance" title="The facts." />
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
              <dl className="grid grid-cols-1 gap-px self-start border border-white/10 bg-white/10 sm:grid-cols-2 lg:col-span-6">
                {facts.map((f) => (
                  <div key={f.label} className="bg-[#181F4F] p-5">
                    <dt className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">{f.label}</dt>
                    <dd className="mt-1.5 text-sm font-semibold">
                      {f.value.includes("@") ? (
                        <a href={`mailto:${f.value}`} className="text-[#F85C70] hover:underline">
                          {f.value}
                        </a>
                      ) : (
                        f.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
              <div className="space-y-4 lg:col-span-6">
                {boilerplates.map((b) => (
                  <BmkCard key={b.label} className="p-6">
                    <div className="mb-3 flex items-center justify-between">
                      <Eyebrow>{b.label}</Eyebrow>
                      <CopyButton text={b.text} />
                    </div>
                    <Text variant="body" tone="white-80">
                      {b.text}
                    </Text>
                  </BmkCard>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* Logos */}
        <section className="border-t border-white/10 bg-[#141a44] py-20 lg:py-24">
          <Container>
            <SectionHead
              code="§ 02"
              eyebrow="Logos"
              title="Eight files, one idea."
              lead="The full stop is the accent. Every file is outlined, so it looks the same everywhere."
              action={
                <a
                  href={KIT}
                  download
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all hover:gap-3"
                >
                  All files (.zip) <ArrowRight className="h-3 w-3" />
                </a>
              }
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {logos.map((l) => (
                <BmkCard key={l.svg} className="flex flex-col">
                  <div
                    className="relative flex aspect-[4/3] items-center justify-center p-6"
                    style={{ backgroundColor: l.bg }}
                  >
                    <Image
                      src={`/brand/${l.preview}`}
                      alt={`bmkrs ${l.name} logo`}
                      width={320}
                      height={160}
                      unoptimized
                      className="h-auto max-h-full w-auto max-w-[85%] object-contain"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-bold [font-stretch:105%]">{l.name}</h3>
                    <Text variant="small" tone="white-70" className="mt-1 flex-1">
                      {l.use}
                    </Text>
                    <div className="mt-4 flex gap-3">
                      <a href={`/brand/${l.svg}`} download className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F85C70] hover:text-white">
                        <Download className="h-3 w-3" /> SVG
                      </a>
                      {l.png && (
                        <a href={`/brand/${l.png}`} download className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-[#F85C70] hover:text-white">
                          <Download className="h-3 w-3" /> PNG
                        </a>
                      )}
                    </div>
                  </div>
                </BmkCard>
              ))}
            </div>
          </Container>
        </section>

        {/* Colours and type */}
        <section className="border-t border-white/10 py-20 lg:py-24">
          <Container>
            <SectionHead code="§ 03" eyebrow="Colour and type" title="The palette." />
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {colours.map((c) => (
                <div key={c.hex} className="border border-white/10">
                  <div className="aspect-square" style={{ backgroundColor: c.hex }} />
                  <div className="p-4">
                    <SpecTag className="mb-2">{c.group}</SpecTag>
                    <p className="text-sm font-semibold">{c.name}</p>
                    <p className="font-mono text-xs text-white/60">{c.hex}</p>
                    <p className="mt-2 text-xs text-white/55">{c.note}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
              <BmkCard className="p-7">
                <Eyebrow className="mb-4">Logo and headings</Eyebrow>
                <p className="font-display text-4xl font-extrabold uppercase tracking-[-0.02em] [font-stretch:118%]">Archivo</p>
                <Text variant="small" tone="white-70" className="mt-3">
                  The logo is Archivo Medium (500). Headings use Archivo ExtraBold, set wide; body text uses Archivo at regular weight.
                </Text>
              </BmkCard>
              <BmkCard className="p-7">
                <Eyebrow className="mb-4">Labels and code</Eyebrow>
                <p className="font-mono text-3xl uppercase tracking-[0.08em]">IBM Plex Mono</p>
                <Text variant="small" tone="white-70" className="mt-3">
                  Small uppercase labels, section codes and figure captions. Both fonts are free from Google Fonts.
                </Text>
              </BmkCard>
            </div>
          </Container>
        </section>

        {/* Rules */}
        <section className="border-t border-white/10 bg-[#141a44] py-20 lg:py-24">
          <Container>
            <SectionHead code="§ 04" eyebrow="Using the logo" title="Five rules." />
            <ol className="max-w-3xl border-t border-white/10">
              {rules.map((r, i) => (
                <li key={r} className="flex gap-6 border-b border-white/10 py-5">
                  <span className="font-mono text-xs tracking-[0.14em] text-[#F85C70]">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-white/85">{r}</span>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-white/55">
              Full guidance is in{" "}
              <a href="/brand/LOGO-GUIDELINES.md" className="text-[#F85C70] hover:underline">
                the logo guidelines
              </a>
              , included in the kit.
            </p>
          </Container>
        </section>
      </div>
    </PageShell>
  );
}
