import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
})
export class UserModule {}
