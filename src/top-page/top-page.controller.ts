import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query } from '@nestjs/common';
import { TopPageModel } from './top-page.model';
import { FindTopPageDto } from './dto/find-top-page.dto';

@Controller('top-page')
export class TopPageController {
  @Post()
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {

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
	@Body() dto: TopPageModel,
  ) {

  }

  @HttpCode(200)
  @Post()
  async find(@Query() dto: FindTopPageDto) {

  }
}
