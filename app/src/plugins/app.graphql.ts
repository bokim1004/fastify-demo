import type { FastifyInstance, FastifyRequest } from "fastify";
import fp from "fastify-plugin";
import { createSchema, createYoga } from "graphql-yoga";
import fs from "node:fs/promises";
import path from "node:path";
import { resolvers } from "../graphql/resolvers";

export default fp(async (app) => {
  interface Context {
    app: FastifyInstance;
    req: FastifyRequest;
  }
  const typeDefs = await fs.readFile(
    path.resolve("./src/graphql/__generated__/schema.graphql"),
    "utf-8",
  );
  const schema = createSchema<Context>({
    typeDefs,
    resolvers,
  });

  const yoga = createYoga<Context>({
    schema,
  });
  app.route({
    method: ["GET", "POST", "OPTIONS"],
    url: yoga.graphqlEndpoint,
    async handler(req, reply) {
      // context는 HTTP요청마다 매번 새로 생성되는 객체
      const context: Context = { app, req };
      const response = await yoga.handleNodeRequestAndResponse(
        req,
        reply,
        context,
      );
      response.headers.forEach((value, key) => {
        reply.header(key, value);
      });
      reply.status(response.status);
      reply.send(response.body);
      return reply;
    },
  });
});
