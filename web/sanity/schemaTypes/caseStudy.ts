import { defineField, defineType } from "sanity";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "client", title: "Client", type: "string" }),
    defineField({
      name: "positioning",
      title: "Positioning line",
      description: "One sentence under the title. Lowercase voice.",
      type: "string",
      validation: (r) => r.required().max(120),
    }),
    defineField({ name: "sector", title: "Sector", type: "string" }),
    defineField({ name: "year", title: "Year", type: "string" }),
    defineField({
      name: "services",
      title: "Services delivered",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "brand + identity", value: "brand + identity" },
          { title: "voice + messaging", value: "voice + messaging" },
          { title: "pr + communications", value: "pr + communications" },
          { title: "product, web + growth", value: "product, web + growth" },
          { title: "photography / art direction", value: "photography / art direction" },
        ],
      },
    }),
    defineField({
      name: "productType",
      title: "Product this case proves",
      type: "reference",
      to: [{ type: "product" }],
    }),
    defineField({
      name: "order",
      title: "Display order",
      type: "number",
    }),
    defineField({
      name: "featured",
      title: "Featured on home",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "heroImage",
      title: "Hero image",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          validation: (r) => r.required(),
        },
      ],
      validation: (r) => r.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
              validation: (r) => r.required(),
            },
          ],
        },
      ],
    }),
    defineField({
      name: "brief",
      title: "The brief",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "challenge",
      title: "The challenge",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "whatWeDid",
      title: "What we did",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "resultsNarrative",
      title: "Result (narrative)",
      type: "text",
      rows: 3,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "results",
      title: "Result metrics",
      description: "One to three proof points. Leave empty until you have real figures.",
      type: "array",
      of: [
        {
          type: "object",
          name: "metric",
          fields: [
            { name: "value", title: "Value", type: "string" },
            { name: "label", title: "Label", type: "string" },
          ],
          preview: { select: { title: "value", subtitle: "label" } },
        },
      ],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "testimonial",
      title: "Client quote",
      type: "reference",
      to: [{ type: "testimonial" }],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "metaTitle", title: "Meta title", type: "string" },
        {
          name: "metaDescription",
          title: "Meta description",
          type: "string",
          validation: (r) => r.max(160),
        },
        {
          name: "ogImage",
          title: "OG image override",
          type: "image",
        },
      ],
    }),
  ],
  orderings: [
    { title: "Display order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] },
  ],
  preview: {
    select: { title: "title", subtitle: "positioning", media: "heroImage" },
  },
});
