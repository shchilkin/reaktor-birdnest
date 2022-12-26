import getIntruderPilots from "../getIntruderPilots/getIntruderPilots";
import prismaClient from "../prismaClient";
import { ClosedConfirmedDistance } from "@reaktor-birdnest/types";
import console from "console";

const getClosestConfirmedDistance = (a: ClosedConfirmedDistance, b: ClosedConfirmedDistance): ClosedConfirmedDistance => {
  console.info("compare distances", a.distance, b.distance);
  if (a.distance <= b.distance) {
    return a;
  } else {
    return b;
  }
};

const writeIntruderPilots = async () => {
  const intrudersData = await getIntruderPilots();

  // get all pilots from database
  const intrudersInDatabase = await prismaClient.pilot.findMany({ include: { closedConfirmedDistance: true } });

  await Promise.all(
    intrudersData.map(async pilot => {
        const { pilotId, phoneNumber, firstName, lastName, email, createdDt, drone, closedConfirmedDistance } = pilot;

        const dbData = intrudersInDatabase.find(intruder => intruder.pilotId === pilotId);

        const closedConfirmedDistanceToWrite: ClosedConfirmedDistance = dbData && dbData.closedConfirmedDistance ? getClosestConfirmedDistance(dbData.closedConfirmedDistance, closedConfirmedDistance) : closedConfirmedDistance;

        console.info(`Write ${firstName} ${lastName} to intruders database`);
        console.log(`with closed confirmed distance: ${(Number(closedConfirmedDistanceToWrite.distance / 1000).toFixed(2))} meters`);

        return await prismaClient.pilot
          .upsert({
            where: { pilotId },
            update: {},
            create: {
              pilotId,
              phoneNumber,
              firstName,
              lastName,
              email,
              createdDt,
              drone: {
                create: {
                  serialNumber: drone.serialNumber,
                  manufacturer: drone.manufacturer,
                  model: drone.model,
                  mac: drone.mac,
                  ipv4: drone.ipv4,
                  ipv6: drone.ipv6,
                  firmware: drone.firmware,
                  positionX: drone.positionX,
                  positionY: drone.positionY,
                  altitude: drone.altitude
                }
              },
              closedConfirmedDistance: {
                create: {
                  positionX: closedConfirmedDistanceToWrite.positionX,
                  positionY: closedConfirmedDistanceToWrite.positionY,
                  distance: closedConfirmedDistanceToWrite.distance
                }
              }
            }
          })
          .catch((error: Error) => {
            console.error(`error occurred while trying to write intruder pilot to database: ${error.message}`);
          })
          .finally(void (await (async () => await prismaClient.$disconnect())()));
      }
    )
  )
  ;
};

export default writeIntruderPilots;