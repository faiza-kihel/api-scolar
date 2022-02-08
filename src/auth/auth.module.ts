import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { PassportModule } from '@nestjs/passport';
import { UserModule } from 'src/user/user/user.module';
import { AuthService } from './auth.service';
import { localStrategy } from './local.strategy';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt.authguard';

@Module({
  providers: [AuthService, localStrategy, JwtStrategy, JwtAuthGuard],
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  exports: [AuthService, JwtAuthGuard],
})
export class AuthModule {}
