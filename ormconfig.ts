import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'ismaellum',
  password: 'ismaellum',
  database: 'ismaellum',
  synchronize: true,
  logging: false,
  entities: [__dirname + '/src/**/*.entity.{js,ts}'],
};

export default config;
