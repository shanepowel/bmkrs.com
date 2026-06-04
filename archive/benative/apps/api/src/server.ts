import Fastify from 'fastify';
import cors from '@fastify/cors';
import rateLimit from '@fastify/rate-limit';

const server = Fastify({ logger: true });

async function main() {
  await server.register(cors, { origin: true });
  await server.register(rateLimit, {
    max: 100,
    timeWindow: '1 minute',
  });

  server.get('/health', async () => ({ status: 'ok', app: 'benative' }));

  const port = Number(process.env.PORT) || 3001;
  await server.listen({ port, host: '0.0.0.0' });
  console.log(`BeNative API listening on http://0.0.0.0:${port}`);
}

main().catch((err) => {
  server.log.error(err);
  process.exit(1);
});
