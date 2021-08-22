import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class MakeLogin {
  @Field({ nullable: false })
  email: string;
  @Field({ nullable: false })
  password: string;
}
