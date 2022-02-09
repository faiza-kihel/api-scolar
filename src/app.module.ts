import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { AttachmentModule } from './attachment/attachment.module';
import { RoleModule } from './role/role.module';
import { ActionModule } from './action/action.module';
import { StudentModule } from './student/student.module';
import { TutorModule } from './tutor/tutor.module';
import { BusinessModule } from './business/business.module';

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [AuthModule, UserModule, AttachmentModule, RoleModule, ActionModule, StudentModule, TutorModule, BusinessModule],
})
export class AppModule {}
