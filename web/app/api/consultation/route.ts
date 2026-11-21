import { NextRequest, NextResponse } from 'next/server';
import { storage } from '../../../lib/storage';
import { insertConsultationRequestSchema } from '@shared/schema';
import { emailService } from '../../../lib/services/email';
import { crmService } from '../../../lib/services/crm';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = insertConsultationRequestSchema.parse(body);
    const consultationRequest = await storage.createConsultationRequest(validatedData);

    await crmService.createLeadFromConsultation(consultationRequest);
    const emailSent = await emailService.sendContactFormEmail(consultationRequest);

    return NextResponse.json({
      success: true,
      data: consultationRequest,
      emailSent,
      warnings: emailSent ? [] : ['Email notification could not be sent. Domain verification may be required.'],
    });
  } catch (error) {
    console.error('Error creating consultation request:', error);
    return NextResponse.json({ success: false, error: 'Invalid request data' }, { status: 400 });
  }
}
