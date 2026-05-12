import type { Product } from "@cbn/types";
import type { ProductsRepository } from "./products.repository";

export class ProductsService {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async getProducts(): Promise<Product[]> {
    return this.productsRepository.findAll();
  }

  async getProductById(id: string): Promise<Product | null> {
    return this.productsRepository.findById(id);
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return this.productsRepository.findBySlug(slug);
  }
}