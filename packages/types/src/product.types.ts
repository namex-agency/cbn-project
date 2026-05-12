export interface ProductPrice {
  id: string;
  productId: string;
  region: string;
  customerSegment: string;
  currency: string;
  amount: number;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Product {
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
  prices: ProductPrice[];
}