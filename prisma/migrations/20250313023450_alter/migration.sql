/*
  Warnings:

  - Made the column `operatorId` on table `Call` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Call" DROP CONSTRAINT "Call_operatorId_fkey";

-- AlterTable
ALTER TABLE "Call" ADD COLUMN     "duration" INTEGER,
ADD COLUMN     "endedAt" TIMESTAMP(3),
ALTER COLUMN "operatorId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Call" ADD CONSTRAINT "Call_operatorId_fkey" FOREIGN KEY ("operatorId") REFERENCES "Operator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
