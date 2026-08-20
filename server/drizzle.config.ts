import { defineConfig } from 'drizzle-kit';
import dotenv from 'dotenv';

// Load variables from the root .env file
dotenv.config({ path: '../.env' });

const connectionString = process.env.POSTGRESQL_DB_STRING;

if (!connectionString) {
  throw new Error('POSTGRESQL_DB_STRING environment variable is not defined.');
}

export default defineConfig({
  out: './drizzle',
  schema: './src/models/',
  dialect: 'postgresql',
  dbCredentials: {
    url: connectionString,
  },
});
