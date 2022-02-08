import { Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller('auth/login')
export class AppController {
  constructor(private authLogin: AuthService) {}
  @UseGuards(AuthGuard('local'))
  @Post()
  async login(@Request() req): Promise<any> {
    return this.authLogin.login(req.username);
  }
}
