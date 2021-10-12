import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Stats model',
})
export class Stats {
  @Field(() => Int, {
    nullable: true,
  })
  credits?: number;
  @Field(() => Int, {
    nullable: true,
  })
  totalXp?: number;
  @Field(() => Int, {
    nullable: true,
  })
  level?: number;
  @Field(() => Int, {
    nullable: true,
  })
  currentXp?: number;
  @Field(() => Int, {
    nullable: true,
  })
  levelXp?: number;
}
