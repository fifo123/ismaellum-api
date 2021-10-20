import { CreateProductHistory } from '@/common/domain/interfaces/create-product-history.interface';
import { ProductHistory } from '@/common/domain/models/product-history.model';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProductHistoryService } from './product-history.service';

@Controller('product-history')
export class ProductHistoryController {
  constructor(
    private readonly productHistoryService: ProductHistoryService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/create-product-history')
  async createProductEvent(
    @Body() data: CreateProductHistory,
  ): Promise<ProductHistory> {
    return this.productHistoryService.createProductHistory(data);
  }
}
