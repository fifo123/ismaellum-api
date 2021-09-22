import { CreateFavoriteRoom } from '@/common/domain/dtos/favorite-room/favorite-room-event.dto';
import { FavoriteRoom } from '@/common/domain/models/favorite-room.model';
import { Injectable } from '@nestjs/common';
import { FavoriteRoomRepository } from './favorite-room.repository';

@Injectable()
export class FavoriteRoomService {
  constructor(  private readonly favoriteRoomRepository: FavoriteRoomRepository ) {}

  async getFavoriteRoomsByUserId(user_id: number): Promise<FavoriteRoom[]> {
    return this.favoriteRoomRepository.getFavoriteRoomsByUserId(user_id);
  }

  async createFavoriteRoom(
    data: CreateFavoriteRoom,
  ): Promise<FavoriteRoom> {
    return this.favoriteRoomRepository.createFavoriteRoom(data);
  }
}
