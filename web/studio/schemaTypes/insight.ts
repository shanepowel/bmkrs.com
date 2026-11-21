import { defineField, defineType } from 'sanity';

export const insight = defineType({
  name: 'insight',
  title: 'Insight / Article',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Type',
      type: 'string',
      description: 'e.g. White Paper, Thought Leadership, Research Report',
    }),
    defineField({
      name: 'description',
      title: 'Summary',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Cover image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'imageUrl',
      title: 'Cover image URL (fallback)',
      type: 'url',
      description: 'Used only if no cover image is uploaded above.',
    }),
    defineField({
      name: 'date',
      title: 'Publish date',
      type: 'date',
    }),
    defineField({
      name: 'readTime',
      title: 'Read time',
      type: 'string',
      description: 'e.g. 8 min read',
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'string',
    }),
    defineField({
      name: 'keyTakeaways',
      title: 'Key takeaways',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'body',
      title: 'Body (Markdown)',
      type: 'text',
      rows: 30,
      description: 'Markdown is supported (## headings, **bold**, lists, links).',
    }),
    defineField({
      name: 'sources',
      title: 'Sources',
      type: 'text',
      rows: 3,
    }),
  ],
  orderings: [
    {
      title: 'Publish date, newest first',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'category', media: 'image' },
  },
});
