import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { env } from "./core/env";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
  credentials: true,
});

await app.register(helmet);

app.get("/health", async () => {
  return {
    status: "ok",
    service: "cbn-api",
  };
});

const start = async () => {
  try {
   await app.listen({
  port: env.API_PORT,
  host: env.API_HOST,
});

    app.log.info(`CBN API running on ${env.API_HOST}:${env.API_PORT}`);
  } catch (error) {
    app.log.error(error);
    process.exit(1);
  }
};

start();