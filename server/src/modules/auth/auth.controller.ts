import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(
    @Body() body: { name: string; email: string; password: string },
  ) {
    const user = await this.authService.signup(body);
    return user;
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    const { user } = req;
    return user;
  }
}
