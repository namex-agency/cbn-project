export interface Product {
  id: string;

  slug: string;

  sku: string;

  name: string;

  shortDescription: string;

  description: string;

  price: number;

  currency: string;

  stockQuantity: number;

  isAvailable: boolean;

  isFeatured: boolean;

  heroImageUrl: string;

  galleryImages: string[];

  categoryId: string;

  createdAt: string;

  updatedAt: string;
}