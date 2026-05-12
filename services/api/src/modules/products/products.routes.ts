import type { FastifyInstance } from "fastify";
import { prisma } from "../../core/prisma.js";

export async function productsRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return {
      status: "ok",
      count: products.length,
      data: products,
    };
  });
}