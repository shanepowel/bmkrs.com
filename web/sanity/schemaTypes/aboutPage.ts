import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "intro", title: "Intro line", type: "text", rows: 3 }),
    defineField({
      name: "founderStoryTitle",
      title: "Founder story heading",
      type: "string",
    }),
    defineField({
      name: "founderStory",
      title: "Founder story (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 4 }],
    }),
    defineField({
      name: "founderPullQuote",
      title: "Founder pull quote",
      type: "text",
      rows: 2,
    }),
    defineField({ name: "teamIntro", title: "Team intro", type: "text", rows: 3 }),
    defineField({ name: "teamClosing", title: "Team closing line", type: "string" }),
    defineField({
      name: "beliefsHeadline",
      title: "Beliefs heading",
      type: "string",
    }),
    defineField({
      name: "beliefs",
      title: "Beliefs",
      type: "array",
      of: [
        {
          type: "object",
          name: "belief",
          fields: [
            { name: "title", title: "Belief", type: "string" },
            { name: "body", title: "Detail", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        },
      ],
    }),
    defineField({
      name: "studioProductCount",
      title: "Live studio products",
      description: "Shown in the numbers row on the about page.",
      type: "number",
      validation: (r) => r.min(0),
    }),
    defineField({ name: "longGame", title: "The long game", type: "text", rows: 5 }),
    defineField({
      name: "longGameTitle",
      title: "Long game heading",
      type: "string",
    }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});
