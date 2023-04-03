import { Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";
import { GetMeUseCase } from "./get-me.use-case";

@Module({
  controllers: [GetMeUseCase],
  providers: [GetMeUseCase, PrismaService],
  exports: [GetMeUseCase],
})
export class GetMeModule {}
