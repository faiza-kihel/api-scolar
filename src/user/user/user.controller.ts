import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { UserModel } from 'src/Interfaces/user';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  //request post
  @Post()
  async signup(@Body() userData: UserModel[]): Promise<any> {
    return this.userService.create(userData);
  }

  //request get by id
  @Get('/:id')
  async get(@Param('id') id: string): Promise<any> {
    return this.userService.user({ id: Number(id) });
  }
  //Get all users
  @Get()
  async getAll(): Promise<any> {
    return this.userService.users();
  }

  //update user
  @Put('/:id')
  async update(
    @Param('id') id: any,
    @Body() userData: UserModel[],
  ): Promise<any> {
    return this.userService.update({ where: id, data: userData });
  }
}
