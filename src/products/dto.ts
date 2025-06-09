// src/products/dto.ts
export class CreateProductDto {
  name: string;
  price: string;
  imageUrl: string;
  category: string;
}

export class UpdateProductDto {
  name?: string;
  price?: string;
  imageUrl?: string;
  category?: string;
}

export class CreateOrderDto {
  productId: number;
  customerName: string;
  address: string;
  phone: string;
}