import express from 'express';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

// Import routes
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import helpRequestRoutes from './routes/helpRequestRoutes';

// Use routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/help-requests', helpRequestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
