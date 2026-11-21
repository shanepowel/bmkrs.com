import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { dataset, isSanityConfigured, projectId } from './env';

const builder = isSanityConfigured
  ? imageUrlBuilder({ projectId, dataset })
  : null;

export function urlForImage(source: SanityImageSource | undefined | null): string | null {
  if (!builder || !source) return null;
  return builder.image(source).fit('max').auto('format').url();
}
