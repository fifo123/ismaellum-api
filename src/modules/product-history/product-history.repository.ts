import { CreateProductHistory } from '@/common/domain/interfaces/create-product-history.interface';
import { ProductHistory } from '@/common/domain/models/product-history.model';
import { ProductHistoryEntity } from '@/infra/typeorm/entities/product-history.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ProductHistoryRepository {
  constructor(
    @InjectRepository(ProductHistoryEntity)
    private readonly productHistoryRepository: Repository<ProductHistoryEntity>,
  ) {}

  async createProductHistory(
    data: CreateProductHistory,
  ): Promise<ProductHistory> {
    try {
      const createProductHistory = this.productHistoryRepository.create({
        ...data,
        user: {
          user_id: data.user_id,
        },
        product: {
          product_id: data.product_id
        }
      });
      
      return await this.productHistoryRepository.save(createProductHistory);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not create product history',
        500,
      );
    }
  }

  async getCreditsUsed(user_id:number): Promise<number> {
    const qbProductsBought = this.productHistoryRepository.createQueryBuilder('product-history');
      qbProductsBought.leftJoinAndSelect('product-history.user', 'user');
      qbProductsBought.leftJoinAndSelect('product-history.product', 'product');
      qbProductsBought.where('user.user_id = :user_id', {
        user_id,
      });
      qbProductsBought.select('SUM("credits_price")', "sum");
      
      const credits : number = (await qbProductsBought.getRawOne<{sum:number}>()).sum;
      
      return +(credits*1 || 0).toFixed(0);
  }
}
