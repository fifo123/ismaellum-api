import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import config from 'ormconfig';

export function typeOrmConfigFactory(): TypeOrmModuleOptions {
  return config;
}
