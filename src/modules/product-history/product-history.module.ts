import { ProductHistoryEntity } from '@/infra/typeorm/entities/product-history.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductHistoryController } from './product-history.controller';
import { ProductHistoryRepository } from './product-history.repository';
import { ProductHistoryResolver } from './product-history.resolver';
import { ProductHistoryService } from './product-history.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProductHistoryEntity])],
  providers: [ProductHistoryService, ProductHistoryRepository, ProductHistoryResolver],
  exports: [ProductHistoryService],
  controllers: [ProductHistoryController],
})
export class ProductHistoryModule {}
