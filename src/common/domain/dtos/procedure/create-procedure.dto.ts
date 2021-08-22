import { IsNotEmpty, IsString } from 'class-validator';

export class CreateProcedure {
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
    message: 'Error: creditsValue is required',
  })
  creditsValue: number;
  @IsNotEmpty({
    message: 'Error: xpValue is required',
  })
  xpValue: number;

  picture: string;
}
