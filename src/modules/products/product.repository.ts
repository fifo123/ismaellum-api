import { CreateProduct } from '@/common/domain/dtos/product/create-product.dto';
import { Product } from '@/common/domain/models/product.model';
import { ProductEntity } from '@/infra/typeorm/entities/product.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductRepository {
  constructor(
    @InjectRepository(ProductEntity)
    private readonly productRepository: Repository<ProductEntity>,
  ) {}

  async createProduct(data: CreateProduct): Promise<Product> {
    try {
      const product = this.productRepository.create(data);
      return await this.productRepository.save(product);
    } catch (error) {
      throw new HttpException('Error in DB, could not create product', 500);
    }
  }

  async getProduct(product_id:number): Promise<Product> {
    return await this.productRepository.findOne(product_id);
  }
}
