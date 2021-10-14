import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { CreateRoomProcedure } from '@/common/domain/dtos/room-procedure/create-room-procedure.dto';
import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { RoomProcedureService } from './room-procedure.service';

@Resolver(() => RoomProcedure)
export class RoomProcedureResolver {
  constructor(private readonly roomProcedureService: RoomProcedureService) {}
  
  @UseGuards(JwtAuthGuard)
  @Mutation(() => RoomProcedure)
  async createRoomProcedure(@Args('data') data: CreateRoomProcedure): Promise<RoomProcedure> {
    return this.roomProcedureService.createRoomProcedure(data);
  }
}