import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType({
  description: 'Room model',
})
export class Room {
  @Field({ nullable: false })
  room_id: number;
  @Field({ nullable: false })
  number: string;
  @Field({ nullable: false })
  description: string;
  @Field({ nullable: false })
  picture: string;
  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
