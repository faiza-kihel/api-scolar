import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import {  Business } from '@prisma/client';
@Injectable()
export class BusinessService {
  constructor(private prisma: PrismaService) {}

  //create business
  async create(data: any): Promise<any> {
    return this.prisma.business.create({ data });
  }

  //read business by id
  async business(id: any): Promise<Business> {
    return this.prisma.business.findFirst({ where: { id: id } });
  }

  //read all business
  async businessAll(): Promise<Business[]> {
    return this.prisma.business.findMany();
  }

  //update business
  async update(params: { data: any; where: any }): Promise<Business> {
    const { data, where } = params;
    return this.prisma.business.update({ data, where });
  }
}
