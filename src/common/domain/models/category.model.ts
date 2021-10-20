import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Category model',
})
export class Category {
  @Field({ nullable: false })
  category_id: number;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  description: string;
  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
