export type AuthorBio = {
  slug: string;
  name: string;
  discipline: string;
  footer: string;
  long: string;
};

export const authorBios: AuthorBio[] = [
  {
    slug: "marcus",
    name: "marcus",
    discipline: "voice + messaging",
    footer:
      "marcus leads voice and messaging at bmkrs. he came up through broadcast, which is why every line he writes has to survive being said out loud.",
    long: "marcus runs voice and messaging. before bmkrs he worked in broadcast, where you learn fast that nobody owes you their attention. he defines how brands sound, what they say, and the banned list of words they are never allowed near. his test for every line: would a real person say it, and would another real person repeat it?",
  },
  {
    slug: "sarah",
    name: "sarah",
    discipline: "brand + identity",
    footer:
      "sarah leads brand and identity at bmkrs. she builds visual worlds from positioning outwards, never the other way round.",
    long: "sarah runs brand and identity. strategy and positioning first, naming second, the visual world last, because design that starts before the thinking is just decoration. she has built identities for brands at launch and brands mid-reinvention, and she will tell you honestly when you do not need a rebrand at all.",
  },
  {
    slug: "george",
    name: "george",
    discipline: "pr + communications",
    footer:
      "george leads pr and communications at bmkrs. he would rather find the one right journalist than blast a hundred wrong ones.",
    long: "george runs pr and communications. launches, press, founder profile, thought leadership. his approach is angle-first: work out the one story a journalist actually wants, find the right person, and earn the coverage rather than spraying for it. the result is fewer releases and more pieces that move the business.",
  },
  {
    slug: "melissa",
    name: "melissa",
    discipline: "product + growth",
    footer:
      "melissa leads product and growth at bmkrs. she ships the websites, apps and campaigns that turn the brand work into revenue.",
    long: "melissa runs product, web and growth. she builds what carries the brand: websites, ecommerce, apps, and the performance marketing behind them. every campaign she runs has one primary objective and a straight answer on whether it hit. she is the reason bmkrs can promise the whole journey, not just the identity at the start of it.",
  },
];

const bySlug = new Map(authorBios.map((a) => [a.slug, a]));

export function authorBioForName(name: string): AuthorBio | undefined {
  const slug = name.toLowerCase().split(" ")[0];
  return bySlug.get(slug);
}
