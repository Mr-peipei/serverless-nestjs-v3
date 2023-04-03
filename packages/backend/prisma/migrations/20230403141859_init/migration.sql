/*
  Warnings:

  - You are about to drop the `Post` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Post" DROP CONSTRAINT "Post_authorId_fkey";

-- DropTable
DROP TABLE "Post";

-- CreateTable
CREATE TABLE "Task" (
    "taskId" SERIAL NOT NULL,
    "taskName" TEXT NOT NULL,
    "taskStatus" TEXT NOT NULL,
    "notification" BOOLEAN NOT NULL DEFAULT false,
    "createdTime" TEXT NOT NULL,
    "authorId" INTEGER,

    CONSTRAINT "Task_pkey" PRIMARY KEY ("taskId")
);

-- AddForeignKey
ALTER TABLE "Task" ADD CONSTRAINT "Task_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
