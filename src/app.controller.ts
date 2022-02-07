import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { UserModel } from './Interfaces/user';

@Controller('user')
export class AppController {
  constructor(private userService: AppService) {}

  //request post
  @Post()
  async signup(@Body() userData: UserModel[]): Promise<any> {
    return this.userService.create(userData);
  }

  //request get by id
  @Get('/:id')
  async get(@Param('id') id: any): Promise<any> {
    return this.userService.user({ id: id });
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
