/*
  Warnings:

  - Changed the type of `taskStatus` on the `Task` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "TaskStatus" AS ENUM ('todo', 'inProgress', 'inReview', 'done');

-- AlterTable
ALTER TABLE "Task" DROP COLUMN "taskStatus",
ADD COLUMN     "taskStatus" "TaskStatus" NOT NULL;
