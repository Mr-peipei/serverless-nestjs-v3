import { Controller, Injectable, Param } from "@nestjs/common";
import {
  GetTaskParam,
  GetTaskResponse,
  GetTaskRoute,
} from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class GetTaskUseCase {
  constructor(private prisma: PrismaService) {}

  @GetTaskRoute()
  async execute(@Param() param: GetTaskParam): Promise<GetTaskResponse> {
    const task = await this.prisma.task.findUnique({
      where: { taskId: param.taskId },
    });

    return {
      ...task,
      createdTime: task.createdTime.toISOString(),
    };
  }
}
