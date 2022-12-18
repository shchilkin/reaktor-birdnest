import axios from "axios";
import { XMLParser } from "fast-xml-parser";
// TODO: Create monorepo
import { Drone, Pilot, PilotObject } from "./types/index";
import isDroneViolatingPerimiter from "./utils/isDroneViolatingPerimiter";
import { PrismaClient } from "@prisma/client";

const parserOptions = {
  ignorePiTags: true,
};
const parser = new XMLParser(parserOptions);
const prisma = new PrismaClient();
const droneEndpoint = "https://assignments.reaktor.com/birdnest/drones";
const pilotEndpoint = "https://assignments.reaktor.com/birdnest/pilots/";

// const droneRequest = async () => {
//   try {
//     // Get Drone data and convert in from XML to JavaScript Object
//     const data = await axios
//       .get("https://assignments.reaktor.com/birdnest/drones")
//       .then((response) => response.data)
//       .then((data) => parser.parse(data)["report"]["capture"]["drone"]);

//     // Array contains information about drones who passed the perimiter
//     const intruders: Drone[] = data.filter((drone: Drone) =>
//       // TODO: Current implementation is not precise, consider comparing float coordinates
//       isDroneViolatingPerimiter(
//         Math.floor(drone.positionX),
//         Math.floor(drone.positionY)
//       )
//     );

//     await Promise.all(
//       intruders.map(async (drone: Drone) => {
//         console.info(
//           `Drone ${drone.manufacturer} ${drone.model} with serial number ${drone.serialNumber} is added to intruders database`
//         );
//         return prisma.drone.upsert({
//           where: { serialNumber: drone.serialNumber },
//           update: {
//             positionX: drone.positionX,
//             positionY: drone.positionY,
//             attitude: drone.altitude,
//           },
//           create: {
//             serialNumber: drone.serialNumber,
//             manufacturer: drone.manufacturer,
//             model: drone.model,
//             mac: drone.mac,
//             ipv4: drone.ipv4,
//             ipv6: drone.ipv6,
//             firmware: drone.firmware,
//             positionX: drone.positionX,
//             positionY: drone.positionY,
//             attitude: drone.altitude,
//             pilotId:
//           },
//         });
//       })
//     );
//   } catch (error) {
//     console.error(error);
//   } finally {
//     async () => {
//       await prisma.$disconnect();
//     };
//   }
// };

const getIntruderPilots = async (): Promise<PilotObject[]> => {
  // Get Drone data and convert in from XML to JavaScript Object
  const droneData = await axios
    .get(droneEndpoint)
    .then((response) => response.data)
    .then((data) => parser.parse(data)["report"]["capture"]["drone"])
    .catch((error) => {
      console.error(`Erorr occur while trying to get drone data: ${error}`);
    });

  // Array contains information about drones who passed the perimiter
  const droneIntruders: Drone[] = droneData.filter((drone: Drone) =>
    // TODO: Current implementation is not precise, consider comparing float coordinates
    isDroneViolatingPerimiter(
      Math.floor(drone.positionX),
      Math.floor(drone.positionY)
    )
  );

  return await Promise.all(
    droneIntruders.map(async (drone) => {
      const pilot: Pilot = await axios
        .get(pilotEndpoint + drone.serialNumber)
        .then((response) => response.data)
        .catch((error) => {
          console.error(`Erorr occur while trying to get pilot data: ${error}`);
        });
      return {
        ...pilot,
        drone: {
          ...drone,
        },
      };
    })
  );
};

const writeIntruderPilots = async () => {
  const intrudersData = await getIntruderPilots();

  Promise.all(
    intrudersData.map((pilot) => {
      const {
        pilotId,
        phoneNumber,
        firstName,
        lastName,
        email,
        createdDt,
        drone,
      } = pilot;

      console.info(`Write ${firstName} ${lastName} to intruders database`);

      return prisma.pilot
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
                altitude: drone.altitude,
              },
            },
          },
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(async () => await prisma.$disconnect());
    })
  );
};

const deleteStalePilotData = async () => {
  // get all pilot data
  const data = await prisma.pilot.findMany({});

  const staleData = data.filter((pilot) => {
    return (Date.now() - pilot.updatedAt.valueOf()) / 1000 >= 600;
  });

  await Promise.all(
    staleData.map((pilot) => {
      console.info(`delete ${pilot.firstName} ${pilot.lastName} from database`);
      return prisma.pilot
        .delete({ where: { id: pilot.id } })
        .catch((error) => console.error(error))
        .finally(async () => await prisma.$disconnect());
    })
  );
};

setInterval(writeIntruderPilots, 2000);
setInterval(deleteStalePilotData, 1000);
