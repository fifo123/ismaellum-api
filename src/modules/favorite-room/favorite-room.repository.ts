import { CreateFavoriteRoom } from '@/common/domain/dtos/favorite-room/favorite-room-event.dto';
import { FavoriteRoom } from '@/common/domain/models/favorite-room.model';
import { FavoriteRoomEntity } from '@/infra/typeorm/entities/favorite-room.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class FavoriteRoomRepository {
  constructor(
    @InjectRepository(FavoriteRoomEntity)
    private readonly favoriteRoomRepository: Repository<FavoriteRoomEntity>,
  ) {}

  async createFavoriteRoom(
    data: CreateFavoriteRoom,
  ): Promise<FavoriteRoom> {
    try {
      const createFavoriteRoom = this.favoriteRoomRepository.create({
        ...data,
        user: {
          user_id: data.user_id,
        },
        room: {
          room_id: data.room_id
        }
      });
    
      return await this.favoriteRoomRepository.save(createFavoriteRoom);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not create favorite room',
        500,
      );
    }
  }
  
  async getFavoriteRoomsByUserId(user_id: number): Promise<FavoriteRoom[]> {
    try {
      const favoriteRooms = await this.favoriteRoomRepository.find({
        relations: ['user','room'],
        where: {
          user: {
            user_id,
          },
        },
      });
      return favoriteRooms;
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not find favoriteRooms by user id',
        500,
      );
    }
  }
}
