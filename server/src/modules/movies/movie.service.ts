import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {PaginateDto, PaginateOptions} from "src/types/Paginate.dto";
import { Like, Repository } from 'typeorm';
import { Movie } from './movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async findAll(query: PaginateOptions): Promise<PaginateDto<Movie>> {
    const take = query.limit || 20;
    const skip = Math.max(0, query.page - 1) * take;
    const type = query.type || 'title';
    const keyword = query.keyword || '';

    const [result, total] = await this.movieRepository.findAndCount({
      where: { [type]: Like('%' + keyword + '%') },
      order: { [type]: 'DESC' },
      take,
      skip,
    });

    return {
      result,
      meta: {
        total,
        last: Math.ceil(total / take),
        page: Math.ceil(skip / take) + 1,
        limit: take,
        next: skip + take,
      },
    };
  }

  findOne(id: number): Promise<Movie> {
    return this.movieRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  findByTitle(title: string): Promise<Movie[]> {
    return this.movieRepository.find({
      where: { title: title },
    });
  }

  findByGenre(genre: string): Promise<Movie[]> {
    return this.movieRepository.find({
      where: { genre: genre },
    });
  }

  create(movie: Movie): Promise<Movie> {
    return this.movieRepository.save(movie);
  }
}
