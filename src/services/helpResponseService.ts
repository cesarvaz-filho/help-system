import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createResponse(data: { content: string, requestId: number, userId: number }) {
  return prisma.helpResponse.create({
    data
  });
}

export async function getResponse() {
  return prisma.helpResponse.findMany({
    include: { user: true }
  });
}