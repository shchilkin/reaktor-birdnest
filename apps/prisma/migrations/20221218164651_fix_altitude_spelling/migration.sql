/*
  Warnings:

  - You are about to drop the column `attitude` on the `Drone` table. All the data in the column will be lost.
  - Added the required column `altitude` to the `Drone` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Drone" DROP COLUMN "attitude",
ADD COLUMN     "altitude" DOUBLE PRECISION NOT NULL;
