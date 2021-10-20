import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { FavoriteRoomEntity } from './favorite-room.entity';
import { RoomProcedureEntity } from './room-procedure.entity';

@Entity('Room')
export class RoomEntity {
  @PrimaryGeneratedColumn('increment')
    room_id: number;

   @Column({
    type: 'varchar',
    length: 20,
    nullable: false,
  })
  number: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  description: string;

  @Column({
    type: 'varchar',
    length: 255,
    name: 'picture',
    nullable: false,
  })
  picture: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => FavoriteRoomEntity, (favoriteRoom) => favoriteRoom.room, {
    nullable: true,
  })
  favoriteRooms?: FavoriteRoomEntity[];

  @OneToMany(() => RoomProcedureEntity, (roomProcedure) => roomProcedure.room, {
    nullable: true,
  })
  roomProcedures?: RoomProcedureEntity[];
}
