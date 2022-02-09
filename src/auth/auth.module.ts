import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { localStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.authguard';
import { LocalAuthGuard } from './local.authguard';
import { UserAuthService } from './user-auth/user-auth.service';

@Module({
  providers: [
    AuthService,
    localStrategy,
    JwtStrategy,
    JwtAuthGuard,
    LocalAuthGuard,
    UserAuthService,
  ],
  imports: [
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [
    AuthService,
    JwtAuthGuard,
    LocalAuthGuard,
    localStrategy,
    UserAuthService,
  ],
})
export class AuthModule {}
