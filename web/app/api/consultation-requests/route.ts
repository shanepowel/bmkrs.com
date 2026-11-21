import { NextRequest, NextResponse } from 'next/server';
import { requireAdminApiKey } from '../../../lib/api-auth';
import { storage } from '../../../lib/storage';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const authError = requireAdminApiKey(request);
  if (authError) return authError;
  try {
    const requests = await storage.getConsultationRequests();
    return NextResponse.json({ success: true, data: requests });
  } catch (error) {
    console.error('Error fetching consultation requests:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
