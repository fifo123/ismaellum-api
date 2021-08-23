import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
import { ProcedureHistory } from '@/common/domain/models';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ProcedureHistoryService } from './procedure-history.service';

@Controller('procedure-history')
export class ProcedureHistoryController {
  constructor(
    private readonly procedureHistoryService: ProcedureHistoryService,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/create-procedure-event')
  async createProcedureEvent(
    @Body() data: CreateProcedureEvent,
  ): Promise<ProcedureHistory> {
    return this.procedureHistoryService.createProcedureEvent(data);
  }
}
