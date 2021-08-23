import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateProcedureEvent {
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
    message: 'Error: procedure_id is required',
  })
  @IsNumber(
    {},
    {
      message: 'Error: procedure_id must be number',
    },
  )
  procedure_id: number;

  @IsNotEmpty({
    message: 'Error: percent is required',
  })
  @IsNumber(
    {},
    {
      message: 'Error: percent must be number',
    },
  )
  percent: number;
}
