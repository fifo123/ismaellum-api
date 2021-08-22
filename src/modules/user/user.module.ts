import { UserEntity } from '@/infra/typeorm/entities';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserRepository, UserService, UserResolver],
  imports: [TypeOrmModule.forFeature([UserEntity])],
  exports: [UserRepository],
})
export class UserModule {}
