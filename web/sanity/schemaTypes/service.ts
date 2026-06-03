import { defineField, defineType } from "sanity";

export const service = defineType({
  name: "service",
  title: "Service / capability",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" } }),
    defineField({ name: "summary", type: "text" }),
    defineField({ name: "body", type: "text" }),
    defineField({ name: "image", type: "image", options: { hotspot: true } }),
    defineField({ name: "imagePath", type: "string", description: "Fallback path e.g. /images/foo.jpg" }),
    defineField({
      name: "bullets",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "order", type: "number" }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
