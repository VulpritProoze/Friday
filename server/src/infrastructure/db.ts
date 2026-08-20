import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as userSchema from '../models/user';
import * as aiResponseSchema from '../models/aiResponse';
import dotenv from 'dotenv';

// Load environmental variables from the root .env file
dotenv.config({ path: '../.env' });

const connectionString = process.env.POSTGRESQL_DB_STRING;

if (!connectionString) {
  throw new Error('POSTGRESQL_DB_STRING environment variable is not defined.');
}

const pool = new Pool({
  connectionString: connectionString,
});

export const db = drizzle(pool, { schema: { ...userSchema, ...aiResponseSchema } });
