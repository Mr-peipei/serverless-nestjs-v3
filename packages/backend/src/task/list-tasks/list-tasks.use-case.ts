import { Controller, Injectable, Query } from "@nestjs/common";
import {
  ListTasksQuery,
  ListTasksResponse,
  ListTasksRoute,
} from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class ListTasksUseCase {
  constructor(private prisma: PrismaService) {}

  @ListTasksRoute()
  async execute(@Query() query: ListTasksQuery): Promise<ListTasksResponse> {
    const tasks = await this.prisma.task.findMany({
      take: query.limit,
    });

    return {
      items: tasks.map((item) => {
        return {
          ...item,
          createdTime: item.createdTime.toISOString(),
        };
      }),
    };
  }
}
