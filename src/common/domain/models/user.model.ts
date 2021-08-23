import { Field, ObjectType } from '@nestjs/graphql';
import { ProcedureHistory } from './procedure-history.model';

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

  @Field(() => [ProcedureHistory], { nullable: true })
  proceduresHistory?: ProcedureHistory[];

  password: string;
}
