import { Controller, Injectable, Param } from "@nestjs/common";
import { DeleteTaskRoute, DeleteTaskParam } from "src/generated/task";
import { PrismaService } from "src/lib/prisma.service/prisma.service";

@Controller()
@Injectable()
export class DeleteTaskUseCase {
  constructor(private prisma: PrismaService) {}

  @DeleteTaskRoute()
  async execute(@Param() param: DeleteTaskParam): Promise<void> {
    await this.prisma.task.delete({
      where: { taskId: param.taskId },
    });
  }
}
