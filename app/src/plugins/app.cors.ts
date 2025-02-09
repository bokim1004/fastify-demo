import fastifyCors from "@fastify/cors";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    await app.register(fastifyCors, {
      preflightContinue: true,
    });
    app.log.info("cors plugin init!");
  },
  {
    name: "app.cors",
  },
);
