import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt.authguard';
import { LocalAuthGuard } from './auth/local.authguard';
import { localStrategy } from './auth/local.strategy';
import { UserModel } from './Interfaces/user';

@Controller()
export class AppController {
  constructor(private authLogin: AuthService) {}
  @UseGuards(localStrategy)
  @Post('auth/login')
  async login(@Body() req: UserModel[]): Promise<any> {
    
    return this.authLogin.login(req);
  }
}
