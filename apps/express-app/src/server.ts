import Fastify from 'fastify';

const fastify = Fastify({
  logger: true
});

const port = process.env.PORT || 4300;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
fastify.get('/', async (_request, _reply) => {
  return 'Hello from Fastify with Vite!';
});

// Start the server if we're not in development mode or if we're running preview
if (process.env.NODE_ENV !== 'development' || process.env.PREVIEW) {
  fastify.listen({ port: Number(port), host: '0.0.0.0' }, (err) => {
    if (err) {
      fastify.log.error(err);
      process.exit(1);
    }
  });
}

export const viteNodeApp = fastify;
