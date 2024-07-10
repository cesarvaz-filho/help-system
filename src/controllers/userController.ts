import { FastifyRequest, FastifyReply } from 'fastify';
import { createUser, authenticateUser, listUsers } from '../services/userService';

export async function registerUser(request: FastifyRequest, reply: FastifyReply) {
  const { name, email, password } = request.body as any;
  const user = await createUser({ name, email, password });
  return reply.code(201).send(user);
}

export async function loginUser(request: FastifyRequest, reply: FastifyReply) {
  const { email, password } = request.body as any;
  const token = await authenticateUser({ email, password });
  if (!token) {
    return reply.code(401).send({ message: 'Invalid credentials' });
  }
  return reply.send({ token });
}

export async function getUsers(request: FastifyRequest, reply: FastifyReply) {
  const users = await listUsers();
  return reply.send(users);
}
