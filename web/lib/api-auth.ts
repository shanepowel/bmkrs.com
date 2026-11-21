import { NextRequest, NextResponse } from 'next/server';

/**
 * Guards internal/admin API routes. When ADMIN_API_KEY is set, callers must
 * supply it via `Authorization: Bearer <key>` or `x-api-key` header.
 * In production, routes are blocked if the key is not configured.
 */
export function requireAdminApiKey(request: NextRequest): NextResponse | null {
  const configuredKey = process.env.ADMIN_API_KEY?.trim();

  if (!configuredKey) {
    if (process.env.NODE_ENV === 'production') {
      return NextResponse.json(
        { success: false, error: 'Admin API is not configured' },
        { status: 503 },
      );
    }
    return null;
  }

  const authHeader = request.headers.get('authorization');
  const bearerKey = authHeader?.startsWith('Bearer ')
    ? authHeader.slice('Bearer '.length).trim()
    : null;
  const headerKey = request.headers.get('x-api-key')?.trim();
  const providedKey = bearerKey || headerKey;

  if (!providedKey || providedKey !== configuredKey) {
    return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
  }

  return null;
}
