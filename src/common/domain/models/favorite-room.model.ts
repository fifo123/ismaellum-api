import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '.';
import { Room } from './room.model';

@ObjectType({
  description: 'Favorite Room model',
})
export class FavoriteRoom {
  @Field({ nullable: false })
  favorite_room_id: number;
  
  @Field(() => User, { nullable: false })
  user: User;

  @Field(() => Room, { nullable: false })
  room: Room;

  @Field(() => Date, { nullable: false })
  createdAt: Date;
  @Field(() => Date, { nullable: false })
  updatedAt: Date;
}
