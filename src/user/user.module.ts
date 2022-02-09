import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  controllers: [UserController],
  imports: [AuthModule],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
