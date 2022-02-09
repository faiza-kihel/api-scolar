import { Body, Controller, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UserAuthService } from 'src/auth/user-auth/user-auth.service';
import { UserModel } from 'src/Interfaces/user';

@Controller('user')
export class UserController {
    constructor(private userService: UserAuthService) {}

  //request post
  @Post()
  async signup(@Body() userData: UserModel[]): Promise<any> {
    return this.userService.create(userData);
  }

  //request get by id
  @UseGuards()
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
