import { FastifyRequest, FastifyReply, HookHandlerDoneFunction } from 'fastify';
import jwt from 'jsonwebtoken';

const secret = 'supersecretkey'; // Use a more secure key in production

export async function authenticate(request: FastifyRequest, reply: FastifyReply, done: HookHandlerDoneFunction) {
  const authHeader = request.headers.authorization;
  if (!authHeader) {
    return reply.code(401).send({ message: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, secret) as { userId: number };
    request.user = { id: decoded.userId };
    done();
  } catch (err) {
    return reply.code(401).send({ message: 'Invalid token' });
  }
}
