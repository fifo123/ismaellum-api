import { ProductCategoryEntity } from '@/infra/typeorm/entities/product-category.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategoryRepository } from './product-category.repository';
import { ProductCategoryResolver } from './product-category.resolver';
import { ProductCategoryService } from './product-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductCategoryEntity])],
  providers: [ProductCategoryService, ProductCategoryRepository, ProductCategoryResolver],
})
export class ProductCategoryModule {}
