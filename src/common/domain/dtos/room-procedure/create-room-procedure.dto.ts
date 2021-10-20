import { Field, InputType } from "@nestjs/graphql";

@InputType()
export class CreateRoomProcedure {
  @Field({ nullable: false })
  room_id: number;
  @Field({ nullable: false })
  procedure_id: number;
}
