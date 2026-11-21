import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './studio/schemaTypes';
import { structure } from './studio/structure';
import { apiVersion, dataset, projectId } from './lib/sanity/env';

export default defineConfig({
  name: 'bmkrs',
  title: 'bmkrs CMS',
  basePath: '/studio',
  // Falls back to a placeholder so the Studio route can still build before a
  // real project id is supplied. Set NEXT_PUBLIC_SANITY_PROJECT_ID to go live.
  projectId: projectId || 'placeholder-project-id',
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool({ structure }), visionTool({ defaultApiVersion: apiVersion })],
});
