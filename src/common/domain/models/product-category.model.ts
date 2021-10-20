import { Field, ObjectType } from '@nestjs/graphql';
import { Product } from './product.model';
import { Category } from './category.model';

@ObjectType({
  description: 'Product Category model',
})
export class ProductCategory {
  @Field({ nullable: false })
  product_category_id: number;

  @Field(() => Category, { nullable: false })
  category: Category;
  @Field(() => Product, { nullable: false })
  product: Product;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
