import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';

dotenv.config();

export const config: any = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [path.join(__dirname, '**', '*.entity.{ts,js}')],
  migrations: [
    path.join(
      __dirname,
      '**',
      'dist',
      '**',
      'database',
      'migrations',
      '*.{ts,js}',
    ),
  ],
};
export const dataSource = new DataSource(config);
