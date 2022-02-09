import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import { AttachmentController } from './attachment.controller';
import { AttachmentService } from './attachment.service';

@Module({
  controllers: [AttachmentController],
  providers: [AttachmentService, PrismaService]
})
export class AttachmentModule {}
