import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateProductCategory } from '@/common/domain/dtos/product-category/create-product-category.dto';
import { ProductCategory } from '@/common/domain/models/product-category.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { ProductCategoryService } from './product-history.service';

@Resolver(() => ProductCategory)
export class ProductCategoryResolver {
  constructor(private readonly productCategoryService: ProductCategoryService) {}
  
  @UseGuards(JwtAuthGuard)
  @Mutation(() => ProductCategory)
  async createProductCategory(@Args('data') data: CreateProductCategory): Promise<ProductCategory> {
    return this.productCategoryService.createProductCategory(data);
  }
}