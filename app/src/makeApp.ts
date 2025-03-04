import fastifyAutoload from "@fastify/autoload";
import Fastify from "fastify";
import path from "node:path";

const SECOND = 1000;

export function makeApp() {
  const app = Fastify({
    logger: true,
    pluginTimeout: 60 * SECOND,
    disableRequestLogging: true,
  });

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
