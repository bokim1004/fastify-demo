import "dotenv-safe/config.js";
import { makeApp } from "./makeApp";

const HOST = process.env.HOST ?? "0.0.0.0";
const PORT = Number(process.env.PORT ?? "9000");

const app = makeApp();

await app.listen({
  host: HOST,
  port: PORT,
});

app.log.info({}, `Server listening at https://localhost${PORT}`);
