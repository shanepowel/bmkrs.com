import { type ConsultationRequest, type InsertConsultationRequest, type AiWasteCalculation, type InsertAiWasteCalculation, consultationRequests, aiWasteCalculations } from "@shared/schema";
import { randomUUID } from "crypto";
import { getDb } from "./db";

export interface IStorage {
  createConsultationRequest(request: InsertConsultationRequest): Promise<ConsultationRequest>;
  getConsultationRequests(): Promise<ConsultationRequest[]>;
  createAiWasteCalculation(calculation: InsertAiWasteCalculation): Promise<AiWasteCalculation>;
  getAiWasteCalculations(): Promise<AiWasteCalculation[]>;
}

export class MemStorage implements IStorage {
  private consultationRequests = new Map<string, ConsultationRequest>();
  private aiWasteCalculations = new Map<string, AiWasteCalculation>();

  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const id = randomUUID();
    const request: ConsultationRequest = {
      ...insertRequest,
      description: insertRequest.description || null,
      phone: insertRequest.phone || null,
      company: insertRequest.company || null,
      persona: insertRequest.persona || null,
      urgencyLevel: insertRequest.urgencyLevel || null,
      serviceType: insertRequest.serviceType || null,
      id,
      createdAt: new Date(),
    };
    this.consultationRequests.set(id, request);
    return request;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return Array.from(this.consultationRequests.values());
  }

  async createAiWasteCalculation(insertCalculation: InsertAiWasteCalculation): Promise<AiWasteCalculation> {
    const id = randomUUID();
    const calculation: AiWasteCalculation = {
      ...insertCalculation,
      email: insertCalculation.email || null,
      id,
      createdAt: new Date(),
    };
    this.aiWasteCalculations.set(id, calculation);
    return calculation;
  }

  async getAiWasteCalculations(): Promise<AiWasteCalculation[]> {
    return Array.from(this.aiWasteCalculations.values());
  }
}

export class DbStorage implements IStorage {
  async createConsultationRequest(insertRequest: InsertConsultationRequest): Promise<ConsultationRequest> {
    const [request] = await getDb().insert(consultationRequests).values(insertRequest).returning();
    return request;
  }

  async getConsultationRequests(): Promise<ConsultationRequest[]> {
    return await getDb().select().from(consultationRequests);
  }

  async createAiWasteCalculation(insertCalculation: InsertAiWasteCalculation): Promise<AiWasteCalculation> {
    const [calculation] = await getDb().insert(aiWasteCalculations).values(insertCalculation).returning();
    return calculation;
  }

  async getAiWasteCalculations(): Promise<AiWasteCalculation[]> {
    return await getDb().select().from(aiWasteCalculations);
  }
}

function createStorage(): IStorage {
  return process.env.DATABASE_URL ? new DbStorage() : new MemStorage();
}

/** Resolved per serverless invocation; never throws during module initialisation. */
export const storage = createStorage();
