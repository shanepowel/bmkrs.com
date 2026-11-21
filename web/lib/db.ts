import { drizzle, type NeonHttpDatabase } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import * as schema from "@shared/schema";

type AppDatabase = NeonHttpDatabase<typeof schema>;

let dbInstance: AppDatabase | null = null;

/**
 * Returns the Drizzle database client. Initialised lazily so Next.js can build
 * without DATABASE_URL; routes fail at request time if the variable is missing.
 */
export function getDb(): AppDatabase {
  if (!dbInstance) {
    const url = process.env.DATABASE_URL;
    if (!url) {
      throw new Error("DATABASE_URL environment variable is required");
    }
    dbInstance = drizzle(neon(url), { schema });
  }
  return dbInstance;
}
