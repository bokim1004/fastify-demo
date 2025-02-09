import fastifyEnv from "@fastify/env";
import { type Static, Type } from "@sinclair/typebox";
import fp from "fastify-plugin";

const schema = Type.Object({
  COOKIE_SECRET: Type.String(),
});

declare module "fastify" {
  interface FastifyInstance {
    env: Static<typeof schema>;
  }
}

export default fp(
  async (app) => {
    await app.register(fastifyEnv, {
      confKey: "env",
      schema,
    });

    app.env.COOKIE_SECRET;
    app.log.info("env plugin init!");
  },
  {
    name: "app.env",
    // env실행되려면 gracefulShoutdown이 필요하다는 것을 명시.(플러그인 동작 순서가 정해짐)
    dependencies: ["app.gracefulShutdown"],
  },
);
