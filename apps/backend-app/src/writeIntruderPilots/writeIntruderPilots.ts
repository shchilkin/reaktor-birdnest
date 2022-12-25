import getIntruderPilots from "../getIntruderPilots/getIntruderPilots";
import prismaClient from "../prismaClient";

const writeIntruderPilots = async () => {
  const intrudersData = await getIntruderPilots();

  await Promise.all(
    intrudersData.map(async pilot => {
      const { pilotId, phoneNumber, firstName, lastName, email, createdDt, drone, closedConfirmedDistance } = pilot;

      console.info(`Write ${firstName} ${lastName} to intruders database`);

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
                positionX: closedConfirmedDistance.positionX,
                positionY: closedConfirmedDistance.positionY,
                distance: closedConfirmedDistance.distance
              },
            }
          }
        })
        .catch((error: Error) => {
          console.error(error);
        })
        .finally(void (await (async () => await prismaClient.$disconnect())()));
    })
  );
};

export default writeIntruderPilots;