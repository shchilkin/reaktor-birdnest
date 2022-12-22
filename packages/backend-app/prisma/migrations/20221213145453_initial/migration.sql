-- CreateTable
CREATE TABLE "Drone" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "serialNumber" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "mac" TEXT NOT NULL,
    "ipv4" TEXT NOT NULL,
    "ipv6" TEXT NOT NULL,
    "firmware" TEXT NOT NULL,
    "positionY" INTEGER NOT NULL,
    "positionX" INTEGER NOT NULL,
    "attitude" INTEGER NOT NULL,

    CONSTRAINT "Drone_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Drone_serialNumber_key" ON "Drone"("serialNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Drone_mac_key" ON "Drone"("mac");
