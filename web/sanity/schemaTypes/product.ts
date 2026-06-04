import { defineField, defineType } from "sanity";

export const product = defineType({
  name: "product",
  title: "Product / offering",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (r) => r.required() }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tier",
      title: "Tier",
      type: "string",
      options: {
        list: [
          { title: "start (entry / diagnostic)", value: "start" },
          { title: "make (build sprints)", value: "make" },
          { title: "grow (motion / ongoing)", value: "grow" },
        ],
        layout: "radio",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({ name: "forWho", title: "Who it is for", type: "text", rows: 2 }),
    defineField({
      name: "included",
      title: "What is included",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "shape", title: "Shape", type: "string" }),
    defineField({ name: "outcome", title: "Outcome", type: "text", rows: 2 }),
    defineField({
      name: "cadence",
      title: "Cadence (grow tier)",
      type: "string",
      hidden: ({ document }) => document?.tier !== "grow",
    }),
    defineField({
      name: "commitment",
      title: "Commitment (grow tier)",
      type: "string",
      hidden: ({ document }) => document?.tier !== "grow",
    }),
    defineField({
      name: "monthlyDeliverables",
      title: "Monthly deliverables (grow tier)",
      type: "array",
      of: [{ type: "string" }],
      hidden: ({ document }) => document?.tier !== "grow",
    }),
    defineField({
      name: "priceNote",
      title: "Price note",
      type: "string",
      initialValue: "let's talk",
    }),
    defineField({
      name: "relatedCaseStudies",
      title: "Proof: related case studies",
      type: "array",
      of: [{ type: "reference", to: [{ type: "caseStudy" }] }],
    }),
    defineField({ name: "order", title: "Display order", type: "number" }),
    defineField({ name: "featured", title: "Featured on home", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
  preview: { select: { title: "name", subtitle: "tier" } },
});
