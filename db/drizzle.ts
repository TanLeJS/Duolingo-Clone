import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema";
//@ts-ignoret

const sql = neon(process.env.DATABASE_URL!);
//@ts-ignoret
const db = drizzle(sql, { schema });
export default db;
