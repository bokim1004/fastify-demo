import type { FastifyInstance, FastifyRequest } from "fastify";

interface Context {
  app: FastifyInstance;
  req: FastifyRequest;
}
