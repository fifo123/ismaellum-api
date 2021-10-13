import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateCategory {
  @Field({ nullable: true })
  description: string;
  @Field({ nullable: false })
  name: string;
}
