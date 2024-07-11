import Fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import helpRequestRoutes from './routes/helpRequestRoutes';
import helpResponseRoutes from './routes/helpResponseRoutes';
import cors from 'fastify-cors';

const server = Fastify();


server.register(cors, {
  origin: '*', // Permitir todas as origens
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
  allowedHeaders: '*', // Cabeçalhos permitidos
  credentials: true,
});

// Tratamento de opções preflight
server.options('*', (request, reply) => {
  reply.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  reply.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  reply.send();
});

server.register(userRoutes);
server.register(helpRequestRoutes);
server.register(helpResponseRoutes);

server.listen({ port: 3000 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
