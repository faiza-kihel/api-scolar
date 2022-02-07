import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}
  async user(userCondition: Prisma.UserWhereUniqueInput): Promise<any> {
    return this.prisma.user.findUnique({
      where: userCondition,
    });
  }
}
