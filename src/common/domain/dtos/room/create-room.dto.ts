import { IsNotEmpty, IsString } from 'class-validator';

export class CreateRoom {
  @IsNotEmpty({
    message: 'Error: description is required',
  })
  @IsString({
    message: 'Error: description must be string',
  })
  description: string;
  
  @IsNotEmpty({
    message: 'Error: number is required',
  })
  number: string;

  picture: string;
}
