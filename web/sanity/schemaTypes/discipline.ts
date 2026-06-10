import { defineField, defineType } from "sanity";

export const discipline = defineType({
  name: "discipline",
  title: "Discipline",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "proposition",
      title: "Proposition",
      description: "One line. Lowercase voice.",
      type: "string",
      validation: (r) => r.required().max(90),
    }),
    defineField({ name: "body", title: "Body", type: "text", rows: 3 }),
    defineField({
      name: "symptom",
      title: "You might need this if",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "craft",
      title: "What we do about it",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "outcome",
      title: "What changes",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "deliverables",
      title: "Deliverables",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "relatedProducts",
      title: "Packages this powers",
      description: "Links the capability layer to the start/make/grow packages.",
      type: "array",
      of: [{ type: "reference", to: [{ type: "product" }] }],
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "proposition" } },
});
