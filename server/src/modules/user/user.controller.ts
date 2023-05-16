import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(Number(id));
  }

  @Post()
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }
}
