import type { ConsultationRequest, AiWasteCalculation } from '@shared/schema';
import axios from 'axios';

// Simple CRM functionality for customer management
interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  source: 'consultation' | 'calculator' | 'manual';
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed_won' | 'closed_lost';
  urgencyLevel?: string;
  serviceType?: string;
  lastActivity: Date;
  notes: string[];
  calculationData?: {
    monthly: number;
    annual: number;
    employees: number;
  };
  createdAt: Date;
}

class CRMService {
  private leads: Map<string, Lead> = new Map();
  private nextLeadId = 1;
  private hubspotApiKey: string | undefined;
  private hubspotApiUrl = 'https://api.hubapi.com';

  constructor() {
    const rawToken = process.env.HUBSPOT_API_KEY?.trim();
    
    if (rawToken) {
      // Validate HubSpot Private App token format
      // Valid tokens start with "pat-" followed by region (e.g., pat-na1-, pat-eu1-)
      if (rawToken.startsWith('pat-')) {
        this.hubspotApiKey = rawToken;
        console.log('HubSpot CRM integration enabled');
      } else {
        console.error('⚠️  Invalid HubSpot API key format detected!');
        console.error('   Expected: Private App Access Token starting with "pat-" (e.g., pat-na1-xxx or pat-eu1-xxx)');
        console.error('   Received: Token starting with:', rawToken.substring(0, 10) + '...');
        console.error('   Please provide a valid HubSpot Private App Access Token.');
        console.error('   Legacy API keys (hapikey) are not supported.');
        this.hubspotApiKey = undefined;
      }
    } else {
      console.log('HubSpot API key not configured. Leads will be stored locally only.');
    }
  }

  // Public helper to sync a contact (e.g. from playbook download) to HubSpot
  syncContact(contactData: {
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    company?: string;
    message?: string;
  }): void {
    this.sendToHubSpot(contactData);
  }

  // Send contact to HubSpot (non-blocking with retry)
  private sendToHubSpot(contactData: {
    firstname?: string;
    lastname?: string;
    email: string;
    phone?: string;
    company?: string;
    message?: string;
  }): void {
    if (!this.hubspotApiKey) {
      console.log('Skipping HubSpot sync - API key not configured');
      return;
    }

    const hubspotPayload = {
      properties: {
        email: contactData.email,
        ...(contactData.firstname && { firstname: contactData.firstname }),
        ...(contactData.lastname && { lastname: contactData.lastname }),
        ...(contactData.phone && { phone: contactData.phone }),
        ...(contactData.company && { company: contactData.company }),
        ...(contactData.message && { message: contactData.message })
      }
    };

    // Fire and forget with retry logic
    this.sendToHubSpotWithRetry(hubspotPayload).catch(() => {
      console.error('Failed to sync contact to HubSpot after retries');
    });
  }

  private async sendToHubSpotWithRetry(payload: { properties: Record<string, string> }, attempt = 1, maxAttempts = 3): Promise<void> {
    // Log request details for debugging (without exposing full API key)
    if (attempt === 1) {
      console.log('HubSpot Request Details:');
      console.log('- API URL:', `${this.hubspotApiUrl}/crm/v3/objects/contacts`);
      console.log('- API Key present:', !!this.hubspotApiKey);
      console.log('- Payload:', JSON.stringify(payload, null, 2));
    }

    try {
      const response = await axios.post(
        `${this.hubspotApiUrl}/crm/v3/objects/contacts`,
        payload,
        {
          headers: {
            'Authorization': `Bearer ${this.hubspotApiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 5000
        }
      );

      console.log(`✅ Successfully created contact in HubSpot: ID ${response.data.id}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const errorData = error.response?.data;
        console.error(`❌ HubSpot API error (attempt ${attempt}/${maxAttempts}):`, {
          status: status || 'unknown',
          statusText: error.response?.statusText,
          errorMessage: errorData?.message || errorData?.error || 'No error message',
          category: errorData?.category
        });
        
        // Retry on 429 (rate limit) or 5xx (server errors)
        if (attempt < maxAttempts && (status === 429 || (status && status >= 500))) {
          const delay = Math.min(1000 * Math.pow(2, attempt - 1), 5000);
          console.log(`⏱️  Retrying HubSpot sync in ${delay}ms...`);
          await new Promise(resolve => setTimeout(resolve, delay));
          return this.sendToHubSpotWithRetry(payload, attempt + 1, maxAttempts);
        }
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('❌ Failed to create contact in HubSpot:', errorMessage);
      }
      throw error;
    }
  }

  // Convert consultation request to lead
  async createLeadFromConsultation(consultation: ConsultationRequest): Promise<Lead> {
    const leadId = `LEAD-${this.nextLeadId.toString().padStart(4, '0')}`;
    this.nextLeadId++;

    const lead: Lead = {
      id: leadId,
      name: consultation.name,
      email: consultation.email,
      phone: consultation.phone || undefined,
      company: consultation.company || undefined,
      source: 'consultation',
      status: consultation.urgencyLevel === 'compliance' ? 'qualified' : 'new',
      urgencyLevel: consultation.urgencyLevel || undefined,
      serviceType: consultation.serviceType || undefined,
      lastActivity: new Date(),
      notes: [
        `Initial consultation request: ${consultation.description || 'No description provided'}`,
        `Service interest: ${consultation.serviceInterest}`,
        `Persona: ${consultation.persona || 'Not specified'}`,
        `Urgency level: ${consultation.urgencyLevel || 'Not specified'}`
      ],
      createdAt: consultation.createdAt || new Date()
    };

    this.leads.set(leadId, lead);
    console.log(`Created lead ${leadId} from consultation for ${consultation.name}`);

    // Send to HubSpot
    // Split name into firstname and lastname
    const nameParts = consultation.name.trim().split(' ');
    const firstname = nameParts[0];
    const lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

    // Create message with consultation details
    const message = [
      `Service Interest: ${consultation.serviceInterest}`,
      consultation.persona ? `Persona: ${consultation.persona}` : '',
      consultation.urgencyLevel ? `Urgency: ${consultation.urgencyLevel}` : '',
      consultation.description ? `Description: ${consultation.description}` : ''
    ].filter(Boolean).join('\n');

    this.sendToHubSpot({
      firstname,
      lastname: lastname || undefined,
      email: consultation.email,
      phone: consultation.phone || undefined,
      company: consultation.company || undefined,
      message
    });

    return lead;
  }

  // Convert calculator usage to lead
  async createLeadFromCalculation(calculationData: AiWasteCalculation): Promise<Lead | null> {
    if (!calculationData.email) {
      return null; // Can't create lead without email
    }

    // Check if lead already exists
    const existingLead = this.findLeadByEmail(calculationData.email);
    if (existingLead) {
      // Update existing lead with calculation data
      existingLead.calculationData = {
        monthly: parseFloat(calculationData.monthlyWaste),
        annual: parseFloat(calculationData.annualWaste),
        employees: calculationData.employees
      };
      existingLead.notes.push(
        `Completed AI waste calculation: £${parseFloat(calculationData.monthlyWaste).toLocaleString()}/month potential savings`
      );
      existingLead.lastActivity = new Date();
      return existingLead;
    }

    const leadId = `LEAD-${this.nextLeadId.toString().padStart(4, '0')}`;
    this.nextLeadId++;

    const lead: Lead = {
      id: leadId,
      name: calculationData.email.split('@')[0], // Use email prefix as temporary name
      email: calculationData.email,
      source: 'calculator',
      status: 'new',
      lastActivity: new Date(),
      notes: [
        `Used AI waste calculator`,
        `Potential savings: £${parseFloat(calculationData.monthlyWaste).toLocaleString()}/month`,
        `Company size: ${calculationData.employees} employees`
      ],
      calculationData: {
        monthly: parseFloat(calculationData.monthlyWaste),
        annual: parseFloat(calculationData.annualWaste),
        employees: calculationData.employees
      },
      createdAt: calculationData.createdAt || new Date()
    };

    this.leads.set(leadId, lead);
    console.log(`Created lead ${leadId} from calculator for ${calculationData.email}`);
    return lead;
  }

  // Find lead by email
  private findLeadByEmail(email: string): Lead | undefined {
    return Array.from(this.leads.values()).find(lead => lead.email === email);
  }

  // Get all leads
  async getAllLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort((a, b) => 
      b.lastActivity.getTime() - a.lastActivity.getTime()
    );
  }

  // Get dashboard stats
  async getDashboardStats() {
    const allLeads = await this.getAllLeads();
    const totalLeads = allLeads.length;
    const newLeads = allLeads.filter(l => l.status === 'new').length;
    const qualifiedLeads = allLeads.filter(l => l.status === 'qualified').length;
    const proposalLeads = allLeads.filter(l => l.status === 'proposal').length;
    const closedWon = allLeads.filter(l => l.status === 'closed_won').length;

    // Calculate potential revenue from calculator leads
    const calculatorLeads = allLeads.filter(l => l.source === 'calculator' && l.calculationData);
    const totalPotentialSavings = calculatorLeads.reduce((sum, lead) => 
      sum + (lead.calculationData?.annual || 0), 0
    );

    return {
      totalLeads,
      newLeads,
      qualifiedLeads,
      proposalLeads,
      closedWon,
      conversionRate: totalLeads > 0 ? (closedWon / totalLeads * 100).toFixed(1) : '0',
      totalPotentialSavings,
      averageDealSize: calculatorLeads.length > 0 ? 
        Math.round(totalPotentialSavings / calculatorLeads.length) : 0
    };
  }

  // Newsletter subscription - send to HubSpot Marketing
  async subscribeToNewsletter(email: string, name?: string, source?: string): Promise<boolean> {
    if (!this.hubspotApiKey) {
      console.log('⚠️  HubSpot newsletter subscription skipped - API key not configured');
      console.log(`📧 Newsletter subscription received locally for: ${email}`);
      // Gracefully degrade - subscription still accepted, just not synced to HubSpot
      return false; // Indicates HubSpot sync didn't happen, but subscription was accepted
    }

    // Split name if provided
    let firstname: string | undefined;
    let lastname: string | undefined;
    
    if (name) {
      const nameParts = name.trim().split(' ');
      firstname = nameParts[0];
      lastname = nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined;
    }

    const hubspotPayload = {
      properties: {
        email: email,
        ...(firstname && { firstname }),
        ...(lastname && { lastname }),
        // Add custom property for newsletter subscription
        hs_lead_status: 'SUBSCRIBER',
        // Track source
        ...(source && { 
          hs_analytics_source: source,
          hs_analytics_source_data_1: 'Insights Newsletter Subscription'
        })
      }
    };

    try {
      const response = await axios.post(
        `${this.hubspotApiUrl}/crm/v3/objects/contacts`,
        hubspotPayload,
        {
          headers: {
            'Authorization': `Bearer ${this.hubspotApiKey}`,
            'Content-Type': 'application/json'
          },
          timeout: 5000
        }
      );

      console.log(`✅ Successfully subscribed ${email} to newsletter in HubSpot: ID ${response.data.id}`);
      return true;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        const errorData = error.response?.data;
        
        // If contact already exists (409), consider it success
        if (status === 409) {
          console.log(`Contact ${email} already exists in HubSpot`);
          console.log(`✅ Newsletter subscription confirmed for existing contact: ${email}`);
          return true;
        }
        
        console.error(`❌ HubSpot newsletter subscription error:`, {
          status: status || 'unknown',
          statusText: error.response?.statusText,
          errorMessage: errorData?.message || errorData?.error || 'No error message',
          category: errorData?.category
        });
      } else {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        console.error('❌ Failed to subscribe to newsletter in HubSpot:', errorMessage);
      }
      // Don't throw - gracefully degrade and still accept the subscription locally
      console.log(`📧 Newsletter subscription received locally for: ${email} (HubSpot sync failed)`);
      return false;
    }
  }
}

export const crmService = new CRMService();