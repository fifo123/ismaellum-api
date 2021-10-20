import { CreateProduct } from '@/common/domain/dtos/product/create-product.dto';
import { Product } from '@/common/domain/models/product.model';
import { Injectable } from '@nestjs/common';
import { ProductRepository } from './product.repository';

@Injectable()
export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  async createProduct(data: CreateProduct): Promise<Product> {
    return this.productRepository.createProduct(data);
  }

  async getProduct(product_id:number): Promise<Product> {
    return this.productRepository.getProduct(product_id);
  }
}
