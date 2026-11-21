import { apiRequest } from "./queryClient";
import type { InsertConsultationRequest, ConsultationRequest } from "@shared/schema";

export interface ConsultationResponse {
  success: boolean;
  data: ConsultationRequest;
  emailSent?: boolean;
  warnings?: string[];
}

export const submitConsultationRequest = async (data: InsertConsultationRequest): Promise<ConsultationResponse> => {
  const response = await apiRequest("POST", "/api/consultation", data);
  return response.json();
};

