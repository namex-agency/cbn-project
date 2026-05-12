type ApiProductPrice = {
  id: string;
  productId: string;
  region: string;
  customerSegment: string;
  currency: string;
  amount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

type Product = {
  id: string;
  slug: string;
  name: string;
  collectionId: string;
  cuveeId: string;
  sku: string;
  displayName: string;
  shortDescription: string;
  description: string;
  createdAt: string;
  updatedAt: string;
  prices: ApiProductPrice[];
};
import { Prisma } from "@prisma/client";
import { prisma } from "../../core/prisma.js";

const productWithPrices = Prisma.validator<Prisma.ProductDefaultArgs>()({
  include: {
    prices: true,
  },
});

type ProductRecord = Prisma.ProductGetPayload<typeof productWithPrices>;

function toProduct(product: ProductRecord): Product {
  return {
    id: product.id,
    slug: product.slug,
    name: product.name,
    collectionId: product.collectionId,
    cuveeId: product.cuveeId,
    sku: product.sku,
    displayName: product.displayName,
    shortDescription: product.shortDescription,
    description: product.description,
    createdAt: product.createdAt.toISOString(),
    updatedAt: product.updatedAt.toISOString(),
prices: product.prices.map((price) => ({
  id: price.id,
  productId: price.productId,
  region: String(price.region),
  customerSegment: String(price.customerSegment),
  currency: String(price.currency),
  amount: Number(price.amount),
  isActive: price.isActive,
  createdAt: price.createdAt.toISOString(),
  updatedAt: price.updatedAt.toISOString(),
})),
  };
}

export interface ProductsRepository {
  findAll(limit: number): Promise<Product[]>;
  findById(id: string): Promise<Product | null>;
  findBySlug(slug: string): Promise<Product | null>;
}

export class PrismaProductsRepository implements ProductsRepository {
  async findAll(limit: number): Promise<Product[]> {
    const products = await prisma.product.findMany({
      take: limit,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        prices: true,
      },
    });

    return products.map(toProduct);
  }

  async findById(id: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
      include: {
        prices: true,
      },
    });

    return product ? toProduct(product) : null;
  }

  async findBySlug(slug: string): Promise<Product | null> {
    const product = await prisma.product.findUnique({
      where: {
        slug,
      },
      include: {
        prices: true,
      },
    });

    return product ? toProduct(product) : null;
  }
}