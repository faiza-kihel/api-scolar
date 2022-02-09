import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserAuthModule } from './user-auth/user-auth.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UserAuthModule],
})
export class AppModule {}
