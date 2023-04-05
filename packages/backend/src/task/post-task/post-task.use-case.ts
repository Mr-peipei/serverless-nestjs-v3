import { Body, Controller, Injectable } from "@nestjs/common";
import {
  PostTaskBody,
  PostTaskResponse,
  PostTaskRoute,
} from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class PostTaskUseCase {
  constructor(private prisma: PrismaService) {}

  @PostTaskRoute()
  async execute(@Body() body: PostTaskBody): Promise<PostTaskResponse> {
    const res = await this.prisma.task.create({
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
