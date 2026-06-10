import {
  bannedWordsBody,
  rebrandBusinessDecisionBody,
  weakBrandPaidGrowthBody,
} from "./journal-article-bodies";
import type { JournalPost } from "@/lib/types";
import { journalCoverByCategory, type JournalCoverCategory } from "@/lib/marketing-assets";

function post(
  entry: Omit<JournalPost, "cover"> & { category: JournalCoverCategory },
): JournalPost {
  const { category, ...rest } = entry;
  return { ...rest, category, cover: { ...journalCoverByCategory[category], alt: rest.title } };
}

/** Mirrors sanity/seed/posts.ndjson when CMS is empty. */
export const fallbackPosts: JournalPost[] = [
  post({
    slug: "better-told-brand-isnt-fair",
    title: "the better-told brand wins. that isn't fair.",
    category: "voice",
    excerpt:
      "the best product does not win. the best-told one does. you can be annoyed about it, or you can use it.",
    publishedAt: "2026-05-28",
    readingTime: 2,
    featured: true,
    author: { name: "marcus", discipline: "voice + messaging" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "the best product does not win. the best-told one does. we learned this the hard way, watching genuinely better things lose to worse things with a clearer story and a tighter logo.",
          },
        ],
      },
      { _type: "pullQuote", text: "a better-told brand is not a louder one. it is a clearer one." },
    ],
    relatedProduct: { name: "story", slug: "story", tagline: "tone of voice, messaging and narrative." },
    seo: {
      metaDescription: "the best product does not win, the best-told one does. why that is a solvable problem.",
    },
  }),
  post({
    slug: "weak-brand-paid-growth",
    title: "you cannot performance-market your way out of a weak brand.",
    category: "growth",
    excerpt:
      "paid acquisition gets more expensive every year. a brand people already trust is the only cost that goes down. growth starts with the brand, not the channel.",
    publishedAt: "2026-06-03",
    readingTime: 5,
    author: { name: "shane", discipline: "delivery + strategy" },
    body: weakBrandPaidGrowthBody,
    relatedProduct: {
      name: "motion plus",
      slug: "motion-plus",
      tagline: "growth and an always-on pr engine for brands actively scaling.",
    },
    seo: {
      metaDescription:
        "paid acquisition gets more expensive every year. a brand people already trust is the only cost that goes down.",
    },
  }),
  post({
    slug: "rebrand-business-decision",
    title: "a rebrand is a business decision, not a paint job.",
    category: "brand",
    excerpt:
      "most rebrands fail because they change the look and nothing else. a real rebrand changes what the business can charge, sell, and say no to.",
    publishedAt: "2026-05-27",
    readingTime: 4,
    author: { name: "sarah", discipline: "brand + identity" },
    body: rebrandBusinessDecisionBody,
    relatedProduct: { name: "rebrand", slug: "rebrand", tagline: "a sharper position and a fresh identity." },
    seo: {
      metaDescription:
        "most rebrands fail because they change the look and nothing else. a real rebrand changes what the business can charge, sell, and say no to.",
    },
  }),
  post({
    slug: "banned-words",
    title: "the words we will not let your brand say.",
    category: "voice",
    excerpt:
      "every brand has a banned list, whether it writes one down or not. ours exists so your product never sounds like everyone else's.",
    publishedAt: "2026-05-21",
    readingTime: 4,
    author: { name: "marcus", discipline: "voice + messaging" },
    body: bannedWordsBody,
    relatedProduct: { name: "story", slug: "story", tagline: "tone of voice, messaging and narrative." },
    seo: {
      metaDescription:
        "every brand has a banned list. ours exists so your product never sounds like everyone else's.",
    },
  }),
  post({
    slug: "delivery-not-design",
    title: "we came from delivery, not design. it shows.",
    category: "studio",
    excerpt:
      "most brand agencies are creatives who picked up commercial sense. we are the other way round, and it changes the work.",
    publishedAt: "2026-05-21",
    readingTime: 2,
    author: { name: "shane", discipline: "delivery + strategy" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "we spent years inside large, regulated organisations, building the teams and delivery that made hard things ship. then we pointed the same rigour at brand.",
          },
        ],
      },
      { _type: "pullQuote", text: "we make beautiful things that ship and keep working. that is a different promise." },
    ],
    relatedProduct: { name: "motion", slug: "motion", tagline: "one team keeping your brand moving, month after month." },
    seo: {
      metaDescription:
        "a brand company run by builders, not designers, and what that changes about the work.",
    },
  }),
  post({
    slug: "naming-is-positioning",
    title: "naming is a positioning decision, not a creative one.",
    category: "brand",
    excerpt:
      "the right name is rarely the cleverest. it is the one that does the most positioning work with the least explaining.",
    publishedAt: "2026-05-14",
    readingTime: 2,
    author: { name: "sarah", discipline: "brand + identity" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "teams agonise over names like they are tattoos. the real question is not whether you love it, but what it makes a stranger assume before they read a word of copy.",
          },
        ],
      },
      { _type: "pullQuote", text: "a name that needs a tagline to make sense is doing half its job." },
    ],
    relatedProduct: { name: "launch kit", slug: "launch-kit", tagline: "everything a new brand needs to go live." },
    seo: {
      metaDescription: "why the best brand name is a positioning decision wearing a creative costume.",
    },
  }),
  post({
    slug: "bold-is-boring",
    title: "\"bold\" is the most boring word in branding.",
    category: "brand",
    excerpt: "every studio promises bold brands. ours used to. then we heard how little it actually means.",
    publishedAt: "2026-05-07",
    readingTime: 2,
    author: { name: "sarah", discipline: "brand + identity" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "bold is what you write when you have not decided what you actually stand for. it is a feeling, not a position, and it cannot be wrong, which is exactly why it is useless.",
          },
        ],
      },
      { _type: "pullQuote", text: "a brand that rules nothing out has chosen nothing." },
    ],
    relatedProduct: { name: "brand check", slug: "brand-check", tagline: "a one-week teardown of brand, voice and site." },
    seo: { metaDescription: "why bold is the emptiest word in branding, and what to say instead." },
  }),
  post({
    slug: "hand-off-brands-die",
    title: "the hand-off is where brands go to die.",
    category: "studio",
    excerpt: "four suppliers, four versions of you. every hand-off loses something. the one-team argument, made plainly.",
    publishedAt: "2026-04-30",
    readingTime: 2,
    author: { name: "melissa", discipline: "product + engineering" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "a strategy firm writes a deck. a design studio interprets it. a pr agency never reads it. a web team rebuilds the look from a screenshot. by the time it reaches the customer, the brand is a game of telephone.",
          },
        ],
      },
      { _type: "pullQuote", text: "hand-offs are where good work quietly degrades." },
    ],
    relatedProduct: { name: "motion", slug: "motion", tagline: "one team keeping your brand moving, month after month." },
    seo: { metaDescription: "why every agency hand-off loses something, and the case for one team." },
  }),
  post({
    slug: "one-journalist",
    title: "one journalist beats a hundred press releases.",
    category: "pr",
    excerpt: "most pr is busywork dressed up as activity. the angle and the right person beat volume every time.",
    publishedAt: "2026-04-23",
    readingTime: 2,
    author: { name: "george", discipline: "pr + communications" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "a release goes out to five hundred people, answering a question none of them asked, and lands nowhere. then someone reports the open rate as if it were a result.",
          },
        ],
      },
      { _type: "pullQuote", text: "one placement in the right place beats a hundred nobody opens." },
    ],
    relatedProduct: { name: "press launch", slug: "press-launch", tagline: "a launch campaign and press push." },
    seo: { metaDescription: "why targeted pr beats the blast: the angle and the right journalist over volume." },
  }),
  post({
    slug: "numbers-that-flatter",
    title: "stop measuring the numbers that flatter you.",
    category: "growth",
    excerpt:
      "every dashboard has a comfort metric. it goes up and to the right and rarely connects to anything that pays the bills.",
    publishedAt: "2026-04-16",
    readingTime: 2,
    author: { name: "shane", discipline: "delivery + strategy" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "impressions, followers, reach. they feel like progress and rarely connect to anything that pays the bills. the harder numbers are the honest ones.",
          },
        ],
      },
      { _type: "pullQuote", text: "if a number cannot change a decision, it is decoration." },
    ],
    relatedProduct: { name: "motion plus", slug: "motion-plus", tagline: "growth and an always-on pr engine." },
    seo: {
      metaDescription: "why vanity metrics flatter you, and which numbers actually deserve a dashboard.",
    },
  }),
  post({
    slug: "product-needs-a-paragraph",
    title: "if your product needs a paragraph, the brand isn't finished.",
    category: "voice",
    excerpt:
      "ask three people to explain what you do. three different paragraphs means an unfinished brand at the centre.",
    publishedAt: "2026-04-09",
    readingTime: 2,
    author: { name: "marcus", discipline: "voice + messaging" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "clarity is not a nice-to-have you bolt on with better copy. it is the work. a product that takes a paragraph to explain loses to a worse one that takes a sentence.",
          },
        ],
      },
      { _type: "pullQuote", text: "the sentence is the asset. everything else is decoration hung on it." },
    ],
    relatedProduct: { name: "story", slug: "story", tagline: "tone of voice, messaging and narrative." },
    seo: { metaDescription: "if it takes a paragraph to explain your product, the brand is not finished yet." },
  }),
  post({
    slug: "rebrand-keep-equity",
    title: "a rebrand should keep what people already paid attention to.",
    category: "brand",
    excerpt: "the most expensive mistake in a rebrand is binning the one asset that was actually working.",
    publishedAt: "2026-04-02",
    readingTime: 2,
    author: { name: "sarah", discipline: "brand + identity" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "a rebrand is not a fresh start. it is a careful edit: find the few things that earned recognition, keep them, and rebuild everything around them.",
          },
        ],
      },
      { _type: "pullQuote", text: "if customers do not recognise you the morning after, you did not rebrand." },
    ],
    relatedProduct: { name: "rebrand", slug: "rebrand", tagline: "a sharper position and a fresh identity." },
    seo: {
      metaDescription: "why a good rebrand keeps the equity you already paid for, and edits rather than restarts.",
    },
  }),
  post({
    slug: "one-week-brand-check",
    title: "what one week of looking at your brand actually turns up.",
    category: "studio",
    excerpt:
      "people expect a polite audit. what they get is the list of things they already half-knew and had been avoiding.",
    publishedAt: "2026-03-26",
    readingTime: 2,
    author: { name: "shane", discipline: "delivery + strategy" },
    body: [
      {
        _type: "block",
        children: [
          {
            text: "the pattern repeats. the product is better than the brand makes it look. the site is built for the founder, not the buyer. and there is one obvious thing, fixable in a fortnight, quietly costing them customers.",
          },
        ],
      },
      {
        _type: "pullQuote",
        text: "it needs someone from outside to say it plainly, in order of what to fix first.",
      },
    ],
    relatedProduct: { name: "brand check", slug: "brand-check", tagline: "a one-week teardown of brand, voice and site." },
    seo: {
      metaDescription: "what a fixed one-week brand check actually finds, and why it is the cheapest useful thing we sell.",
    },
  }),
];
