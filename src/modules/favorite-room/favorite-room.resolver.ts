import { CreateFavoriteRoom } from '@/common/domain/dtos/favorite-room/favorite-room-event.dto';
import { FavoriteRoom } from '@/common/domain/models/favorite-room.model';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { FavoriteRoomService } from './favorite-room.service';

@Resolver(() => FavoriteRoom)
export class FavoriteRoomResolver {
  constructor(private readonly favoriteRoomService: FavoriteRoomService) {}
  
  @Mutation(() => FavoriteRoom)
  async createFavoriteRoomForUser(@Args('data') data: CreateFavoriteRoom): Promise<FavoriteRoom> {
    return this.favoriteRoomService.createFavoriteRoom(data);
  }
}
