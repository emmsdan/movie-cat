import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './movie.entity';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    MulterModule.register({
      dest: './uploads',
      preservePath: true,
    }),
  ],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MoviesModule {}
