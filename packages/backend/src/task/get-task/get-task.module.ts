import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { GetTaskUseCase } from "./get-task.use-case";

@Module({
  controllers: [GetTaskUseCase],
  providers: [GetTaskUseCase, PrismaService],
  exports: [GetTaskUseCase],
})
export class GetTaskModule {}
