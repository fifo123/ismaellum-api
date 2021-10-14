import { CreateRoomProcedure } from '@/common/domain/dtos/room-procedure/create-room-procedure.dto';
import { RoomProcedure } from '@/common/domain/models/room-procedure.model';
import { RoomProcedureEntity } from '@/infra/typeorm/entities/room-procedure.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomProcedureRepository {
  constructor(
    @InjectRepository(RoomProcedureEntity)
    private readonly roomProcedureEntity: Repository<RoomProcedureEntity>,
  ) {}

  async createRoomProcedure(
    data: CreateRoomProcedure,
  ): Promise<RoomProcedure> {
    try {
      const createRoomProcedure = this.roomProcedureEntity.create({
        ...data,
        room: {
          room_id: data.room_id,
        },
        procedure: {
          procedure_id: data.procedure_id
        }
      });
    
      return await this.roomProcedureEntity.save(createRoomProcedure);
    } catch (error) {
      throw new HttpException(
        'Error in DB, could not create room procedure',
        500,
      );
    }
  }
}
