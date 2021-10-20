import { CreateRoom } from '@/common/domain/dtos/room/create-room.dto';
import { ProcedureHistory } from '@/common/domain/models';
import { Room } from '@/common/domain/models/room.model';
import { ProcedureHistoryEntity } from '@/infra/typeorm/entities';
import { RoomEntity } from '@/infra/typeorm/entities/room.entity';
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RoomRepository {
  constructor(
    @InjectRepository(RoomEntity)
    private readonly roomRepository: Repository<RoomEntity>,
  ) {}

  async createRoom(data: CreateRoom): Promise<Room> {
    try {
      const room = this.roomRepository.create(data);
      return await this.roomRepository.save(room);
    } catch (error) {
      throw new HttpException('Error in DB, could not create room', 500);
    }
  }

  async getInformationForRoom(room_id: number): Promise<Room> {
    try {
      const roomInfo = this.roomRepository.findOne({
        where: {
          room_id,
        },
      });

      return roomInfo;
    } catch (error) {
      throw new HttpException('Error in DB, could not create room', 500);
    }
  }

  async getHistory(user_id: number): Promise<ProcedureHistory[]> {
    try {
      const roomInfo = (
        await this.roomRepository.findOne({
          relations: ['history', 'history.user', 'history.procedure'],
        })
      ).history?.filter(
        (roomHistory) => roomHistory?.user?.user_id === user_id,
      );

      return this.map(roomInfo);
    } catch (error) {
      console.log(error);

      throw new HttpException('Error in DB, could not create room', 500);
    }
  }

  async getIsFavorite(user_id: number): Promise<boolean> {
    try {
      const roomInfo = await this.roomRepository.findOne({
        relations: ['favoriteRooms', 'favoriteRooms.user'],
      });

      return roomInfo.favoriteRooms?.some(
        (favoriteRoom) => favoriteRoom.user?.user_id === user_id,
      );
    } catch (error) {
      console.log(error);

      throw new HttpException('Error in DB, could not create room', 500);
    }
  }

  private adapter(procedure: ProcedureHistoryEntity): ProcedureHistory {
    return {
      ...procedure,
      totalXp:
        this.getValue(procedure.procedure.xpValue, procedure.percent) || 0,
      totalCredits:
        this.getValue(procedure.procedure.creditsValue, procedure.percent) || 0,
    };
  }

  private map(procedures: ProcedureHistoryEntity[]): ProcedureHistory[] {
    return procedures.map((procedure) => this.adapter(procedure));
  }

  private getValue(value: number, percent: number): number {
    return +((percent / 100) * value).toFixed(0);
  }
}
