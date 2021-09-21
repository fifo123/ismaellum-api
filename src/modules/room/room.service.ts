import { CreateRoom } from '@/common/domain/dtos/room/create-room.dto';
import { Room } from '@/common/domain/models/room.model';
import { Injectable } from '@nestjs/common';
import { RoomRepository } from './room.repository';

@Injectable()
export class RoomService {
  constructor(private readonly roomRepository: RoomRepository) {}

  async createRoom(data: CreateRoom): Promise<Room> {
    return this.roomRepository.createRoom(data);
  }
}
