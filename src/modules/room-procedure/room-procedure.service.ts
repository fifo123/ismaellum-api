import { CreateRoomProcedure } from '@/common/domain/dtos/room-procedure/create-room-procedure.dto';
import { Procedure } from '@/common/domain/models';
import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { Injectable } from '@nestjs/common';
import { RoomProcedureRepository } from './room-procedure.repository';

@Injectable()
export class RoomProcedureService {
  constructor(
    private readonly roomProcedureRepository: RoomProcedureRepository,
  ) {}

  async createRoomProcedure(data: CreateRoomProcedure): Promise<RoomProcedure> {
    return this.roomProcedureRepository.createRoomProcedure(data);
  }

  async getRoomProcedures(room_id: number): Promise<RoomProcedure[]> {
    return this.roomProcedureRepository.getRoomProcedures(room_id);
  }

  async getProcedure(room_procedure_id: number): Promise<Procedure> {
    return this.roomProcedureRepository.getProcedure(room_procedure_id);
  }
}
