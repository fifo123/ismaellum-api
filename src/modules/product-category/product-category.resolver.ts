import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateProductCategory } from '@/common/domain/dtos/product-category/create-product-category.dto';
import { Category } from '@/common/domain/models/category.model';
import { ProductCategory } from '@/common/domain/models/product-category.model';
import { Product } from '@/common/domain/models/product.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
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

  @Query(() => [ ProductCategory ] )
  async listProductCategory(): Promise<ProductCategory[]> {
    return this.productCategoryService.listProductCategory();
  }

  @ResolveField(() => Product, { nullable: true })
  async product(@Parent() productCategory: ProductCategory): Promise<Product> {
    return this.productCategoryService.getProduct(productCategory.product.product_id);
  }

  @ResolveField(() => Category, { nullable: true })
  async category(@Parent() productCategory: ProductCategory): Promise<Category> {
    return this.productCategoryService.getCategory(productCategory.category.category_id);
  }
}