import { CreateCategory } from '@/common/domain/dtos/category/create-category.dto';
import { Category } from '@/common/domain/models/category.model';
import { Product } from '@/common/domain/models/product.model';
import { CategoryEntity } from '@/infra/typeorm/entities/category.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryRepository {
  constructor(
    @InjectRepository(CategoryEntity)
    private readonly categoryRepository: Repository<CategoryEntity>,
  ) {}

  async createCategory(data: CreateCategory): Promise<Category> {
    try {
      const category = this.categoryRepository.create(data);
      return await this.categoryRepository.save(category);
    } catch (error) {
      throw new HttpException('Error in DB, could not create category', 500);
    }
  }
}
