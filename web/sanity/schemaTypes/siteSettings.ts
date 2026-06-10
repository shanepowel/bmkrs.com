import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", type: "string", initialValue: "bmkrs." }),
    defineField({ name: "tagline", type: "string", initialValue: "we are b makers." }),
    defineField({ name: "description", type: "text" }),
    defineField({
      name: "email",
      title: "General email (legacy)",
      type: "string",
      description: "Used when generalEmail is empty.",
    }),
    defineField({ name: "generalEmail", title: "General enquiries", type: "string" }),
    defineField({ name: "pressEmail", title: "Press email", type: "string" }),
    defineField({ name: "networkEmail", title: "Network / collaborators email", type: "string" }),
    defineField({ name: "companyName", title: "Registered company name", type: "string" }),
    defineField({ name: "companyNumber", title: "Company number", type: "string" }),
    defineField({ name: "registeredAddress", title: "Registered address", type: "text", rows: 2 }),
    defineField({ name: "londonAddress", title: "London address (optional)", type: "text", rows: 2 }),
    defineField({ name: "copyright", type: "string" }),
    defineField({
      name: "socialLinks",
      title: "Social links",
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
      name: "socials",
      title: "Social links (alias)",
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
    defineField({
      name: "defaultSeo",
      title: "Default SEO",
      type: "object",
      fields: [
        { name: "metaTitle", type: "string" },
        { name: "metaDescription", type: "string" },
        { name: "ogImage", type: "image" },
      ],
    }),
    defineField({
      name: "heroReel",
      title: "Home hero reel",
      type: "file",
      options: { accept: "video/*" },
      description: "Short loop for the homepage hero. Respects prefers-reduced-motion.",
    }),
    defineField({
      name: "heroReelUrl",
      title: "Home hero reel URL",
      type: "url",
      description: "Optional external video URL if not using the file field above.",
    }),
    defineField({
      name: "heroPoster",
      title: "Home hero poster",
      type: "image",
      description: "Shown when the reel is off or reduced-motion is preferred.",
    }),
  ],
  preview: { prepare: () => ({ title: "Site settings" }) },
});
