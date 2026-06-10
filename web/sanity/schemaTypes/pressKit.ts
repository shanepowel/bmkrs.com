import { defineField, defineType } from "sanity";

export const pressKit = defineType({
  name: "pressKit",
  title: "Press kit / brand kit",
  type: "document",
  fields: [
    defineField({ name: "headline", type: "string" }),
    defineField({ name: "intro", type: "text", rows: 3 }),
    defineField({ name: "shortBoilerplate", title: "Short boilerplate", type: "text", rows: 2 }),
    defineField({ name: "longBoilerplate", title: "Long boilerplate", type: "text", rows: 6 }),
    defineField({ name: "founderBio", title: "Founder bio (press)", type: "text", rows: 4 }),
    defineField({ name: "legalName", type: "string" }),
    defineField({ name: "location", type: "string" }),
    defineField({ name: "founded", type: "string" }),
    defineField({
      name: "colors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "hex", type: "string" },
            { name: "role", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "typefaces",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "role", type: "string" },
            { name: "source", type: "string" },
            { name: "weights", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "logoAssets",
      title: "Logo / brand assets",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "name", type: "string" },
            { name: "fileUrl", title: "File URL", type: "string" },
            { name: "format", type: "string" },
            { name: "usage", type: "text", rows: 2 },
          ],
        },
      ],
    }),
    defineField({
      name: "usageRules",
      title: "Usage rules",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({ name: "updatedAt", title: "Updated", type: "date" }),
  ],
  preview: { prepare: () => ({ title: "Press kit" }) },
});
