import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
import { XpAndCreditsTotal } from '@/common/domain/interfaces/xp-and-credits-total.interface';
import { ProcedureHistory } from '@/common/domain/models';
import { Injectable } from '@nestjs/common';
import { EventsGateway } from '../events/events.gateway';
import { ProcedureHistoryRepository } from './procedure-history.repository';

@Injectable()
export class ProcedureHistoryService {
  constructor(
    private readonly procedureHistoryRepository: ProcedureHistoryRepository,
    private readonly eventsGateway: EventsGateway,
  ) {}

  async getProceduresByUserId(user_id: number): Promise<ProcedureHistory[]> {
    return this.procedureHistoryRepository.getProceduresByUserId(user_id);
  }

  async createProcedureEvent(
    data: CreateProcedureEvent,
  ): Promise<ProcedureHistory> {
    // To-Do: Implements send msg to client when new procedure event is emitted
    this.eventsGateway.server.emit('msgToClient', {
      msg: 'ok',
    });
    return this.procedureHistoryRepository.createProcedureEvent(data);
  }

  async getUserTotalXpAndCredits(user_id: number): Promise<XpAndCreditsTotal> {
    return this.procedureHistoryRepository.getUserTotalXpAndCredits(user_id);
  }
}
