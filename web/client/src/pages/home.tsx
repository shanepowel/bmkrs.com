'use client';

import { memo } from "react";
import Link from "next/link";
import Image, { type StaticImageData } from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useReveal } from "@/hooks/use-intersection-observer";
import { AmpButton, Container, Eyebrow, PageShell, Text } from "@/components/system";
import { SpecTags, BmkCard } from "@/components/bmk/ui";
import { Corners, SectionHead, SnapLine, revealStyle } from "@/components/bmk/primitives";
import { StatGrid } from "@/components/bmk/stat-grid";
import { marketStats, statsFootnote } from "@/content/market-stats";

import imgVr from "@assets/56_1760470571209.webp";
import imgMegaphone from "@assets/36_1760470798015.webp";
import imgLaptop from "@assets/66_1760470632126.webp";
import imgWorkshop from "@assets/68_1760470836673.webp";
import imgMesh from "@assets/52_1760470651176.webp";
import imgPortrait from "@assets/59_1760471391711.webp";

interface HomeProps {
  onOpenConsultation: (serviceType?: string) => void;
}

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const heroFigures: { img: StaticImageData; label: string; alt: string }[] = [
  { img: imgVr, label: "FIG. 01 / AI", alt: "Person exploring a virtual reality interface" },
  { img: imgMegaphone, label: "FIG. 02 / BRAND", alt: "Person shouting through a megaphone against a yellow wall" },
  { img: imgLaptop, label: "FIG. 03 / PRODUCT", alt: "Hands holding an open laptop" },
];

const ownProducts = [
  {
    code: "MADE 01",
    name: "EmberNest",
    kind: "AI delivery",
    body: "The governed delivery layer for AI-assisted software development. It assesses a codebase and turns improvements into scoped, approved and evidenced work.",
    href: "https://embernest.ai",
  },
  {
    code: "MADE 02",
    name: "Viralyz",
    kind: "Creator tools",
    body: "Scores short-form video and ad creative before it goes live, so creators and brands know what will land and why.",
    href: "https://viralyz.com",
  },
  {
    code: "MADE 03",
    name: "FreelanceNearMe",
    display: <>Freelance<wbr />NearMe</>,
    kind: "Marketplace",
    body: "Connects people with local freelancers across the UK and beyond. Around 15,000 visitors a week and being rebuilt as a proper SaaS platform.",
    href: "https://freelancenearme.com",
  },
  {
    code: "MADE 04",
    name: "OneScope",
    kind: "Fintech",
    body: "AI-driven crypto trading across several exchanges, with automated bots, portfolio insights and risk controls.",
    href: "https://onescope.io",
  },
];

const landscape = [
  marketStats.valueGap,
  marketStats.pilotToProduction,
  marketStats.agentsCancelled,
  marketStats.devTrust,
  marketStats.searchClicks,
  marketStats.ukAdoption,
];

const gaps = [
  {
    code: "GAP 01",
    title: "From pilot to production",
    body: "Most AI never leaves the demo. We pick the use case most likely to pay, prove it on your real data in two weeks, then ship it with the guardrails a live service needs.",
    href: "/ai",
    link: "Practical AI",
  },
  {
    code: "GAP 02",
    title: "Software that stays solid",
    body: "AI writes code faster than teams can review it. We keep AI-assisted work scoped, approved and evidenced with EmberNest, so speed doesn't turn into mess.",
    href: "/ai/embernest",
    link: "Governed delivery",
  },
  {
    code: "GAP 03",
    title: "AI costs you can defend",
    body: "Token prices keep falling and bills keep rising. We measure the cost per outcome, cut the spend that buys nothing and set budgets that hold as usage grows.",
    href: "/ai/tokenomics",
    link: "AI tokenomics",
  },
  {
    code: "GAP 04",
    title: "Found when AI answers first",
    body: "Fewer people click through from search now. We make brands, sites and content that people remember and AI tools can understand, cite and point to.",
    href: "/services/websites",
    link: "Brand and web",
  },
];

const offers = [
  {
    code: "MK 01",
    name: "Sprint",
    duration: "2 weeks",
    body: "From a loose idea to something you can click, test and put in front of your board. Brand direction, product shape and a working prototype.",
    youGet: ["Clickable prototype", "Brand direction", "Build plan and costs"],
  },
  {
    code: "MK 02",
    name: "Build",
    duration: "6 to 12 weeks",
    body: "We design, engineer and launch the first real version: an AI tool, a product, a website or a brand, live and in the hands of real users, with its running costs known.",
    youGet: ["Live product or site", "Design system", "Handover your team can run"],
  },
  {
    code: "MK 03",
    name: "Crew",
    duration: "Monthly",
    body: "A small senior team that keeps shipping after launch. Product, design, engineering and growth on a steady monthly rhythm.",
    youGet: ["Fortnightly releases", "Growth experiments", "One accountable lead"],
  },
];

const capabilities = [
  { code: "01", title: "Brand and identity", body: "Names, logos, voice and the visual system that holds it all together.", tags: ["Naming", "Identity", "Tone of voice"] },
  { code: "02", title: "Websites and platforms", body: "Fast, good-looking sites your team can update without calling us.", tags: ["Next.js", "Headless CMS", "SEO"] },
  { code: "03", title: "Digital products", body: "Apps, portals and marketplaces, from first sketch to paying users.", tags: ["Product design", "Web apps", "Marketplaces"] },
  { code: "04", title: "AI and automation", body: "Practical AI that removes real work, with sensible guardrails from day one.", tags: ["AI features", "Agents", "Workflow automation"] },
  { code: "05", title: "Growth and content", body: "Campaigns, content and the tracking to know what is actually working.", tags: ["Paid social", "Content", "Analytics"] },
  { code: "06", title: "Delivery leadership", body: "When it is bigger than a studio job, we lead the programme and the partners.", tags: ["Programme lead", "Multi-agency", "Governance"] },
];

const trackRecord = [
  { client: "Online wine retailer", what: "Customer website rebuilt on React and Node across several agencies.", result: "Faster checkout, 20% more sales" },
  { client: "UK energy supplier", what: "A new payments platform with a better customer experience.", result: "£250k a year saved, 38% fewer payment errors" },
  { client: "National housebuilder", what: "Photoreal AI that lets buyers place catalogue furniture into any room.", result: "AI in the sales journey" },
  { client: "Global outdoor advertising group", what: "A new advertising platform built end to end and wired into Google analytics.", result: "Full lifecycle, one team" },
];

const method = [
  { step: "Sketch", body: "Get the idea out of heads and onto paper. Fast and cheap." },
  { step: "Make", body: "Build the real thing in short cycles you can see." },
  { step: "Ship", body: "Put it in front of real people, then fix what they find." },
  { step: "Grow", body: "Measure, improve and hand over cleanly when you're ready." },
];

/* ------------------------------------------------------------------ */
/* Small building blocks                                               */
/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

const Home = memo(function Home({ onOpenConsultation }: HomeProps) {
  const [heroRef, heroVisible] = useReveal(0.05);
  const [statsRef, statsVisible] = useReveal();
  const [gapsRef, gapsVisible] = useReveal();
  const [madeRef, madeVisible] = useReveal();
  const [offersRef, offersVisible] = useReveal();
  const [capsRef, capsVisible] = useReveal();
  const [recordRef, recordVisible] = useReveal();
  const [ctaRef, ctaVisible] = useReveal();

  return (
    <PageShell>
      <div className="bg-[#181F4F] text-white">
        {/* ============================ HERO ============================ */}
        <section ref={heroRef} className="bmk-chalk-grid relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 85% 15%, rgba(96, 38, 106, 0.35) 0%, transparent 55%), radial-gradient(circle at 10% 90%, rgba(248, 92, 112, 0.10) 0%, transparent 50%)",
            }}
          />
          <Container className="relative z-10 pb-16 pt-14 lg:pb-24 lg:pt-20">
            <div className="grid grid-cols-1 items-end gap-12 lg:grid-cols-12">
              <div className="min-w-0 lg:col-span-7" style={revealStyle(heroVisible)}>
                <div className="mb-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.14em] text-white/55">
                  <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-[#F85C70]" />
                  Studio open · taking on new work
                </div>
                <h1 className="font-display text-[2.6rem] font-extrabold uppercase leading-[0.9] tracking-[-0.025em] [font-stretch:120%] sm:text-6xl lg:text-[4.4rem] xl:text-[4.9rem]">
                  AI is everywhere. Results aren&apos;t.
                  <span className="mt-3 block text-[#F85C70]">We make them real.</span>
                </h1>
                <Text variant="lead" tone="white-80" className="mt-8 max-w-[36rem]">
                  bmkrs is a small team of senior makers. We design, build and run practical AI,
                  digital products and brands, and we make sure each one earns its keep: in what it
                  costs, how well it works and what it changes for your business. In short cycles
                  you can see from week one.
                </Text>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <AmpButton asChild size="md" data-testid="button-hero-build">
                    <Link href="/contact">
                      Let&apos;s build something <ArrowRight className="h-4 w-4" />
                    </Link>
                  </AmpButton>
                  <AmpButton asChild size="md" variant="outlineLight" data-testid="button-hero-made">
                    <a href="#picture">See the picture right now</a>
                  </AmpButton>
                </div>
              </div>

              <div className="min-w-0 lg:col-span-5" style={revealStyle(heroVisible, 0.15)}>
                <div className="grid grid-cols-2 gap-3 [grid-template-rows:minmax(0,1fr)_minmax(0,0.62fr)] h-[440px] sm:h-[520px] lg:h-[560px]">
                  {heroFigures.map((f, i) => (
                    <figure
                      key={f.label}
                      className={`bmk-tile group relative overflow-hidden ${
                        i === 0 ? "col-span-2" : ""
                      }`}
                    >
                      <Image
                        src={f.img}
                        alt={f.alt}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <figcaption className="absolute left-0 top-0 bg-[#181F4F]/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                        {f.label}
                      </figcaption>
                      <Corners />
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </Container>
          <Container className="relative z-10">
            <div className="bmk-ruler" aria-hidden />
          </Container>
        </section>

        {/* ===================== THE PICTURE RIGHT NOW ===================== */}
        <section id="picture" ref={statsRef} className="border-b border-white/10 bg-[#141a44] py-20 lg:py-28">
          <Container>
            <SectionHead
              code="§ 01"
              eyebrow="The picture right now"
              title={<>Adoption is racing ahead. <span className="text-[#F85C70]">Results are not.</span></>}
              lead="We keep a close eye on the research, because it shapes what's worth building. The pattern is clear: almost everyone is trying AI, far fewer are getting value, trust or control from it. That gap is where most of our work sits."
            />
            <StatGrid items={landscape} visible={statsVisible} />
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">{statsFootnote}</p>
          </Container>
        </section>

        {/* ========================= WHERE WE HELP ========================= */}
        <section ref={gapsRef} className="py-20 lg:py-28">
          <Container>
            <SectionHead
              code="§ 02"
              eyebrow="Where we come in"
              title={<>Four gaps we close.</>}
              lead="Each one shows up in the numbers above, and each one has a fix that's practical, measurable and quicker than most people expect."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {gaps.map((g, i) => (
                <Link key={g.code} href={g.href} className="group block">
                  <BmkCard className="flex h-full flex-col p-7 lg:p-9" style={revealStyle(gapsVisible, i * 0.08)}>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#F85C70]">{g.code}</span>
                    <h3 className="mt-6 font-display text-2xl font-extrabold uppercase tracking-[-0.02em] [font-stretch:115%] lg:text-3xl">
                      {g.title}
                    </h3>
                    <Text variant="body" tone="white-75" className="mt-4 flex-1">
                      {g.body}
                    </Text>
                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-white/70 transition-all group-hover:gap-3 group-hover:text-[#F85C70]">
                      {g.link} <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </BmkCard>
                </Link>
              ))}
            </div>
          </Container>
        </section>

        {/* ======================== THREE WAYS IN ======================= */}
        <section ref={offersRef} className="border-t border-white/10 bg-[#141a44] py-20 lg:py-28">
          <Container>
            <SectionHead
              code="§ 03"
              eyebrow="Three ways to start"
              title={<>Pick a size. We&apos;ll pick up the tools.</>}
              lead="Every engagement ends with something you can use, not a report about something you might do."
            />
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
              {offers.map((o, i) => (
                <BmkCard
                  key={o.code}
                  className="flex flex-col p-8 lg:p-10"
                  style={revealStyle(offersVisible, i * 0.08)}
                >
                  <div className="mb-8 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                    <span className="text-white/45">{o.code}</span>
                    <span className="text-[#F85C70]">{o.duration}</span>
                  </div>
                  <h3 className="bmk-outline-text whitespace-nowrap font-display text-5xl font-black uppercase leading-none tracking-[-0.03em] [font-stretch:120%] transition-colors duration-300 group-hover:text-white lg:text-[3.25rem] xl:text-6xl">
                    {o.name}
                  </h3>
                  <Text variant="body" tone="white-75" className="mt-6 flex-1">
                    {o.body}
                  </Text>
                  <div className="mt-8 border-t border-white/10 pt-5">
                    <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] text-white/45">You walk away with</p>
                    <ul className="space-y-2">
                      {o.youGet.map((g) => (
                        <li key={g} className="flex items-center gap-3 text-sm text-white/85">
                          <span className="h-px w-4 bg-[#F85C70]" aria-hidden />
                          {g}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenConsultation(o.name)}
                    className="mt-8 inline-flex items-center gap-2 self-start text-sm font-semibold text-[#F85C70] transition-all hover:gap-3"
                  >
                    Start a {o.name} <ArrowRight className="h-4 w-4" />
                  </button>
                </BmkCard>
              ))}
            </div>
          </Container>
        </section>

        {/* ========================= MANIFESTO ========================== */}
        <section className="relative overflow-hidden border-t border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative min-h-[320px] lg:min-h-[520px]">
              <Image
                src={imgWorkshop}
                alt="A team mapping ideas on sticky notes on a glass wall"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#181F4F]/60" aria-hidden />
              <span className="absolute left-0 top-0 bg-[#181F4F]/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                FIG. 04 / THE WORK
              </span>
            </div>
            <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <Eyebrow className="mb-6">How we think</Eyebrow>
                <p className="font-display text-4xl font-extrabold uppercase leading-[0.95] tracking-[-0.02em] [font-stretch:118%] lg:text-6xl">
                  We&apos;d rather <span className="text-[#F85C70]">show you</span> than tell you.
                </p>
                <Text variant="lead" tone="white-75" className="mt-8">
                  Decks are cheap. Working software, a brand you can hold up, an AI tool that
                  saves someone an hour a day: that is how you know it is real. So that is what we
                  put in front of you, early and often.
                </Text>
              </div>
            </div>
          </div>
        </section>

        {/* ========================= CAPABILITIES ======================= */}
        <section id="services" ref={capsRef} className="border-t border-white/10 py-20 lg:py-28">
          <Container>
            <SectionHead
              code="§ 04"
              eyebrow="What we make"
              title={<>Six disciplines. One senior team.</>}
              action={
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all hover:gap-3"
                >
                  All services <ArrowRight className="h-3 w-3" />
                </Link>
              }
            />
            <div className="grid grid-cols-1 border-l border-t border-white/10 sm:grid-cols-2 lg:grid-cols-3">
              {capabilities.map((c, i) => (
                <div
                  key={c.code}
                  className="group relative border-b border-r border-white/10 p-8 transition-colors duration-300 hover:bg-white/[0.03] lg:p-10"
                  style={revealStyle(capsVisible, i * 0.06)}
                >
                  <span
                    aria-hidden
                    className="absolute left-0 top-0 h-[2px] w-0 bg-[#F85C70] transition-all duration-500 group-hover:w-full"
                  />
                  <span className="font-mono text-xs tracking-[0.14em] text-[#F85C70]">BMK {c.code}</span>
                  <h3 className="mt-5 font-display text-2xl font-bold tracking-[-0.01em] [font-stretch:110%]">
                    {c.title}
                  </h3>
                  <Text variant="small" tone="white-70" className="mt-3">
                    {c.body}
                  </Text>
                  <SpecTags tags={c.tags} className="mt-6" />
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* ===================== THINGS WE'VE MADE ===================== */}
        <section id="made" ref={madeRef} className="border-t border-white/10 py-20 lg:py-28">
          <Container>
            <SectionHead
              code="§ 05"
              eyebrow="On the bench"
              title={<>We build our own products too.</>}
              lead="The best way to stay sharp is to have skin in the game. These are ours: designed, built and run by the same people who work on yours, so we live with the same costs and trade-offs you do."
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {ownProducts.map((p, i) => {
                const inner = (
                  <BmkCard
                    className="flex h-full flex-col p-7 lg:p-8"
                    style={revealStyle(madeVisible, i * 0.08)}
                  >
                    <div className="mb-10 flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.14em]">
                      <span className="text-[#F85C70]">{p.code}</span>
                      <span className="text-white/45">{p.kind}</span>
                    </div>
                    <h3 className="font-display text-3xl font-extrabold uppercase tracking-[-0.02em] [font-stretch:115%] lg:text-4xl">
                      {"display" in p && p.display ? p.display : p.name}
                    </h3>
                    <Text variant="small" tone="white-70" className="mt-4 flex-1">
                      {p.body}
                    </Text>
                    <span className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-white/70 transition-colors group-hover:text-[#F85C70]">
                      {p.href ? (
                        <>
                          Visit {p.href.replace("https://", "")} <ArrowUpRight className="h-3.5 w-3.5" />
                        </>
                      ) : (
                        <>Rebuild in progress</>
                      )}
                    </span>
                  </BmkCard>
                );
                return p.href ? (
                  <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className="group block">
                    {inner}
                  </a>
                ) : (
                  <div key={p.name} className="group">
                    {inner}
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* ========================== METHOD =========================== */}
        <section className="border-t border-white/10 bg-[#141a44] py-16 lg:py-20">
          <Container>
            <div className="mb-10 flex items-center gap-4">
              <span className="font-mono text-xs tracking-[0.12em] text-white/40">§ 06</span>
              <Eyebrow>The method</Eyebrow>
            </div>
            <ol className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
              {method.map((m, i) => (
                <li key={m.step} className="relative lg:pr-8">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#F85C70] font-mono text-xs text-[#F85C70]">
                      {i + 1}
                    </span>
                    {i < method.length - 1 && <SnapLine className="hidden flex-1 lg:block" />}
                  </div>
                  <h3 className="font-display text-3xl font-extrabold uppercase tracking-[-0.02em] [font-stretch:118%]">
                    {m.step}
                  </h3>
                  <Text variant="small" tone="white-70" className="mt-2 max-w-[16rem]">
                    {m.body}
                  </Text>
                </li>
              ))}
            </ol>
          </Container>
        </section>

        {/* ======================== TRACK RECORD ======================== */}
        <section ref={recordRef} className="border-t border-white/10 py-20 lg:py-28">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <div className="mb-8 flex items-center gap-4">
                  <span className="font-mono text-xs tracking-[0.12em] text-white/40">§ 07</span>
                  <SnapLine className="flex-1" />
                </div>
                <Eyebrow className="mb-4">Where we&apos;ve shipped before</Eyebrow>
                <Text variant="h2" tone="white" className="text-3xl md:text-4xl lg:text-5xl">
                  Big programmes, live and proven.
                </Text>
                <Text variant="lead" tone="white-70" className="mt-5">
                  Before bmkrs, people on this team led delivery for well-known names in
                  retail, energy, housebuilding and media. Different sectors, same habit: get it
                  built, get it live, prove it worked.
                </Text>
                <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden lg:block">
                  <Image src={imgMesh} alt="Abstract violet data mesh" fill sizes="40vw" className="object-cover" />
                  <span className="absolute left-0 top-0 bg-[#181F4F]/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                    FIG. 05 / SIGNAL
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <ul className="border-t border-white/10">
                  {trackRecord.map((r, i) => (
                    <li
                      key={r.client}
                      className="group grid grid-cols-1 gap-3 border-b border-white/10 py-8 sm:grid-cols-12 sm:gap-6"
                      style={revealStyle(recordVisible, i * 0.08)}
                    >
                      <span className="font-mono text-xs tracking-[0.14em] text-white/40 sm:col-span-1">
                        0{i + 1}
                      </span>
                      <div className="sm:col-span-6">
                        <h3 className="font-display text-2xl font-extrabold uppercase tracking-[-0.01em] [font-stretch:112%] transition-colors group-hover:text-[#F85C70]">
                          {r.client}
                        </h3>
                        <Text variant="small" tone="white-70" className="mt-2">
                          {r.what}
                        </Text>
                      </div>
                      <p className="self-center font-mono text-xs uppercase leading-relaxed tracking-[0.1em] text-[#F85C70] sm:col-span-5 sm:text-right">
                        {r.result}
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.12em] text-white/40">
                  Programmes led by members of the bmkrs team in previous roles.
                </p>
              </div>
            </div>
          </Container>
        </section>

        {/* =========================== WHY ============================= */}
        <section className="border-t border-white/10 bg-[#141a44] py-20 lg:py-24">
          <Container>
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <div className="relative aspect-square overflow-hidden">
                  <Image src={imgPortrait} alt="Smiling person in an orange jumper against a purple wall" fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" />
                  <span className="absolute left-0 top-0 bg-[#181F4F]/85 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-white/85">
                    FIG. 06 / YOU, LAUNCH DAY
                  </span>
                </div>
              </div>
              <div className="lg:col-span-7 lg:col-start-6">
                <Eyebrow className="mb-4">Why bmkrs</Eyebrow>
                <Text variant="h2" tone="white" className="text-3xl md:text-4xl lg:text-5xl">
                  Five people. All senior. All hands-on.
                </Text>
                <Text variant="lead" tone="white-75" className="mt-6">
                  Design, engineering, AI-assisted delivery, delivery leadership and commercial
                  each have a senior owner, and every one of us does the work. No account
                  managers in between, no bench of juniors learning on your budget.
                </Text>
                <Text variant="lead" tone="white-75" className="mt-4">
                  We&apos;re more hands-on than a consultancy and more joined-up than a build
                  shop. And because we run our own products, we know what it costs when something
                  doesn&apos;t work. We spend your money like it&apos;s ours.
                </Text>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#F85C70] transition-all hover:gap-3"
                >
                  Meet the team <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </div>
          </Container>
        </section>

        {/* ============================ CTA ============================ */}
        <section ref={ctaRef} className="bmk-chalk-grid relative overflow-hidden border-t border-white/10 py-24 lg:py-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% 120%, rgba(248, 92, 112, 0.25) 0%, transparent 60%)" }}
          />
          <Container className="relative z-10 text-center" >
            <div style={revealStyle(ctaVisible)}>
              <Eyebrow className="mb-8">Got an idea, or an AI pilot that&apos;s stuck?</Eyebrow>
              <p className="font-display text-5xl font-black uppercase leading-[0.88] tracking-[-0.03em] [font-stretch:125%] sm:text-7xl lg:text-[7.5rem]">
                <span className="bmk-outline-text block">Let&apos;s build</span>
                <span className="block text-[#F85C70]">something.</span>
              </p>
              <Text variant="lead" tone="white-75" className="mx-auto mt-10 max-w-xl">
                No pitch deck. A 30-minute call, an honest view of where to start, and a rough
                price before you hang up.
              </Text>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <AmpButton asChild size="md" data-testid="button-final-cta">
                  <Link href="/contact">
                    Book the call <ArrowRight className="h-4 w-4" />
                  </Link>
                </AmpButton>
                <a
                  href="mailto:hello@bmkrs.com"
                  className="font-mono text-sm uppercase tracking-[0.12em] text-white/70 underline-offset-4 hover:text-white hover:underline"
                >
                  hello@bmkrs.com
                </a>
              </div>
            </div>
          </Container>
        </section>
      </div>
    </PageShell>
  );
});

export default Home;
