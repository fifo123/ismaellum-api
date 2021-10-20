import { CreateRoom } from '@/common/domain/dtos/room/create-room.dto';
import { ProcedureHistory } from '@/common/domain/models';
import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { Room } from '@/common/domain/models/room.model';
import { Injectable } from '@nestjs/common';
import { RoomProcedureService } from '../room-procedure/room-procedure.service';
import { RoomRepository } from './room.repository';

@Injectable()
export class RoomService {
  constructor(
    private readonly roomRepository: RoomRepository,
    private readonly roomProcedureService: RoomProcedureService,
  ) {}

  async createRoom(data: CreateRoom): Promise<Room> {
    return this.roomRepository.createRoom(data);
  }

  async getInformationForRoom(room_id: number): Promise<Room> {
    return this.roomRepository.getInformationForRoom(room_id);
  }

  async getRoomProcedures(room_id: number): Promise<RoomProcedure[]> {
    return this.roomProcedureService.getRoomProcedures(room_id);
  }

  async getHistory(user_id: number): Promise<ProcedureHistory[]> {
    return this.roomRepository.getHistory(user_id);
  }
}
