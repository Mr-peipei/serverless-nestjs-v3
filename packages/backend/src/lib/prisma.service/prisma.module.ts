import { Global, Module } from "@nestjs/common";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
