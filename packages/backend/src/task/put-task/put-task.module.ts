import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { PutTaskUseCase } from "./put-task.use-case";

@Module({
  controllers: [PutTaskUseCase],
  providers: [PutTaskUseCase, PrismaService],
  exports: [PutTaskUseCase],
})
export class PutTaskModule {}
