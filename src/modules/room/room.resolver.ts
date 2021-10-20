import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { Room } from '@/common/domain/models/room.model';
import {
  Args,
  Int,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { RoomService } from './room.service';

@Resolver(() => Room)
export class RoomResolver {
  constructor(private readonly roomService: RoomService) {}

  @Query(() => Room)
  async room(@Args('room_id') room_id: number): Promise<Room> {
    return this.roomService.getInformationForRoom(room_id);
  }

  @ResolveField(() => [RoomProcedure], { nullable: true })
  async roomProcedures(@Parent() room: Room): Promise<RoomProcedure[]> {
    return this.roomService.getRoomProcedures(room.room_id);
  }
}
