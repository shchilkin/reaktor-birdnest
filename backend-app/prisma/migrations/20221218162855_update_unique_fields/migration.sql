/*
  Warnings:

  - A unique constraint covering the columns `[phoneNumber]` on the table `Pilot` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `Pilot` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Pilot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Pilot" ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_phoneNumber_key" ON "Pilot"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Pilot_email_key" ON "Pilot"("email");
