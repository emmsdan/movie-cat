import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from '../modules/auth/auth.module';
import { MoviesModule } from '../modules/movies/movies.module';
import { UserModule } from '../modules/user/user.module';
import * as OrmConfig from 'ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig.config as any),
    AuthModule,
    MoviesModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
