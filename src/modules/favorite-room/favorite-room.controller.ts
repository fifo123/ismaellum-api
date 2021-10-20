import { CreateFavoriteRoom } from '@/common/domain/interfaces/create-favorite-room.interface';
import { FavoriteRoom } from '@/common/domain/models/favorite-room.model';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { FavoriteRoomService } from './favorite-room.service';

@Controller('favorite-room')
export class FavoriteRoomController {
  constructor(
    private readonly favoriteRoomService: FavoriteRoomService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/create-favorite-room')
  async createFavoriteRoom(
    @Body() data: CreateFavoriteRoom,
  ): Promise<FavoriteRoom> {
    return this.favoriteRoomService.createFavoriteRoom(data);
  }

	@Get('/:id')
	async getFavoriteRoomsByUserId(@Param('id') id: number) {
		return this.favoriteRoomService.getFavoriteRoomsByUserId(id);
	}
}
