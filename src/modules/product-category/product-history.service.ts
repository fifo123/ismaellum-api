import { CreateProductCategory } from '@/common/domain/dtos/product-category/create-product-category.dto';
import { Category } from '@/common/domain/models/category.model';
import { ProductCategory } from '@/common/domain/models/product-category.model';
import { Product } from '@/common/domain/models/product.model';
import { Injectable } from '@nestjs/common';
import { CategoryService } from '../category/category.service';
import { ProductService } from '../products/product.service';
import { ProductCategoryRepository } from './product-category.repository';

@Injectable()
export class ProductCategoryService {
  constructor(
    private readonly productCategoryRepository: ProductCategoryRepository,
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  async createProductCategory(
    data: CreateProductCategory,
  ): Promise<ProductCategory> {
    return this.productCategoryRepository.createProductCategory(data);
  }

  async listProductCategory(): Promise<ProductCategory[]> {
    return this.productCategoryRepository.listProductCategory();
  }

  async getProduct(product_id:number): Promise<Product> {
    return this.productService.getProduct(product_id);
  }

  async getCategory(category_id: number): Promise<Category> {
    return this.categoryService.getCategory(category_id);
  }
}
