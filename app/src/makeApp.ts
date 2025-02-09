import Fastify from "fastify";

export function makeApp() {
  const app = Fastify();

  app.get("/healthz", async () => {
    return {
      ok: true,
    };
  });
  return app;
}
