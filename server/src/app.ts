import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './infrastructure/db';
import { users } from './models/user';

// Load variables from the root .env file
dotenv.config({ path: '../.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Health Check & Database verification route
app.get('/health', async (req, res) => {
  try {
    // Attempt to query the database to verify connectivity
    await db.select().from(users).limit(1);
    
    res.status(200).json({
      success: true,
      data: {
        status: 'OK',
        database: 'Connected',
      },
      error: null,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      data: null,
      error: {
        code: 'DATABASE_CONNECTION_ERROR',
        message: error.message || 'Could not connect to the database.',
      },
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
