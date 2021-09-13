import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Product model',
})
export class Product {
  @Field({ nullable: false })
  product_id: number;
  @Field({ nullable: false })
  description: string;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  creditsPrice: number;
  @Field({ nullable: false })
  picture: string;
  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
