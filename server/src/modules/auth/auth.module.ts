import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/user.entity';
import { AuthService } from './auth.service';
import { LocalStrategy } from './local.strategy';
import { AuthController } from './auth.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
