import { defineField, defineType } from "sanity";

export const page = defineType({
  name: "page",
  title: "Page",
  type: "document",
  fields: [
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "metaDescription", type: "text" }),
    defineField({ name: "heroTitle", type: "text" }),
    defineField({ name: "heroSubtitle", type: "text" }),
    defineField({ name: "heroCtaLabel", type: "string" }),
    defineField({ name: "heroCtaHref", type: "string" }),
    defineField({ name: "heroVideoUrl", type: "string" }),
    defineField({ name: "body", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "sections",
      type: "array",
      of: [
        {
          type: "object",
          name: "section",
          fields: [
            { name: "key", type: "string" },
            { name: "title", type: "string" },
            { name: "subtitle", type: "string" },
            { name: "content", type: "text" },
            { name: "ctaLabel", type: "string" },
            { name: "ctaHref", type: "string" },
          ],
        },
      ],
    }),
  ],
});
