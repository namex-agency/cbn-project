import Fastify from "fastify";
import cors from "@fastify/cors";
import helmet from "@fastify/helmet";
import { env } from "./core/env.js";
import { prisma } from "./core/prisma.js";
import { productsRoutes } from "./modules/products/products.routes.js";

const app = Fastify({
  logger: true,
});

await app.register(cors, {
  origin: true,
  credentials: true,
});

await app.register(helmet);

await app.register(productsRoutes, {
  prefix: "/products",
});

app.get("/", async () => {
  return {
    status: "ok",
    service: "cbn-api",
    message: "Champagne Bernard Njandja API is running",
  };
});

app.get("/health", async () => {
  return {
    status: "ok",
    service: "cbn-api",
    database: "connected",
  };
});

const start = async () => {
  try {
    await prisma.$connect();

    app.log.info("Prisma connected to PostgreSQL");

    await app.listen({
      port: env.API_PORT,
      host: env.API_HOST,
    });

    app.log.info(`CBN API running on ${env.API_HOST}:${env.API_PORT}`);
  } catch (error) {
    app.log.error(error);
    await prisma.$disconnect();
    process.exit(1);
  }
};

const shutdown = async () => {
  app.log.info("Shutting down CBN API");

  await app.close();
  await prisma.$disconnect();

  process.exit(0);
};

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);

start();