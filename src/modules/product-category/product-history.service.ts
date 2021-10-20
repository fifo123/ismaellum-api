import { CreateProductCategory } from '@/common/domain/dtos/product-category/create-product-category.dto';
import { ProductCategory } from '@/common/domain/models/product-category.model';
import { Injectable } from '@nestjs/common';
import { ProductCategoryRepository } from './product-category.repository';

@Injectable()
export class ProductCategoryService {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository,
  ) {}

  async createProductCategory(
    data: CreateProductCategory,
  ): Promise<ProductCategory> {
    return this.productCategoryRepository.createProductCategory(data);
  }
}
