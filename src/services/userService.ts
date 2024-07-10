import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const secret = 'supersecretkey'; // Use uma chave mais segura em produção

export async function createUser(data: { name: string, email: string, password: string }) {
  const hashedPassword = await bcrypt.hash(data.password, 10);
  return prisma.user.create({
    data: {
      ...data,
      password: hashedPassword
    }
  });
}

export async function authenticateUser(data: { email: string, password: string }) {
  const user = await prisma.user.findUnique({
    where: { email: data.email }
  });
  if (user && await bcrypt.compare(data.password, user.password)) {
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: '1h' });
    return token;
  }
  return null;
}

export async function listUsers() {
  return prisma.user.findMany();
}
