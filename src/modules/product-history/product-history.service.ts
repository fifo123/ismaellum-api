import { CreateProductHistory } from '@/common/domain/interfaces/create-product-history.interface';
import { ProductHistory } from '@/common/domain/models/product-history.model';
import { Injectable } from '@nestjs/common';
import { ProductHistoryRepository } from './product-history.repository';

@Injectable()
export class ProductHistoryService {
  constructor(
    private readonly productHistoryRepository: ProductHistoryRepository,
  ) {}

  async createProductHistory(
    data: CreateProductHistory,
  ): Promise<ProductHistory> {
    return this.productHistoryRepository.createProductHistory(data);
  }
}
