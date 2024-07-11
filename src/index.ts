import Fastify from 'fastify';
import userRoutes from './routes/userRoutes';
import helpRequestRoutes from './routes/helpRequestRoutes';
import helpResponseRoutes from './routes/helpResponseRoutes';

const server = Fastify();

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
