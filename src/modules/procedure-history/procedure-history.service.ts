import { CreateProcedureEvent } from '@/common/domain/dtos/procedure-history/procedure-history-event.dto';
import { XpAndCreditsTotal } from '@/common/domain/interfaces/xp-and-credits-total.interface';
import { ProcedureHistory } from '@/common/domain/models';
import { Room } from '@/common/domain/models/room.model';
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
    const newEvent = await this.procedureHistoryRepository.createProcedureEvent(
      data,
    );
    this.eventsGateway.server.emit(data.user_id.toString(), {
      totalXp: newEvent.totalXp,
      totalCredits: newEvent.totalCredits,
    });
    return newEvent;
  }

  async getUserTotalXpAndCredits(user_id: number): Promise<XpAndCreditsTotal> {
    return this.procedureHistoryRepository.getUserTotalXpAndCredits(user_id);
  }

  async getLastRooms(user_id: number): Promise<Room[]> {
    return this.procedureHistoryRepository.getLastRooms(user_id);
  }
}
