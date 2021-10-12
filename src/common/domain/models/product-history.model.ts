import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { Product } from './product.model';

@ObjectType({
  description: 'Product History model',
})
export class ProductHistory {
  @Field({ nullable: false })
  product_history_id: number;

  @Field(() => User, { nullable: false })
  user: User;
  @Field(() => Product, { nullable: false })
  product: Product;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
