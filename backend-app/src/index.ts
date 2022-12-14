import axios from "axios";
import { XMLParser } from "fast-xml-parser";
// TODO: Create monorepo
import { Drone } from "./types/index";
import isDroneViolatingPerimiter from "./utils/isDroneViolatingPerimiter";
import { PrismaClient } from "@prisma/client";

const parserOptions = {
  ignorePiTags: true,
};
const parser = new XMLParser(parserOptions);
const prisma = new PrismaClient();

const droneRequest = async () => {
  try {
    // Get Drone data and convert in from XML to JavaScript Object
    const data = await axios
      .get("https://assignments.reaktor.com/birdnest/drones")
      .then((response) => response.data)
      .then((data) => parser.parse(data)["report"]["capture"]["drone"]);

    // Array contains information about drones who passed the perimiter
    const intruders: Drone[] = data.filter((drone: Drone) =>
      // TODO: Current implementation is not precise, consider comparing float coordinates
      isDroneViolatingPerimiter(
        Math.floor(drone.positionX),
        Math.floor(drone.positionY)
      )
    );

    await Promise.all(
      intruders.map(async (drone: Drone) => {
        console.info(
          `Drone ${drone.manufacturer} ${drone.model} with serial number ${drone.serialNumber} is added to intruders database`
        );
        return prisma.drone.upsert({
          where: { serialNumber: drone.serialNumber },
          update: {
            positionX: drone.positionX,
            positionY: drone.positionY,
            attitude: drone.altitude,
          },
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
            attitude: drone.altitude,
          },
        });
      })
    );
  } catch (error) {
    console.error(error);
  } finally {
    async () => {
      await prisma.$disconnect();
    };
  }
};

setInterval(droneRequest, 2000);
