import {
  Body,
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  Param,
  ParseFilePipe,
  ParseFilePipeBuilder,
  Post,
  Query,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Movie } from './movie.entity';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Get()
  findAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.findOne(Number(id));
  }

  @Get('search')
  findByTitleOrGenre(@Query('q') query: string): Promise<Movie[]> {
    return this.movieService.findByTitle(query).then((movies) => {
      if (movies.length > 0) {
        return movies;
      } else {
        return this.movieService.findByGenre(query);
      }
    });
  }

  @Post()
  @UseInterceptors(FileInterceptor('poster'))
  create(
    @Body() movie: Movie,
    @UploadedFile()
    file: Express.Multer.File,
  ): any {
    return this.movieService.create({
      ...movie,
      genre: JSON.stringify(movie.genre),
      poster: file.path,
      meta: JSON.stringify({ movie, file }),
    });
  }
}
