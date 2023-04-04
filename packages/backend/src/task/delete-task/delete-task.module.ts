import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { DeleteTaskUseCase } from "./delete-task.use-case";

@Module({
  controllers: [DeleteTaskUseCase],
  providers: [DeleteTaskUseCase, PrismaService],
  exports: [DeleteTaskUseCase],
})
export class DeleteTaskModule {}
