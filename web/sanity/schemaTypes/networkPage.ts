import { defineField, defineType } from "sanity";

export const networkPage = defineType({
  name: "networkPage",
  title: "Network page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "intro", title: "Intro line", type: "text", rows: 2 }),
    defineField({ name: "whatItIs", title: "What it is", type: "text", rows: 4 }),
    defineField({
      name: "forCompanies",
      title: "For companies",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "cta", title: "CTA label", type: "string", initialValue: "find talent" },
      ],
    }),
    defineField({
      name: "forSpecialists",
      title: "For specialists",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "cta", title: "CTA label", type: "string", initialValue: "join the network" },
      ],
    }),
    defineField({
      name: "connects",
      title: "How it connects (studio bridge)",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta title", type: "string" },
        { name: "metaDescription", title: "Meta description", type: "string" },
      ],
    }),
  ],
  preview: { prepare: () => ({ title: "Network page" }) },
});
