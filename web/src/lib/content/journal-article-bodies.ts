import type { PortableBlock } from "@/lib/types";

type Section = { type: "p" | "h2" | "quote"; text: string };

function blocks(sections: Section[]): PortableBlock[] {
  return sections.map((s) => {
    if (s.type === "h2") return { _type: "heading" as const, text: s.text };
    if (s.type === "quote") return { _type: "pullQuote" as const, text: s.text };
    return { _type: "block" as const, children: [{ text: s.text }] };
  });
}

export const weakBrandPaidGrowthBody = blocks([
  {
    type: "p",
    text: "every founder who comes to us worried about growth wants to talk about channels. which platform, which budget, which agency, which clever tactic. almost none of them want to talk about the brand. that is usually the problem.",
  },
  {
    type: "p",
    text: "paid acquisition is a tax you pay for being unknown. the less people recognise you, the more it costs to make them click, and the more it costs again to make them buy. you can be excellent at media buying and still lose money, because you are paying full price for attention that a stronger brand would get for free.",
  },
  { type: "h2", text: "what a weak brand actually costs" },
  {
    type: "p",
    text: "a weak brand does not show up as a line on your p&l, so it is easy to ignore. it shows up everywhere else.",
  },
  {
    type: "p",
    text: "it shows up in your cost per acquisition, because cold audiences need more touches before they trust you. it shows up in your conversion rate, because people land on a page they do not understand and leave. it shows up in retention, because there is nothing to be loyal to beyond the last discount. and it shows up in price, because a brand nobody believes in competes on one thing only, and that thing is cost.",
  },
  {
    type: "p",
    text: "you can spend your way around each of these for a while. it is just expensive, and it stops working the moment you stop paying.",
  },
  { type: "h2", text: "the brand does the work paid cannot" },
  {
    type: "p",
    text: "here is what a strong brand does that no campaign can buy. it makes the click cheaper, because people already half-know you. it makes the landing page convert, because the promise is clear before they arrive. it makes the second purchase happen without a voucher. and it lets you charge more, because people are not buying the cheapest option, they are buying the one they trust.",
  },
  {
    type: "p",
    text: "that is the difference between renting attention and owning it. performance marketing rents. a brand owns.",
  },
  { type: "h2", text: "brand-led, growth-built" },
  {
    type: "p",
    text: "this is why we build the brand first and the growth engine second, in that order, with the same team. not because strategy decks are nice to have, but because every pound you spend acquiring customers works harder when the brand underneath it is clear, distinct, and believed.",
  },
  {
    type: "p",
    text: "we set a primary objective for every campaign and measure whether we hit it. but we do not start with the campaign. we start with the reason anyone should choose you at all, get that right, and then put spend behind something that actually converts.",
  },
  {
    type: "p",
    text: "growth is not a media problem you can outspend. it is a brand problem you have to solve first. solve it, and the channels finally start paying you back.",
  },
  {
    type: "p",
    text: "if your acquisition costs keep climbing and you cannot work out why, the answer is probably not a new channel. let's talk.",
  },
]);

export const rebrandBusinessDecisionBody = blocks([
  {
    type: "p",
    text: "most rebrands are a new coat of paint on the same house. new logo, new colours, a fresh font, a launch post, and three months later nothing about the business has actually changed. the company looks different and behaves exactly as it did before.",
  },
  {
    type: "p",
    text: "that is not a rebrand. that is redecorating. and it is why so many of them quietly fail to pay for themselves.",
  },
  { type: "h2", text: "the look is the last thing, not the first" },
  {
    type: "p",
    text: "a brand is not how you look. it is what you stand for, who you are for, and what you refuse to do. the visual identity is how that gets expressed, but it comes at the end of the thinking, not the start. when a rebrand begins with \"we need a new logo\", it has already skipped the only part that matters.",
  },
  {
    type: "p",
    text: "we get under the skin of the business before we make a single thing. what has changed about the company, the market, or the ambition that the current brand can no longer carry? if nothing has changed, you probably do not need a rebrand. you need a tidy-up, and we will tell you so.",
  },
  { type: "h2", text: "what a real rebrand moves" },
  {
    type: "p",
    text: "a rebrand worth doing changes things you can measure.",
  },
  {
    type: "p",
    text: "it changes what you can charge, because a clearer, more confident brand competes on value instead of price. it changes who you attract, because the right positioning repels the wrong customers as deliberately as it draws the right ones. it changes what you can say no to, because a brand with a point of view has the standing to turn down work, partners, and features that do not fit. and it changes how the company talks about itself, top to bottom, because everyone finally agrees on what it is.",
  },
  {
    type: "p",
    text: "if a rebrand does none of these, the colours did not matter.",
  },
  { type: "h2", text: "the test before you start" },
  {
    type: "p",
    text: "before committing to a rebrand, answer one question honestly. what do we want to be true about this business in two years that is not true today? if you can answer that, you have a brief worth building from. if the only answer is \"look more modern\", save your money.",
  },
  {
    type: "p",
    text: "a rebrand is one of the few moments a company gets to reset what people expect of it. treat it like the business decision it is, and the design will have something real to express.",
  },
  {
    type: "p",
    text: "thinking about a rebrand and not sure it is the right call? we would rather tell you straight than sell you a logo. let's talk.",
  },
]);

export const bannedWordsBody = blocks([
  {
    type: "p",
    text: "open any ten startup websites and you will read the same sentence ten times. we are a passionate, world-class team building cutting-edge, best-in-class solutions that leverage innovation to deliver seamless, game-changing experiences. it is technically english. it says nothing. and it makes every company sound exactly like every other company.",
  },
  {
    type: "p",
    text: "that is the problem with filler words. they feel safe because everyone uses them, and that is precisely why they fail. a word that fits every brand describes none of them.",
  },
  { type: "h2", text: "why we keep a banned list" },
  {
    type: "p",
    text: "when we define a voice, we write down the words your brand is not allowed to use. not as a gimmick, but because what you refuse to say shapes how you sound as much as what you choose to say. a banned list forces specifics. take away \"world-class\" and you have to explain what you are actually good at. take away \"seamless\" and you have to describe what the experience actually feels like.",
  },
  {
    type: "p",
    text: "the constraint does the work. remove the easy words and the real ones have to show up.",
  },
  { type: "h2", text: "the usual suspects" },
  {
    type: "p",
    text: "some words earn a place on almost every list we write. leverage, when you mean use. solutions, when you mean the actual thing you sell. passionate, which every company claims and no customer believes. innovative, which is for others to decide, not for you to assert. seamless, frictionless, effortless, the whole family of words that promise nothing happens. and the adjective pile-up, world-class best-in-class cutting-edge, where three empty words stand in for one true one.",
  },
  {
    type: "p",
    text: "none of these are banned because they are ugly. they are banned because they are everywhere, and everywhere is the opposite of distinct.",
  },
  { type: "h2", text: "what goes in their place" },
  {
    type: "p",
    text: "the replacement is never another clever word. it is a specific one. instead of \"we deliver seamless solutions\", say what the product does and who it does it for. instead of \"passionate team\", show the work. instead of \"world-class\", name the thing you are world-class at and let the reader conclude it themselves.",
  },
  {
    type: "p",
    text: "clear beats clever. specific beats grand. a brand that says one true, plain thing will always cut through a market shouting the same impressive nothing.",
  },
  {
    type: "p",
    text: "every brand already has a banned list. most have just never written it down, which is why they keep reaching for the same tired words by accident. we write it down on purpose, so your product sounds like itself and like no one else.",
  },
  {
    type: "p",
    text: "want your brand to stop sounding like the homepage of every competitor you have? let's talk.",
  },
]);
