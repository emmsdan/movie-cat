import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import * as bcrypt from 'bcrypt';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  async hashPassword() {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  async checkPassword(password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password);
  }
}
