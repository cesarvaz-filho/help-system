import { FastifyRequest, FastifyReply } from 'fastify';
import { createRequest, getRequests, getRequestById } from '../services/helpRequestService';

export async function createHelpRequest(request: FastifyRequest, reply: FastifyReply) {
  const { title, description, userId } = request.body as any;
  const helpRequest = await createRequest({ title, description, userId });
  return reply.code(201).send(helpRequest);
}

export async function listHelpRequests(request: FastifyRequest, reply: FastifyReply) {
  const helpRequests = await getRequests();
  return reply.send(helpRequests);
}

export async function getHelpRequest(request: FastifyRequest, reply: FastifyReply) {
  const { id } = request.params as any;
  const helpRequest = await getRequestById(id);
  if (!helpRequest) {
    return reply.code(404).send({ message: 'Request not found' });
  }
  return reply.send(helpRequest);
}
