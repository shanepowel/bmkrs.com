import { NextRequest, NextResponse } from 'next/server';
import { getInsightBySlug } from '../../../../../../lib/content/insights';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    const content = await getInsightBySlug(slug);
    if (!content) {
      return NextResponse.json({ success: false, error: 'Content not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching content:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
