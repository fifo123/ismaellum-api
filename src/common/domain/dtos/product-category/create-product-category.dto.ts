import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateProductCategory {
  @Field({ nullable: false })
  category_id: number;
  @Field({ nullable: false })
  product_id: number;
}
