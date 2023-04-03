import { Controller, Injectable, Logger, Param } from "@nestjs/common";
import {
  GetTaskParam,
  GetTaskResponse,
  GetTaskRoute,
} from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class GetTaskUseCase {
  private readonly logger = new Logger(GetTaskUseCase.name);

  constructor(private prisma: PrismaService) {}

  @GetTaskRoute()
  async execute(@Param() param: GetTaskParam): Promise<GetTaskResponse> {
    this.logger.log({ param });

    const id = 1;
    const task = await this.prisma.task.findUnique({ where: { taskId: id } });

    return task;
  }
}
