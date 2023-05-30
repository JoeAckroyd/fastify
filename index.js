const fastify = require("fastify")({
  logger: true,
  bodyLimit: 30 * 1024 * 1024,
});

fastify.register(require("@fastify/cors"), {
  origin: true,
});

fastify.post("/", async (request, reply) => {
  const { body } = request;
  reply.status(200).send();
});
fastify.get("/", async (request, reply) => {
  reply.status(200).send();
});
fastify.listen({ port: process.env.PORT || "8080", host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});