import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  genre: string;

  @Column()
  description: string;

  @Column()
  poster: string;

  @Column()
  meta?: string;

  @Column()
  year: number;

  @Column()
  rating?: number;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;
}
