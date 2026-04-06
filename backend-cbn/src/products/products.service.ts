import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private prisma: PrismaService) {}

async create(data: { name: string; price: number }) {
  return this.prisma.product.create({
    data: {
      name: data.name,
      price: data.price,
    },
  });
}

  async findAll() {
    return this.prisma.product.findMany();
  }
}
