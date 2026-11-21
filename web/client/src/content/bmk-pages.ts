import type { BmkPageContent } from "./bmk-types";
import { servicesPages } from "./bmk-pages-services";
import { aiPages } from "./bmk-pages-ai";
import { companyPages } from "./bmk-pages-company";

export const bmkPages: Record<string, BmkPageContent> = {
  ...servicesPages,
  ...aiPages,
  ...companyPages,
};
