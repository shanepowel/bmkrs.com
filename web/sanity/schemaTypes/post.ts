import { defineField, defineType } from "sanity";

export const post = defineType({
  name: "post",
  title: "Journal post",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "brand + identity", value: "brand" },
          { title: "voice + messaging", value: "voice" },
          { title: "pr + comms", value: "pr" },
          { title: "growth", value: "growth" },
          { title: "studio", value: "studio" },
        ],
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      options: { hotspot: true },
      fields: [
        { name: "alt", title: "Alt text", type: "string", validation: (r) => r.required() },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 2,
      validation: (r) => r.required().max(200),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: [{ type: "teamMember" }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published",
      type: "datetime",
      validation: (r) => r.required(),
    }),
    defineField({ name: "readingTime", title: "Reading time (minutes)", type: "number" }),
    defineField({ name: "featured", title: "Featured on journal index", type: "boolean", initialValue: false }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
        {
          type: "object",
          name: "pullQuote",
          title: "Pull quote",
          fields: [{ name: "text", type: "text", rows: 2 }],
        },
      ],
    }),
    defineField({
      name: "relatedProduct",
      title: "Related product",
      type: "reference",
      to: [{ type: "product" }],
    }),
    defineField({
      name: "relatedCaseStudy",
      title: "Related case study",
      type: "reference",
      to: [{ type: "caseStudy" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta title", type: "string" },
        { name: "metaDescription", title: "Meta description", type: "string", validation: (r) => r.max(160) },
        { name: "ogImage", title: "OG image override", type: "image" },
      ],
    }),
  ],
  orderings: [{ title: "Newest", name: "dateDesc", by: [{ field: "publishedAt", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "category", media: "coverImage" } },
});
