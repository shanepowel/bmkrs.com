import { defineField, defineType } from "sanity";

export const person = defineType({
  name: "person",
  title: "Person",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 96 },
      validation: (r) => r.required(),
    }),
    defineField({ name: "role", title: "Role", type: "string" }),
    defineField({ name: "discipline", title: "Discipline", type: "string" }),
    defineField({ name: "shortBio", title: "Short bio", type: "text", rows: 3 }),
    defineField({ name: "longBio", title: "Long bio", type: "text", rows: 6 }),
    defineField({
      name: "portrait",
      title: "Portrait",
      type: "image",
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          title: "Alt text",
          type: "string",
          description: "illustrated portrait of [name], [discipline] at bmkrs",
        },
      ],
    }),
    defineField({ name: "linkedinUrl", title: "LinkedIn URL", type: "url" }),
  ],
  preview: {
    select: { title: "name", subtitle: "discipline", media: "portrait" },
  },
});
