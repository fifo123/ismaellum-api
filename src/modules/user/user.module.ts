import { UserEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

@Module({
  providers: [UserRepository],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserRepository],
})
export class UserModule {}
