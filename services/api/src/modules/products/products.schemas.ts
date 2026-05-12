import { z } from "zod";

export const productRegionSchema = z.enum(["europe", "america", "africa"]);

export const productCustomerSegmentSchema = z.enum(["retail", "professional"]);

export const productCurrencySchema = z.enum(["EUR", "USD", "XAF"]);

export const productCollectionSchema = z.object({
  id: z.string().uuid(),
  slug: z.string().min(1),
  name: z.string().min(1),
  isActive: z.boolean(),
});

export const productCuveeSchema = z.object({
  id: z.string().uuid(),
  collectionId: z.string().uuid(),
  slug: z.string().min(1),
  name: z.string().min(1),
  vintageAgeYears: z.number().int().positive(),
  isActive: z.boolean(),
});

export const productPriceSchema = z.object({
  id: z.string().uuid(),
  productId: z.string().uuid(),
  region: productRegionSchema,
  customerSegment: productCustomerSegmentSchema,
  amount: z.number().positive(),
  currency: productCurrencySchema,
  isActive: z.boolean(),
  validFrom: z.string().datetime(),
  validUntil: z.string().datetime().nullable(),
});

export const productSchema = z.object({
  id: z.string().uuid(),
  collectionId: z.string().uuid(),
  cuveeId: z.string().uuid(),
  slug: z.string().min(1),
  sku: z.string().min(1),
  name: z.string().min(1),
  displayName: z.string().min(1),
  shortDescription: z.string().min(1),
  description: z.string().min(1),
  heroImageUrl: z.string().min(1),
  galleryImages: z.array(z.string().min(1)).default([]),
  prices: z.array(productPriceSchema).default([]),
  stockQuantity: z.number().int().nonnegative(),
  isAvailable: z.boolean(),
  isFeatured: z.boolean(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export const createProductSchema = productSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
});

export const updateProductSchema = createProductSchema.partial();

export const createProductCollectionSchema = productCollectionSchema.omit({
  id: true,
});

export const updateProductCollectionSchema =
  createProductCollectionSchema.partial();

export const createProductCuveeSchema = productCuveeSchema.omit({
  id: true,
});

export const updateProductCuveeSchema = createProductCuveeSchema.partial();

export const createProductPriceSchema = productPriceSchema.omit({
  id: true,
});

export const updateProductPriceSchema = createProductPriceSchema.partial();

export type ProductPayload = z.infer<typeof productSchema>;
export type ProductCollectionPayload = z.infer<typeof productCollectionSchema>;
export type ProductCuveePayload = z.infer<typeof productCuveeSchema>;
export type ProductPricePayload = z.infer<typeof productPriceSchema>;

export type CreateProductPayload = z.infer<typeof createProductSchema>;
export type UpdateProductPayload = z.infer<typeof updateProductSchema>;

export type CreateProductCollectionPayload = z.infer<
  typeof createProductCollectionSchema
>;
export type UpdateProductCollectionPayload = z.infer<
  typeof updateProductCollectionSchema
>;

export type CreateProductCuveePayload = z.infer<
  typeof createProductCuveeSchema
>;
export type UpdateProductCuveePayload = z.infer<
  typeof updateProductCuveeSchema
>;

export type CreateProductPricePayload = z.infer<
  typeof createProductPriceSchema
>;
export type UpdateProductPricePayload = z.infer<
  typeof updateProductPriceSchema
>;