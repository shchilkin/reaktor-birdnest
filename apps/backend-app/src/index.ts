import axios from "axios";
import { XMLParser } from "fast-xml-parser";
import { Drone, Pilot, PilotWithDrone } from "@reaktor-birdnest/types";
import { isDroneViolatingPerimiter } from "@reaktor-birdnest/utils";
import { PrismaClient, Pilot as PrismaPilot } from "@prisma/client";

const parserOptions = {
  ignorePiTags: true,
};
const parser = new XMLParser(parserOptions);
const prisma = new PrismaClient();
const droneEndpoint = "https://assignments.reaktor.com/birdnest/drones";
const pilotEndpoint = "https://assignments.reaktor.com/birdnest/pilots/";

const getIntruderPilots = async (): Promise<PilotWithDrone[]> => {
  // Get Drone data and convert in from XML to JavaScript Object
  const droneData = await axios
    .get(droneEndpoint)
    .then((response) => response.data)
    .then((data) => parser.parse(data)["report"]["capture"]["drone"])
    .catch((error) => {
      console.error(`Erorr occur while trying to get drone data: ${error}`);
    });

  /** Array contains information about drones who passed the perimiter */
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

const getStalePilotData = async (): Promise<PrismaPilot[]> => {
  try {
    // get all pilot data
    const data = await prisma.pilot.findMany({});
    return data.filter((pilot: PrismaPilot) => {
      return (Date.now() - pilot.updatedAt.valueOf()) / 1000 >= 600;
    });
  } catch (error) {
    console.error("error occure while trying to get pilot data", error);
    return [];
  }
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
        .catch((error: Error) => {
          console.error(error);
        })
        .finally(async () => await prisma.$disconnect());
    })
  );
};

const deleteStalePilotData = async () => {
  const staleData = await getStalePilotData();

  await Promise.all(
    staleData.map((pilot: PrismaPilot) => {
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