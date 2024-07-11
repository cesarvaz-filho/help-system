import { FastifyRequest, FastifyReply } from 'fastify';
import { createResponse, getResponse } from '../services/helpResponseService';

export async function createHelpResponse(request: FastifyRequest, reply: FastifyReply) {
  const { content, requestId, userId } = request.body as any;
  const helpResponse = await createResponse({ content, requestId, userId });
  return reply.code(201).send(helpResponse);
}

export async function getHelpResponse(request: FastifyRequest, reply: FastifyReply) {
  const helpResponse = await getResponse();
  return reply.send(helpResponse);
}