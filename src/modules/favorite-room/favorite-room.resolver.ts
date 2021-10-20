import { JwtAuthGuard } from '@/auth/jwt-auth.guard';
import { UserLogged } from '@/common/decorators/user-logged.decorator';
import { LoggedUser } from '@/common/domain/interfaces/auth';
import { FavoriteRoom } from '@/common/domain/models/favorite-room.model';
import { UseGuards } from '@nestjs/common';
import {
  Args,
  Mutation,
  Resolver,
} from '@nestjs/graphql';
import { FavoriteRoomService } from './favorite-room.service';

@Resolver(() => FavoriteRoom)
export class FavoriteRoomResolver {
  constructor(private readonly favoriteRoomService: FavoriteRoomService) {}
  
  @UseGuards(JwtAuthGuard)
  @Mutation(() => FavoriteRoom)
  async createFavoriteRoomForUser(@UserLogged() { user_id }: LoggedUser, @Args('room_id') room_id: number): Promise<FavoriteRoom> {
    return this.favoriteRoomService.createFavoriteRoom({user_id, room_id});
  }
}