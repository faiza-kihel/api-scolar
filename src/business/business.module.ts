import { Module } from '@nestjs/common';
import { BusinessService } from './business.service';
import { BusinessController } from './business.controller';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Module({
  providers: [BusinessService, PrismaService],
  controllers: [BusinessController],
})
export class BusinessModule {}
