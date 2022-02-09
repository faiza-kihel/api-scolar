import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  controllers: [RoleController],
  providers: [RoleService, RoleService, PrismaService],
  exports: [RoleService],
})
export class RoleModule {}
