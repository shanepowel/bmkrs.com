import { NextRequest, NextResponse } from 'next/server';
import { requireAdminApiKey } from '../../../../lib/api-auth';
import { crmService } from '../../../../lib/services/crm';

export async function GET(request: NextRequest) {
  const authError = requireAdminApiKey(request);
  if (authError) return authError;
  try {
    const stats = await crmService.getDashboardStats();
    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('Error fetching CRM dashboard:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
}
