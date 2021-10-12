import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import { ProductHistory } from '@/common/domain/models/product-history.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { ProductHistoryService } from './product-history.service';

@Resolver(() => ProductHistory)
export class ProductHistoryResolver {
  constructor(private readonly productHistoryService: ProductHistoryService) {}
  
  @UseGuards(JwtAuthGuard)
  @Mutation(() => ProductHistory)
  async createProductHistoryForUser(@UserLogged() { user_id }: LoggedUser, @Args('product_id') product_id: number): Promise<ProductHistory> {
    return this.productHistoryService.createProductHistory({user_id, product_id});
  }
}