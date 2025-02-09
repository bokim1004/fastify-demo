import Fastify from "fastify";

export function makeApp() {
  const app = Fastify();

  app.get("/chloe", async () => {
    return {
      name: "chloe kim",
    };
  });
  return app;
}
