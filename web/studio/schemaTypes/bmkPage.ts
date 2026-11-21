import { defineArrayMember, defineField, defineType } from 'sanity';

/**
 * bmkrs content pages (services, AI, who we work with, company, work).
 * The shape mirrors client/src/content/bmk-types.ts so the site can render
 * Sanity content and the bundled fallback with the same template.
 */

const imageOptions = [
  { title: 'Person in VR headset', value: 'vr' },
  { title: 'Megaphone, yellow wall', value: 'megaphone' },
  { title: 'Loudspeakers, violet sky', value: 'speakers' },
  { title: 'Headphones, red jumper', value: 'headphones' },
  { title: '"What now?" road sign', value: 'whatNow' },
  { title: 'Violet data mesh', value: 'mesh' },
  { title: 'Portrait, orange jumper', value: 'portrait' },
  { title: 'Hands holding laptop', value: 'laptop' },
  { title: 'Team workshop, sticky notes', value: 'workshop' },
];

const imageKey = (name: string, title = 'Image') =>
  defineField({ name, title, type: 'string', options: { list: imageOptions } });

const sectionHead = [
  defineField({ name: 'code', title: 'Section code', type: 'string', description: 'Small label, e.g. § 01' }),
  defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
  defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
];

const titleBody = (name: string, title: string, extra: ReturnType<typeof defineField>[] = []) =>
  defineArrayMember({
    name,
    title,
    type: 'object',
    fields: [
      defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
      defineField({ name: 'body', title: 'Body', type: 'text', rows: 3 }),
      ...extra,
    ],
  });

export const bmkGrid = defineType({
  name: 'bmkGrid',
  title: 'Card grid',
  type: 'object',
  fields: [
    ...sectionHead,
    defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 2 }),
    defineField({ name: 'cols', title: 'Columns', type: 'number', options: { list: [2, 3] }, initialValue: 3 }),
    defineField({
      name: 'items',
      title: 'Cards',
      type: 'array',
      of: [
        titleBody('gridItem', 'Card', [
          defineField({ name: 'code', title: 'Code', type: 'string' }),
          defineField({ name: 'tags', title: 'Tags', type: 'array', of: [{ type: 'string' }] }),
          defineField({ name: 'href', title: 'Link', type: 'string' }),
          defineField({ name: 'external', title: 'External link', type: 'boolean' }),
        ]),
      ],
    }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Card grid' }) },
});

export const bmkSteps = defineType({
  name: 'bmkSteps',
  title: 'Numbered steps',
  type: 'object',
  fields: [
    ...sectionHead,
    defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 2 }),
    defineField({ name: 'items', title: 'Steps', type: 'array', of: [titleBody('step', 'Step')] }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Steps' }) },
});

export const bmkSplit = defineType({
  name: 'bmkSplit',
  title: 'Text and image',
  type: 'object',
  fields: [
    ...sectionHead,
    defineField({ name: 'paragraphs', title: 'Paragraphs', type: 'array', of: [{ type: 'text', rows: 3 }] }),
    imageKey('image'),
    defineField({ name: 'figLabel', title: 'Image label', type: 'string', description: 'e.g. FIG. 02 / VOICE' }),
    defineField({ name: 'listTitle', title: 'List title', type: 'string' }),
    defineField({ name: 'list', title: 'List', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'reverse', title: 'Image on the left', type: 'boolean' }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Text and image' }) },
});

export const bmkLedger = defineType({
  name: 'bmkLedger',
  title: 'Ledger (numbered rows)',
  type: 'object',
  fields: [
    ...sectionHead,
    defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 2 }),
    defineField({ name: 'footnote', title: 'Footnote', type: 'string' }),
    defineField({
      name: 'items',
      title: 'Rows',
      type: 'array',
      of: [titleBody('ledgerRow', 'Row', [defineField({ name: 'meta', title: 'Result / meta', type: 'string' })])],
    }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Ledger' }) },
});

export const bmkCallout = defineType({
  name: 'bmkCallout',
  title: 'Callout banner',
  type: 'object',
  fields: [
    defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'body', title: 'Body', type: 'text', rows: 2 }),
    defineField({ name: 'href', title: 'Link', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'linkLabel', title: 'Link label', type: 'string' }),
    defineField({ name: 'external', title: 'External link', type: 'boolean' }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Callout' }) },
});

export const bmkStatement = defineType({
  name: 'bmkStatement',
  title: 'Big statement',
  type: 'object',
  fields: [
    defineField({ name: 'text', title: 'Text', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'accent', title: 'Coral accent text', type: 'string' }),
  ],
  preview: { select: { title: 'text' }, prepare: ({ title }) => ({ title, subtitle: 'Statement' }) },
});

export const bmkFaq = defineType({
  name: 'bmkFaq',
  title: 'Questions',
  type: 'object',
  fields: [
    defineField({ name: 'code', title: 'Section code', type: 'string' }),
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (r) => r.required() }),
    defineField({
      name: 'items',
      title: 'Questions',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'faqItem',
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string' }),
            defineField({ name: 'a', title: 'Answer', type: 'text', rows: 3 }),
          ],
          preview: { select: { title: 'q' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Questions' }) },
});

export const bmkLinks = defineType({
  name: 'bmkLinks',
  title: 'Related links',
  type: 'object',
  fields: [
    ...sectionHead,
    defineField({
      name: 'items',
      title: 'Links',
      type: 'array',
      of: [
        defineArrayMember({
          name: 'linkItem',
          type: 'object',
          fields: [
            defineField({ name: 'label', title: 'Label', type: 'string' }),
            defineField({ name: 'href', title: 'Link', type: 'string' }),
            defineField({ name: 'desc', title: 'Description', type: 'string' }),
            defineField({ name: 'external', title: 'External link', type: 'boolean' }),
          ],
          preview: { select: { title: 'label', subtitle: 'href' } },
        }),
      ],
    }),
  ],
  preview: { select: { title: 'title' }, prepare: ({ title }) => ({ title, subtitle: 'Links' }) },
});

export const bmkPage = defineType({
  name: 'bmkPage',
  title: 'Page',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero', default: true },
    { name: 'content', title: 'Sections' },
    { name: 'seo', title: 'SEO' },
  ],
  fields: [
    defineField({
      name: 'pageId',
      title: 'Page ID',
      type: 'string',
      description: 'Fixed key the site uses to find this page. Do not change.',
      readOnly: true,
      validation: (r) => r.required(),
    }),
    defineField({ name: 'path', title: 'URL path', type: 'string', readOnly: true }),
    defineField({ name: 'metaTitle', title: 'Meta title', type: 'string', group: 'seo' }),
    defineField({ name: 'metaDescription', title: 'Meta description', type: 'text', rows: 3, group: 'seo' }),
    defineField({
      name: 'hero',
      title: 'Hero',
      type: 'object',
      group: 'hero',
      fields: [
        defineField({ name: 'code', title: 'Code', type: 'string' }),
        defineField({ name: 'eyebrow', title: 'Eyebrow', type: 'string' }),
        defineField({ name: 'title', title: 'Headline', type: 'string', validation: (r) => r.required() }),
        defineField({ name: 'accent', title: 'Coral second line', type: 'string' }),
        defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 3 }),
        imageKey('image'),
        defineField({ name: 'figLabel', title: 'Image label', type: 'string' }),
        defineField({
          name: 'primaryCta',
          title: 'Primary button',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
          ],
        }),
        defineField({
          name: 'secondaryCta',
          title: 'Secondary button',
          type: 'object',
          fields: [
            defineField({ name: 'label', type: 'string' }),
            defineField({ name: 'href', type: 'string' }),
            defineField({ name: 'external', type: 'boolean' }),
          ],
        }),
        defineField({
          name: 'facts',
          title: 'Fact strip',
          type: 'array',
          of: [
            defineArrayMember({
              name: 'fact',
              type: 'object',
              fields: [
                defineField({ name: 'label', type: 'string' }),
                defineField({ name: 'value', type: 'string' }),
              ],
              preview: { select: { title: 'label', subtitle: 'value' } },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'blocks',
      title: 'Sections',
      type: 'array',
      group: 'content',
      of: [
        { type: 'bmkGrid' },
        { type: 'bmkSteps' },
        { type: 'bmkSplit' },
        { type: 'bmkLedger' },
        { type: 'bmkCallout' },
        { type: 'bmkStatement' },
        { type: 'bmkFaq' },
        { type: 'bmkLinks' },
      ],
    }),
    defineField({
      name: 'cta',
      title: 'Closing call to action',
      type: 'object',
      group: 'content',
      fields: [
        defineField({ name: 'title', title: 'Outline line', type: 'string' }),
        defineField({ name: 'accent', title: 'Coral line', type: 'string' }),
        defineField({ name: 'lead', title: 'Lead', type: 'text', rows: 2 }),
        defineField({ name: 'label', title: 'Button label', type: 'string' }),
        defineField({ name: 'serviceType', title: 'Enquiry type', type: 'string' }),
      ],
    }),
  ],
  preview: {
    select: { title: 'hero.title', subtitle: 'path' },
  },
});

export const bmkPageTypes = [bmkGrid, bmkSteps, bmkSplit, bmkLedger, bmkCallout, bmkStatement, bmkFaq, bmkLinks, bmkPage];
