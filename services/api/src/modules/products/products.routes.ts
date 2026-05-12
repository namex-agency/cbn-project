import type { FastifyInstance } from "fastify";
import { z } from "zod";
import { productsService } from "./products.service.js";

const productQuerySchema = z.object({
  limit: z.coerce.number().int().min(1).max(100).default(50),
});

export async function productsRoutes(app: FastifyInstance) {
  app.get("/", async (request, reply) => {
    const parsedQuery = productQuerySchema.safeParse(request.query);

    if (!parsedQuery.success) {
      return reply.status(400).send({
        status: "error",
        error: "INVALID_QUERY_PARAMETERS",
        message: "The products query parameters are invalid.",
        issues: parsedQuery.error.flatten(),
      });
    }

   const products = await productsService.getProducts(
  parsedQuery.data.limit,
);

    return {
      status: "ok",
      count: products.length,
      data: products,
    };
  });
}