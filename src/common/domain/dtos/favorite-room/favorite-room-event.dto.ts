import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateFavoriteRoom {

  @IsNotEmpty({
    message: 'Error: user_id is required',
  })
  @IsNumber(
    {},
    {
      message: 'Error: user_id must be number',
    },
  )
  user_id: number;

  @IsNotEmpty({
    message: 'Error: room_id is required',
  })
  @IsNumber(
    {},
    {
      message: 'Error: room_id must be number',
    },
  )
  room_id: number;
}
