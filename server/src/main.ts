import { NestFactory } from '@nestjs/core';
import * as path from "path";
import * as process from "process";
import { AppModule } from './app/app.module';
import * as express from 'express';

import * as dotenv from 'dotenv';
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });
  app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));
  console.log(path.join(process.cwd(), 'uploads'))

  await app.listen(process.env.PORT || 3003);
}
bootstrap();
