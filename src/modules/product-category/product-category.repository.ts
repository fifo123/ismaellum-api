import { CreateProductCategory } from '@/common/domain/dtos/product-category/create-product-category.dto';
import { CreateProductHistory } from '@/common/domain/interfaces/create-product-history.interface';
import { ProductCategory } from '@/common/domain/models/product-category.model';
import { ProductHistory } from '@/common/domain/models/product-history.model';
import { ProductCategoryEntity } from '@/infra/typeorm/entities/product-category.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductCategoryRepository {
  constructor(
    @InjectRepository(ProductCategoryEntity)
    private readonly productCategoryEntity: Repository<ProductCategoryEntity>,
  ) {}

  async createProductCategory(
    data: CreateProductCategory,
  ): Promise<ProductCategory> {
    try {
      const createProductCategory = this.productCategoryEntity.create({
        ...data,
        category: {
          category_id: data.category_id,
        },
        product: {
          product_id: data.product_id
        }
      });
    
      return await this.productCategoryEntity.save(createProductCategory);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not create product category',
        500,
      );
    }
  }

  async listProductCategory(): Promise<ProductCategory[]> {
    const productCategoryList = await this.productCategoryEntity.find({relations: ['product', 'category']});
    return productCategoryList;
  }
}
