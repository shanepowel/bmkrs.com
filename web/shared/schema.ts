import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, timestamp, decimal } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const serviceInterestEnum = ["bmkrs-learn", "bmkrs-coach", "bmkrs-teams", "bmkrs-transformation", "full-suite", "discovery"] as const;
export type ServiceInterest = typeof serviceInterestEnum[number];

export const customerPersonaEnum = ["contractor-pete", "sme-jill", "enterprise-sally", "other"] as const;
export type CustomerPersona = typeof customerPersonaEnum[number];

export const urgencyLevelEnum = ["compliance", "urgent", "planning", "exploring"] as const;
export type UrgencyLevel = typeof urgencyLevelEnum[number];

export const consultationRequests = pgTable("consultation_requests", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  company: text("company"),
  serviceInterest: text("service_interest").notNull(),
  persona: text("persona"),
  urgencyLevel: text("urgency_level"),
  description: text("description"),
  serviceType: text("service_type"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const aiWasteCalculations = pgTable("ai_waste_calculations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  employees: integer("employees").notNull(),
  shadowAI: integer("shadow_ai").notNull(),
  avgCost: decimal("avg_cost").notNull(),
  duplicates: integer("duplicates").notNull(),
  monthlyWaste: decimal("monthly_waste").notNull(),
  annualWaste: decimal("annual_waste").notNull(),
  email: text("email"),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertConsultationRequestSchema = createInsertSchema(consultationRequests)
  .omit({
    id: true,
    createdAt: true,
  })
  .extend({
    serviceInterest: z.enum(serviceInterestEnum),
    persona: z.enum(customerPersonaEnum).optional(),
    urgencyLevel: z.enum(urgencyLevelEnum).optional(),
  });

export const insertAiWasteCalculationSchema = createInsertSchema(aiWasteCalculations).omit({
  id: true,
  createdAt: true,
});

export type InsertConsultationRequest = z.infer<typeof insertConsultationRequestSchema>;
export type ConsultationRequest = typeof consultationRequests.$inferSelect;

export type InsertAiWasteCalculation = z.infer<typeof insertAiWasteCalculationSchema>;
export type AiWasteCalculation = typeof aiWasteCalculations.$inferSelect;
