import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateFavoriteRoom {

  @Field({ nullable: false })
  user_id: number;

  @Field({ nullable: false })
  room_id: number;
}
