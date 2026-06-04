import { defineField, defineType } from "sanity";

export const aboutPage = defineType({
  name: "aboutPage",
  title: "About page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "intro", title: "Intro line", type: "text", rows: 2 }),
    defineField({
      name: "story",
      title: "Story (paragraphs)",
      type: "array",
      of: [{ type: "text", rows: 3 }],
    }),
    defineField({ name: "whoWeAre", title: "Who we are", type: "text", rows: 4 }),
    defineField({ name: "whatWeLove", title: "What we love", type: "text", rows: 4 }),
    defineField({ name: "ethos", title: "Ethos statement", type: "text", rows: 3 }),
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
    defineField({ name: "longGame", title: "The long game", type: "text", rows: 4 }),
    defineField({
      name: "inOwnWords",
      title: "In our own words",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
  preview: { prepare: () => ({ title: "About page" }) },
});
