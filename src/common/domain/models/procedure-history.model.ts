import { Field, ObjectType } from '@nestjs/graphql';
import { Procedure } from './procedure.model';

@ObjectType({
  description: 'Procedure History model',
})
export class ProcedureHistory {
  @Field({ nullable: false })
  procedure_history_id: number;
  @Field({ nullable: false })
  percent: number;

  @Field({ nullable: false })
  totalXp: number;
  @Field({ nullable: false })
  totalCredits: number;

  @Field(() => Procedure, { nullable: false })
  procedure: Procedure;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
