import { Body, Controller, Injectable, Param } from "@nestjs/common";
import {
  PutTaskBody,
  PutTaskParam,
  PutTaskResponse,
  PutTaskRoute,
} from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class PutTaskUseCase {
  constructor(private prisma: PrismaService) {}

  @PutTaskRoute()
  async execute(
    @Param() param: PutTaskParam,
    @Body() body: PutTaskBody
  ): Promise<PutTaskResponse> {
    const res = await this.prisma.task.update({
      where: { taskId: param.taskId },
      data: {
        taskName: body.taskName,
        taskStatus: body.taskStatus,
        notification: body.notification,
      },
    });

    return {
      ...res,
      createdTime: res.createdTime.toISOString(),
    };
  }
}
