import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ProcedureEntity } from '.';
import { RoomEntity } from './room.entity';

@Entity('RoomProcedure')
export class RoomProcedureEntity {
  @PrimaryGeneratedColumn('increment')
  room_procedure_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  room_id: number;

  @ManyToOne(() => RoomEntity, (room) => room.roomProcedures, {
    nullable: false,
  })
  @JoinColumn({
    name: 'room_id',
  })
  room: RoomEntity;

  @ManyToOne(() => ProcedureEntity, (procedure) => procedure.roomProcedures, {
    nullable: false,
  })
  @JoinColumn({
    name: 'procedure_id',
  })
  procedure: ProcedureEntity;
}
