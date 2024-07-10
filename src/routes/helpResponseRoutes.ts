import { FastifyInstance } from 'fastify';
import { createHelpResponse, getHelpResponse } from '../controllers/helpResponseController';

async function helpResponseRoutes(fastify: FastifyInstance) {
  fastify.post('/responses', createHelpResponse);
  fastify.get('/responses', getHelpResponse);
}

export default helpResponseRoutes;
