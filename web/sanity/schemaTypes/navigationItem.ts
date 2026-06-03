import { defineField, defineType } from "sanity";

export const navigationItem = defineType({
  name: "navigationItem",
  title: "Navigation item",
  type: "document",
  fields: [
    defineField({ name: "label", type: "string", validation: (r) => r.required() }),
    defineField({ name: "href", type: "string", validation: (r) => r.required() }),
    defineField({ name: "order", type: "number", initialValue: 0 }),
    defineField({ name: "highlight", type: "boolean", initialValue: false }),
  ],
  orderings: [{ title: "Order", name: "orderAsc", by: [{ field: "order", direction: "asc" }] }],
});
