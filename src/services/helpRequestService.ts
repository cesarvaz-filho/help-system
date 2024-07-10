import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function createRequest(data: { title: string, description: string, userId: number }) {
  return prisma.helpRequest.create({
    data
  });
}

export async function getRequests() {
  return prisma.helpRequest.findMany({
    include: { user: true }
  });
}
/*
export async function getRequestById(id: number) {
  return prisma.helpRequest.findUnique({
    where: { id },
    include: { user: true, responses: true }
  });
}
*/
export async function getRequestById(id: number) {
  try {
    const requestId = parseInt(id.toString());

    const request = await prisma.helpRequest.findUnique({
      where: { id: requestId },
      include: { user: true, responses: true },
    });

    return request;
  } catch (error) {
    throw new Error(`Error fetching request by id: ${error}`);
  }
}
