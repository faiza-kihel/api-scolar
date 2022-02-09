import { Module } from '@nestjs/common';
import { ActionService } from './action.service';
import { ActionController } from './action.controller';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Module({
  providers: [ActionService, PrismaService],
  controllers: [ActionController]
})
export class ActionModule {}
