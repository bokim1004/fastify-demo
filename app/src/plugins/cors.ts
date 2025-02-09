import fastifyCors from "@fastify/cors";
import fp from "fastify-plugin";

export default fp(
  async (app) => {
    await app.register(fastifyCors, {
      preflightContinue: true,
    });
    console.log("CORS 플러그인 장착");
  },
  {
    name: "cors",
  },
);
