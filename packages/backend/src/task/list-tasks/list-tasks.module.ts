import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { ListTasksUseCase } from "./list-tasks.use-case";

@Module({
  controllers: [ListTasksUseCase],
  providers: [ListTasksUseCase, PrismaService],
  exports: [ListTasksUseCase],
})
export class ListTasksModule {}
