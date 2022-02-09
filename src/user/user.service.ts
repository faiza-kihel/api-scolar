import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Injectable()
export class UserService {
    
  constructor(private prisma: PrismaService) {}

  //get one user by condition
  async user(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  //get all user by condition or not
  async users(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  //update user
  async update(params: { data?: any; where?: any }): Promise<User> {
    const { data, where } = params;
    return this.prisma.user.update({ data, where });
  }

  //delete user by id
  async delete(where: any): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
