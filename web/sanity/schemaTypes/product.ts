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
      name: "price",
      title: "Price",
      description:
        'Display string, e.g. "£2,500" or "£24,000". Leave empty only if priceQualifier is "lets-talk".',
      type: "string",
    }),
    defineField({
      name: "priceQualifier",
      title: "Price qualifier",
      type: "string",
      options: {
        list: [
          { title: "Fixed", value: "fixed" },
          { title: "From", value: "from" },
          { title: "Per month", value: "per-month" },
          { title: "Let's talk", value: "lets-talk" },
        ],
      },
      initialValue: "from",
    }),
    defineField({
      name: "creditNote",
      title: "Credit note",
      description:
        "e.g. brand check fee credited against a make package within 90 days.",
      type: "string",
    }),
    defineField({
      name: "priceFrom",
      title: "Price from (legacy)",
      description: "Deprecated: use price. Kept for older documents.",
      type: "string",
    }),
    defineField({
      name: "priceNote",
      title: "Price note (legacy)",
      type: "string",
      initialValue: "let's talk",
      description: "Deprecated: use priceQualifier.",
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
