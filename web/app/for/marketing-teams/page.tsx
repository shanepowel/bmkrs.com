import { notFound } from 'next/navigation';
import { getBmkMetadata, getBmkPage } from '../../../lib/content/bmk-pages';
import { BmkPage } from '../../../client/src/components/bmk/bmk-page';

export const revalidate = 60;

export function generateMetadata() {
  return getBmkMetadata('for-marketing-teams');
}

export default async function Page() {
  const page = await getBmkPage('for-marketing-teams');
  if (!page) notFound();
  return <BmkPage page={page} />;
}
