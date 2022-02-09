import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AttachmentModule } from './attachment/attachment.module';
import { RoleModule } from './role/role.module';
import { ActionModule } from './action/action.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UserModule, AttachmentModule, RoleModule, ActionModule],
})
export class AppModule {}
