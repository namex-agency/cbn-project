import type { Product } from "@cbn/types";

export interface ProductsRepository {
  findAll(): Promise<Product[]>;

  findById(id: string): Promise<Product | null>;

  findBySlug(slug: string): Promise<Product | null>;
}