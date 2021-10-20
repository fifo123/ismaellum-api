import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateRoomProcedure } from '@/common/domain/dtos/room-procedure/create-room-procedure.dto';
import { Procedure } from '@/common/domain/models';
import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Parent,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { RoomProcedureService } from './room-procedure.service';

@Resolver(() => RoomProcedure)
export class RoomProcedureResolver {
  constructor(private readonly roomProcedureService: RoomProcedureService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => RoomProcedure)
  async createRoomProcedure(
    @Args('data') data: CreateRoomProcedure,
  ): Promise<RoomProcedure> {
    return this.roomProcedureService.createRoomProcedure(data);
  }

  @ResolveField(() => Procedure, { nullable: true })
  async procedure(@Parent() room: RoomProcedure): Promise<Procedure> {
    return this.roomProcedureService.getProcedure(room.room_procedure_id);
  }
}
