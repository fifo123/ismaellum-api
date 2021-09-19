import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProduct {
  @IsNotEmpty({
    message: 'Error: description is required',
  })
  @IsString({
    message: 'Error: description must be string',
  })
  description: string;
  @IsNotEmpty({
    message: 'Error: name is required',
  })
  @IsString({
    message: 'Error: name must be string',
  })
  name: string;
  @IsNotEmpty({
    message: 'Error: creditsPrice is required',
  })
  creditsPrice: number;

  picture: string;
}
