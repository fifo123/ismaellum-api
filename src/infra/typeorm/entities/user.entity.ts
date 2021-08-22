import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as crypto from 'bcrypt';

@Entity('User')
export class UserEntity {
  @PrimaryGeneratedColumn('increment')
  user_id: number;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    type: 'varchar',
    name: 'profile_uri',
    length: 255,
    nullable: true,
  })
  profileUri: string;

  @Column({
    type: 'varchar',
    length: 255,
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    type: 'varchar',
    length: 255,
    nullable: false,
  })
  password: string;

  @BeforeInsert()
  async beforeInsert(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }

  @BeforeUpdate()
  async beforeUpdate(): Promise<void> {
    this.password = await crypto.hash(this.password, 8);
  }
}
