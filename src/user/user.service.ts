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
  async users(
    index: number = 0,
    size: number = 10,
    order: any = 'desc',
    status: string | null,
    date?: any | null,
    startAt?: any | null,
    endAt?: any | null,
    search?: string | null,
  ): Promise<User[]> {
    console.log('status', status);
    console.log('search', search);

    const a = this.prisma.user.findMany({
      skip: index,
      take: size,
      where: {
        AND: [
          { status: status },
          // {
          //   firstName: {
          //     contains: search,
          //   },
          // },
          // {
          //   lastName: {
          //     contains: search,
          //   },
          // },
          // {
          //   email: { contains: search },
          // },
          // { username: { contains: search } },
          // { createdAt: { equals: new Date(date) } },
          // {
          //   createdAt: {
          //     gte: new Date(startAt),
          //     lt: new Date(endAt),
          //   },
          // },
        ],
      },
    });

    return;
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
