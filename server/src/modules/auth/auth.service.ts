import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async validateUser(email: string, password: string): Promise<boolean | null> {
    const user = await this.userRepository.findOne({ where: { email } });
    return await bcrypt.compare(password, user.password);
  }

  async signup(body: {
    name: string;
    email: string;
    password: string;
  }): Promise<User> {
    const user = new User();
    user.name = body.name;
    user.email = body.email;
    user.password = await bcrypt.hash(body.password, 10);
    return await this.userRepository.save(user);
  }
}
