/*
  Warnings:

  - You are about to drop the column `droneId` on the `Pilot` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Pilot" DROP CONSTRAINT "Pilot_droneId_fkey";

-- DropIndex
DROP INDEX "Pilot_droneId_key";

-- AlterTable
ALTER TABLE "Pilot" DROP COLUMN "droneId";

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
