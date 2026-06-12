import { defineField, defineType } from "sanity";

export const networkPage = defineType({
  name: "networkPage",
  title: "Network page",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "intro", title: "Intro line", type: "text", rows: 2 }),
    defineField({
      name: "members",
      title: "Bench wall: featured members",
      description:
        "Optional. Real members with permission to be shown. While empty, the page shows discipline tiles instead.",
      type: "array",
      of: [
        {
          type: "object",
          name: "member",
          fields: [
            { name: "name", title: "Name", type: "string" },
            { name: "discipline", title: "Discipline", type: "string" },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
              fields: [{ name: "alt", title: "Alt text", type: "string" }],
            },
          ],
          preview: { select: { title: "name", subtitle: "discipline", media: "photo" } },
        },
      ],
    }),
    defineField({
      name: "disciplineTiles",
      title: "Bench wall: discipline tiles (fallback)",
      description: 'Shown while no members are featured. e.g. "brand + identity / designers".',
      type: "array",
      of: [
        {
          type: "object",
          name: "tile",
          fields: [
            { name: "title", title: "Title", type: "string" },
            { name: "sub", title: "Subtitle", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "sub" } },
        },
      ],
    }),
    defineField({
      name: "stats",
      title: "Proof strip",
      description:
        "One to four real numbers (members, disciplines, years, projects staffed). Leave empty until true; the strip hides itself.",
      type: "array",
      of: [
        {
          type: "object",
          name: "stat",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({ name: "barHeadline", title: "The bar: headline", type: "string" }),
    defineField({
      name: "barSteps",
      title: "The bar: steps",
      type: "array",
      of: [
        {
          type: "object",
          name: "step",
          fields: [
            { name: "title", title: "Step", type: "string" },
            { name: "body", title: "Detail", type: "string" },
          ],
          preview: { select: { title: "title", subtitle: "body" } },
        },
      ],
      validation: (r) => r.max(4),
    }),
    defineField({
      name: "forCompanies",
      title: "For companies",
      type: "object",
      fields: [
        { name: "heading", title: "Heading", type: "string" },
        { name: "body", title: "Body", type: "text", rows: 3 },
        { name: "steps", title: "How it works (3 lines)", type: "array", of: [{ type: "string" }] },
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
        { name: "steps", title: "How it works (3 lines)", type: "array", of: [{ type: "string" }] },
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
