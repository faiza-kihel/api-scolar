import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import { Student } from '@prisma/client';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  //create student
  async create(data: any): Promise<Student> {
    return this.prisma.student.create({ data });
  }

  //update student
  async update(params: { data: any; where: any }): Promise<Student> {
    const { data, where } = params;
    return this.prisma.student.update({ data, where });
  }

  //get all student
  async students(): Promise<Student[]> {
    return this.prisma.student.findMany();
  }

  //get by id
  async student(id: any): Promise<Student> {
    return this.prisma.student.findFirst({
      where: { id: id },
    });
  }
}
