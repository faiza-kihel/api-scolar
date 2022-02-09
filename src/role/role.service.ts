import { Injectable } from '@nestjs/common';
import { Role } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  //get all fields
  async roles(): Promise<Role[]> {
    return this.prisma.role.findMany();
  }

  //get one field
  async role(id: any): Promise<Role> {
    return this.prisma.role.findUnique({
      where: { id: id },
    });
  }

  //get by argument
  async roleArgs(args: any): Promise<any> {
    return this.prisma.role.findFirst({ where: args });
  }

  //create field
  async create(data: any): Promise<Role> {
    return this.prisma.role.create({ data });
  }

  //update
  async update(params: { data: any; where: any }): Promise<any> {
    const { data, where } = params;
    return this.prisma.role.update({ data, where });
  }
}
