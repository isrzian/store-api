import { Controller, Post, Get, Put, Delete, Body, Param, HttpCode, Query } from '@nestjs/common';
import { ProductModel } from './product.model';
import { FindProductDto } from './dto/find-product.dto';

@Controller('product')
export class ProductController {

  @Post()
  async create(@Body() dto: Omit<ProductModel, '_id'>) {

  }

  @Get(':id')
  async get(@Param('id') id: string) {

  }

  @Delete(':id')
  async delete(@Param('id') id: string) {

  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() dto: ProductModel,
  ) {

  }

  @HttpCode(200)
  @Post()
  async find(@Query() dto: FindProductDto) {

  }
}
