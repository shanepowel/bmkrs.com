import { defineField, defineType } from "sanity";

export const journalArticle = defineType({
  name: "journalArticle",
  title: "Journal article",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
      validation: (r) => r.required(),
    }),
    defineField({ name: "seoTitle", type: "string", title: "SEO title" }),
    defineField({ name: "metaDescription", type: "text" }),
    defineField({ name: "h1", type: "string", title: "On-page H1" }),
    defineField({ name: "targetKeyword", type: "string" }),
    defineField({ name: "publishedAt", type: "date" }),
    defineField({
      name: "body",
      type: "text",
      title: "Body (markdown)",
      description: "Use ### for h3, - for lists, [text](/path) for links. Paragraphs separated by blank lines.",
    }),
    defineField({
      name: "relatedLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "href", type: "string" },
          ],
        },
      ],
    }),
  ],
  orderings: [
    { title: "Published (newest)", name: "publishedDesc", by: [{ field: "publishedAt", direction: "desc" }] },
  ],
});
