import { notFound } from 'next/navigation';
import { getBmkMetadata, getBmkPage } from '../../lib/content/bmk-pages';
import { BmkPage } from '../../client/src/components/bmk/bmk-page';

export const revalidate = 60;

export function generateMetadata() {
  return getBmkMetadata('ai');
}

export default async function Page() {
  const page = await getBmkPage('ai');
  if (!page) notFound();
  return <BmkPage page={page} />;
}
