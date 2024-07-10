import { FastifyInstance } from 'fastify';
import { registerUser, loginUser, getUsers } from '../controllers/userController';

async function userRoutes(fastify: FastifyInstance) {
  fastify.post('/users/register', registerUser);
  fastify.post('/users/login', loginUser);
  fastify.get('/users', getUsers);
}

export default userRoutes;
