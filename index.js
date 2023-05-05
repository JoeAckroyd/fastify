const fastify = require("fastify")({
  logger: true,
  bodyLimit: 30 * 1024 * 1024,
});

fastify.register(require("@fastify/cors"), {
  origin: true,
});

fastify.post("/", async (request, reply) => {
  reply.status(200).send();
});
fastify.get("/", async (request, reply) => {
  reply.status(200).send();
});
fastify.listen({ port: 8080 }, (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`Server listening on http://localhost:${fastify.server.address().port}`);
});
