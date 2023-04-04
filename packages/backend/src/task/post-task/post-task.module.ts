import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { PostTaskUseCase } from "./post-task.use-case";

@Module({
  controllers: [PostTaskUseCase],
  providers: [PostTaskUseCase, PrismaService],
  exports: [PostTaskUseCase],
})
export class PostTaskModule {}
