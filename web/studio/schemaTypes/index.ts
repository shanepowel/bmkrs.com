import type { SchemaTypeDefinition } from 'sanity';
import { insight } from './insight';
import { bmkPageTypes } from './bmkPage';

export const schemaTypes: SchemaTypeDefinition[] = [...bmkPageTypes, insight];
