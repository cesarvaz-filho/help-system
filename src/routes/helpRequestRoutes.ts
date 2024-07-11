import { FastifyInstance } from 'fastify';
import { createHelpRequest, listHelpRequests, getHelpRequest } from '../controllers/helpRequestController';

async function helpRequestRoutes(fastify: FastifyInstance) {
  fastify.post('/requests', createHelpRequest);
  fastify.get('/requests', listHelpRequests);
  fastify.get('/requests/:id', getHelpRequest);
}

export default helpRequestRoutes;
