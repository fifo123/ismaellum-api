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
      throw new HttpException('Error in DB, could not create room', 500);
    }
  }

  async getInformationForRoom(room_id:number): Promise<Room> {
    try {
      const roomInfo = this.roomRepository.findOne({
        where: {
          room_id
        }        
      });

      return roomInfo;
    } catch (error) {
      throw new HttpException('Error in DB, could not create room', 500);
    }
  }
}
