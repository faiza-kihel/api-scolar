import { NestFactory } from '@nestjs/core';
import { PrismaService } from 'prisma/prismaServices/prisma/prisma.service';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // const prismaServices: PrismaService = app.get(PrismaService);
  // prismaServices.enableShutdownHooks(app);
  await app.listen(3000);
}
bootstrap();
