import { ProductCategoryEntity } from '@/infra/typeorm/entities/product-category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryModule } from '../category/category.module';
import { ProductModule } from '../products/product.module';
import { ProductCategoryRepository } from './product-category.repository';
import { ProductCategoryResolver } from './product-category.resolver';
import { ProductCategoryService } from './product-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity]), ProductModule, CategoryModule],
  providers: [ProductCategoryService, ProductCategoryRepository, ProductCategoryResolver],
})
export class ProductCategoryModule {}
