import "dotenv/config";

import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

import * as schema from "./schema";

const connectionString = process.env.POSTGRES_URL;

if (!connectionString) {
  throw new Error("Missing POSTGRES_URL");
}

const client = postgres(connectionString, {
  prepare: false,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Disable prefetch as it is not supported for "Transaction" pool mode
export const db = drizzle({
  client,
  schema,
  casing: "snake_case",
});
