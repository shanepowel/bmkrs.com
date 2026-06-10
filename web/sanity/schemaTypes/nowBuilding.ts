import { defineField, defineType } from "sanity";

export const nowBuilding = defineType({
  name: "nowBuilding",
  title: "Now building",
  type: "document",
  fields: [
    defineField({
      name: "lines",
      title: "Bench lines",
      description: "Three lines: client work, studio product, journal. Update monthly.",
      type: "array",
      of: [{ type: "text", rows: 2 }],
      validation: (r) => r.max(3),
    }),
    defineField({
      name: "updatedAt",
      title: "Updated",
      type: "date",
      validation: (r) => r.required(),
    }),
  ],
  preview: { prepare: () => ({ title: "Now building" }) },
});
