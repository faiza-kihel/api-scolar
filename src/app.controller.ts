import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.authguard';
import { UserModel } from './Interfaces/user';

@Controller('auth/login')
export class AppController {
  constructor(private authLogin: AuthService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async login(@Body() req: UserModel[]): Promise<any> {
    console.log('req', req);
    return this.authLogin.login(req);
  }
}
