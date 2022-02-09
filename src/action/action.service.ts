import { Injectable } from '@nestjs/common';
import { Action } from '@prisma/client';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';

@Injectable()
export class ActionService {
  constructor(private prisma: PrismaService) {}

  //get all actions
  async actions(): Promise<Action[]> {
    return this.prisma.action.findMany();
  }

  //get action by id
  async action(id: any): Promise<Action> {
    return this.prisma.action.findFirst({
      where: { id: id },
    });
  }

  //create action
  async create(data: any): Promise<Action> {
    return this.prisma.action.create({ data });
  }

  //update action with
  async update(params: {data: any, where: any}): Promise<Action> {
      const {data, where} = params
    return this.prisma.action.update({ data, where });
  }
}
