-- DropForeignKey
ALTER TABLE "Drone" DROP CONSTRAINT "Drone_pilotId_fkey";

-- CreateTable
CREATE TABLE "ClosedConfirmedDistance" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "distance" DOUBLE PRECISION NOT NULL,
    "positionY" DOUBLE PRECISION NOT NULL,
    "positionX" DOUBLE PRECISION NOT NULL,
    "pilotId" INTEGER NOT NULL,

    CONSTRAINT "ClosedConfirmedDistance_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ClosedConfirmedDistance_pilotId_key" ON "ClosedConfirmedDistance"("pilotId");

-- AddForeignKey
ALTER TABLE "Drone" ADD CONSTRAINT "Drone_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClosedConfirmedDistance" ADD CONSTRAINT "ClosedConfirmedDistance_pilotId_fkey" FOREIGN KEY ("pilotId") REFERENCES "Pilot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
