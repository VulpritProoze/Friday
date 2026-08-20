import { pgTable, uuid, text, timestamp } from 'drizzle-orm/pg-core';
import { users } from './user';

export const aiResponses = pgTable('ai_responses', {
  id: uuid('id').primaryKey().defaultRandom(),
  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),
  prompt: text('prompt').notNull(),
  response: text('response').notNull(),
  model: text('model'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});
