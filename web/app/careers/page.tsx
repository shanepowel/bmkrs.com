import { notFound } from 'next/navigation';
import { getBmkMetadata, getBmkPage } from '../../lib/content/bmk-pages';
import { BmkPage } from '../../client/src/components/bmk/bmk-page';

export const revalidate = 60;

export function generateMetadata() {
  return getBmkMetadata('careers');
}

export default async function Page() {
  const page = await getBmkPage('careers');
  if (!page) notFound();
  return <BmkPage page={page} />;
}
