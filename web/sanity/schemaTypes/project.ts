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
    defineField({ name: "tagline", type: "text" }),
    defineField({ name: "sector", type: "string" }),
    defineField({ name: "year", type: "string" }),
    defineField({ name: "client", type: "text" }),
    defineField({ name: "context", type: "text" }),
    defineField({ name: "challenge", type: "text" }),
    defineField({ name: "whatWeDid", type: "text" }),
    defineField({ name: "outcome", type: "text" }),
    defineField({
      name: "outcomeMetrics",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "value", type: "string" },
            { name: "label", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "testimonial",
      type: "object",
      fields: [
        { name: "quote", type: "text" },
        { name: "attribution", type: "string" },
      ],
    }),
    defineField({
      name: "serviceTags",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "featured", type: "boolean" }),
    defineField({ name: "background", type: "text", deprecated: { reason: "Use whatWeDid" } }),
    defineField({ name: "problem", type: "text", deprecated: { reason: "Use challenge" } }),
    defineField({ name: "brief", type: "text", deprecated: { reason: "Use challenge" } }),
    defineField({ name: "result", type: "text", deprecated: { reason: "Use outcome" } }),
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
