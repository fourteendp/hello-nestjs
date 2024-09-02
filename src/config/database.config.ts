import { DataSource, DataSourceOptions } from 'typeorm';
import { ConfigType, registerAs } from '@nestjs/config';

const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '123@PGSql',
  database: 'postgres',
  schema: 'public',
  synchronize: true,
  logging: true,
  entities: ['src/models/**/*.entity.ts'],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: ['src/models/**/*.subscriber.ts'],
};

export const dbRegToken = 'database';
export const DatabaseConfig = registerAs(
  dbRegToken,
  (): DataSourceOptions => dataSourceOptions,
);
export type IDatabaseConfig = ConfigType<typeof DatabaseConfig>;

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
