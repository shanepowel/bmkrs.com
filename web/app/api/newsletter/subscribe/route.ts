import { NextRequest, NextResponse } from 'next/server';
import { crmService } from '../../../../lib/services/crm';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email || typeof email !== 'string') {
      return NextResponse.json({ success: false, error: 'Email is required' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ success: false, error: 'Invalid email format' }, { status: 400 });
    }

    const hubspotSynced = await crmService.subscribeToNewsletter(
      email.toLowerCase().trim(),
      name?.trim(),
      'Insights Page'
    );

    return NextResponse.json({
      success: true,
      message: 'Successfully subscribed to newsletter',
      hubspotSynced,
      warnings: hubspotSynced ? [] : ['Subscription saved locally. HubSpot sync may be pending.'],
    });
  } catch (error) {
    console.error('Error subscribing to newsletter:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to subscribe';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
