/*
  Warnings:

  - A unique constraint covering the columns `[pilotId]` on the table `Drone` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[droneId]` on the table `Pilot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `pilotId` to the `Drone` table without a default value. This is not possible if the table is not empty.
  - Added the required column `droneId` to the `Pilot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drone" ADD COLUMN     "pilotId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Pilot" ADD COLUMN     "droneId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Drone_pilotId_key" ON "Drone"("pilotId");

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_droneId_key" ON "Pilot"("droneId");

-- AddForeignKey
ALTER TABLE "Pilot" ADD CONSTRAINT "Pilot_droneId_fkey" FOREIGN KEY ("droneId") REFERENCES "Drone"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
