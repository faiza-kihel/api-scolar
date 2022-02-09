import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Injectable()
export class UserAuthService {
    constructor(private prisma: PrismaService) {}

    //create user
    async create(data: any): Promise<User> {
      return this.prisma.user.create({
        data,
      });
    }
  
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
    // async users(params: {
    //   skip?: number;
    //   take?: number;
    //   cursor?: any;
    //   where?: any;
    //   orderBy?: any;
    // }): Promise<User[]> {
    //   const { skip, take, cursor, where, orderBy } = params;
    //   return this.prisma.user.findMany({
    //     skip,
    //     take,
    //     cursor,
    //     where,
    //     orderBy,
    //   });
    // }
  
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
    // This should be a real class/interface representing a user entitytype User = any;
  
    async findOne(user: any): Promise<User | undefined> {
      return this.prisma.user.findUnique({
        where: { username: user },
      });
    }
}
