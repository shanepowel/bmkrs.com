import { defineField, defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({ name: "title", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() }),
    defineField({ name: "category", type: "string" }),
    defineField({ name: "excerpt", type: "text" }),
    defineField({ name: "client", type: "text" }),
    defineField({ name: "background", type: "text" }),
    defineField({ name: "problem", type: "text" }),
    defineField({ name: "thumbnail", type: "image" }),
    defineField({ name: "thumbnailPath", type: "string" }),
    defineField({ name: "order", type: "number" }),
    defineField({
      name: "media",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "type", type: "string", options: { list: ["image", "iframe", "html"] } },
            { name: "src", type: "string" },
            { name: "alt", type: "string" },
            { name: "width", type: "string" },
            { name: "height", type: "string" },
            { name: "htmlContent", type: "text" },
          ],
        },
      ],
    }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
