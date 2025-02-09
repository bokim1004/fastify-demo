import fastifyAutoload from "@fastify/autoload";
import Fastify from "fastify";
import path from "node:path";

export function makeApp() {
  const app = Fastify();

  app.register(fastifyAutoload, {
    dir: path.resolve("./dist/plugins"),
  });

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });
  return app;
}
