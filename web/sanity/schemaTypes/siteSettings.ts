import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string", initialValue: "BMKRS" }),
    defineField({ name: "tagline", type: "string", initialValue: "We are the Brandmakers." }),
    defineField({ name: "description", type: "text" }),
    defineField({ name: "email", type: "string" }),
    defineField({ name: "copyright", type: "string" }),
    defineField({
      name: "socialLinks",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "platform", type: "string" },
            { name: "url", type: "url" },
          ],
        },
      ],
    }),
    defineField({
      name: "navigation",
      type: "array",
      of: [{ type: "reference", to: [{ type: "navigationItem" }] }],
    }),
  ],
});
