import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoomEntity } from './room.entity';
import { UserEntity } from './user.entity';

@Entity('FavoriteRoom')
export class FavoriteRoomEntity {
  @PrimaryGeneratedColumn('increment')
  favorite_room_id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => UserEntity, (user) => user.favoriteRooms, {
    nullable: false,
  })
  @JoinColumn({
    name: 'user_id',
  })
  user: UserEntity;

  @ManyToOne(() => RoomEntity, (room) => room.favoriteRooms, {
    nullable: false,
  })
  @JoinColumn({
    name: 'room_id',
  })
  room: RoomEntity;
}
