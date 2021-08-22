import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'User model',
})
export class User {
  @Field({ nullable: false })
  user_id: number;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: true })
  profileUri: string;
  @Field({ nullable: false })
  email: string;

  password: string;
}
