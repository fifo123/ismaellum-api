import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'ismaellum',
  password: 'ismaellum',
  database: 'ismaellum',
  synchronize: true,
  autoLoadEntities: true,
  logging: false,
  entities: [__dirname + '/src/**/*.entity.ts'],
};

export default config;
