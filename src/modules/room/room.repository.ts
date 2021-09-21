import { CreateRoom } from '@/common/domain/dtos/room/create-room.dto';
import { Room } from '@/common/domain/models/room.model';
import { RoomEntity } from '@/infra/typeorm/entities/room.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomRepository {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  async createRoom(data: CreateRoom): Promise<Room> {
    try {
      const room = this.roomRepository.create(data);
      return await this.roomRepository.save(room);
    } catch (error) {
      throw new HttpException('Error in DB, could not create product', 500);
    }
  }
}
