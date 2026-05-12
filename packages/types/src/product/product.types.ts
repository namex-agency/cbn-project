export type ProductRegion = "europe" | "america" | "africa";

export type ProductCustomerSegment = "retail" | "professional";

export type ProductCurrency = "EUR" | "USD" | "XAF";

export interface ProductCollection {
  id: string;

  slug: string;

  name: string;

  isActive: boolean;
}

export interface ProductCuvee {
  id: string;

  collectionId: string;

  slug: string;

  name: string;

  vintageAgeYears: number;

  isActive: boolean;
}

export interface ProductPrice {
  id: string;

  productId: string;

  region: ProductRegion;

  customerSegment: ProductCustomerSegment;

  amount: number;

  currency: ProductCurrency;

  isActive: boolean;

  validFrom: string;

  validUntil: string | null;
}

export interface Product {
  id: string;

  collectionId: string;

  cuveeId: string;

  slug: string;

  sku: string;

  name: string;

  displayName: string;

  shortDescription: string;

  description: string;

  heroImageUrl: string;

  galleryImages: string[];

  prices: ProductPrice[];

  stockQuantity: number;

  isAvailable: boolean;

  isFeatured: boolean;

  createdAt: string;

  updatedAt: string;
}