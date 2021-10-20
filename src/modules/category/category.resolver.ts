import { CreateCategory } from '@/common/domain/dtos/category/create-category.dto';
import { Category } from '@/common/domain/models/category.model';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { CategoryService } from './category.service';

@Resolver(() => Category)
export class CategoryResolver {
  constructor(private readonly categoryService: CategoryService) {}
  
  @Mutation(() => Category)
  async createCategory(@Args('data') data: CreateCategory): Promise<Category> {
    return this.categoryService.createCategory(data);
  }
}