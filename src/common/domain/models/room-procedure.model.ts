import { Field, ObjectType } from '@nestjs/graphql';
import { Room } from './room.model';
import { Procedure } from '.';

@ObjectType({
  description: 'Room Procedure model',
})
export class RoomProcedure {
  @Field({ nullable: false })
  room_procedure_id: number;

  @Field(() => Room, { nullable: false })
  room: Room;
  @Field(() => Procedure, { nullable: false })
  procedure: Procedure;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
