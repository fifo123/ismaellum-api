import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
import { XpAndCreditsTotal } from '@/common/domain/interfaces/xp-and-credits-total.interface';
import { ProcedureHistory } from '@/common/domain/models';
import { Injectable } from '@nestjs/common';
import { ProcedureHistoryRepository } from './procedure-history.repository';

@Injectable()
export class ProcedureHistoryService {
  constructor(
    private readonly procedureHistoryRepository: ProcedureHistoryRepository,
  ) {}

  async getProceduresByUserId(user_id: number): Promise<ProcedureHistory[]> {
    return this.procedureHistoryRepository.getProceduresByUserId(user_id);
  }

  async createProcedureEvent(
    data: CreateProcedureEvent,
  ): Promise<ProcedureHistory> {
    return this.procedureHistoryRepository.createProcedureEvent(data);
  }

  async getUserTotalXpAndCredits(user_id: number): Promise<XpAndCreditsTotal> {
    return this.procedureHistoryRepository.getUserTotalXpAndCredits(user_id);
  }
}
