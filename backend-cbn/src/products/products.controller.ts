import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  create(@Body() data: any) {
    return this.productsService.create(data);
  }

  @Get()
  findAll() {
    return this.productsService.findAll();
  }
}