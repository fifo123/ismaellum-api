import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class SignUpUser {
  @Field({ nullable: false })
  email: string;
  @Field({ nullable: false })
  password: string;
  @Field({ nullable: false })
  name: string;
}
