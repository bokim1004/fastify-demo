import fp from "fastify-plugin";

declare module "fastify" {
  interface FastifyRequest {
    dataloaders: {};
  }
}

export default fp(
  (app) => {
    app.decorateRequest("dataloaders", {});
    app.addHook("preHandler", async (req) => {
      req.dataloaders = {
        a: 3,
      };
    });
  },
  {
    name: "req.dataloaders",
  },
);
