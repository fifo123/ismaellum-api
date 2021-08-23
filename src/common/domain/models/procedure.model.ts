import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Procedure model',
})
export class Procedure {
  @Field({ nullable: false })
  procedure_id: number;
  @Field({ nullable: false })
  description: string;
  @Field({ nullable: false })
  name: string;
  @Field({ nullable: false })
  creditsValue: number;
  @Field({ nullable: false })
  xpValue: number;
  @Field({ nullable: false })
  picture: string;
  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
