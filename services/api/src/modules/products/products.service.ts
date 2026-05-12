import {
  PrismaProductsRepository,
  type ProductsRepository,
} from "./products.repository.js";

const productsRepository: ProductsRepository = new PrismaProductsRepository();

export class ProductsService {
  constructor(private readonly repository: ProductsRepository) {}

  async getProducts(limit: number) {
    return this.repository.findAll(limit);
  }

  async getProductById(id: string) {
    return this.repository.findById(id);
  }

  async getProductBySlug(slug: string) {
    return this.repository.findBySlug(slug);
  }
}

export const productsService = new ProductsService(productsRepository);

export const getProducts = (params: { limit: number }) => {
  return productsService.getProducts(params.limit);
};