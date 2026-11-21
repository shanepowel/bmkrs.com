import { NextResponse } from 'next/server';
import { getInsights } from '../../../../../lib/content/insights';

export async function GET() {
  try {
    const content = await getInsights();
    return NextResponse.json({ success: true, data: content });
  } catch (error) {
    console.error('Error fetching insights:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
