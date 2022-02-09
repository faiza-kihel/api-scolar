import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import { Encryption } from './entryption';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
    private encrypt: Encryption,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.findOne(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
  //----------------------------------- User Auth ---------------------------------------//
  //create user
  async create(data: any): Promise<User> {
    const pass = await this.encrypt.Encrypt(data.password);
    data.password = pass;
    console.log('new data', data);
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
