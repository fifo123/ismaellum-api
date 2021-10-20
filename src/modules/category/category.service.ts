import { CreateCategory } from '@/common/domain/dtos/category/create-category.dto';
import { Category } from '@/common/domain/models/category.model';
import { Injectable } from '@nestjs/common';
import { CategoryRepository } from './category.repository';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  async createCategory(data: CreateCategory): Promise<Category> {
    return this.categoryRepository.createCategory(data);
  }

  async getCategory(category_id: number): Promise<Category> {
    return this.categoryRepository.getCategory(category_id);
  }
}
