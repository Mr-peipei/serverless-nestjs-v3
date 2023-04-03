import { Controller, Injectable } from "@nestjs/common";
import { GetMeResponse, GetMeRoute } from "src/generated/user";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class GetMeUseCase {
  constructor(private prisma: PrismaService) {}

  @GetMeRoute()
  async execute(): Promise<GetMeResponse> {
    const user = await this.prisma.user.findFirst();
    return user;
  }
}
