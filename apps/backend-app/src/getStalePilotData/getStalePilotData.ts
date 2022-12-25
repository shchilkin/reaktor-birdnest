import { Pilot as PrismaPilot } from "@prisma/client";
import prismaClient from "../prismaClient";

const getStalePilotData = async (): Promise<PrismaPilot[]> => {
  try {
    // get all pilot data
    const data = await prismaClient.pilot.findMany({});
    return data.filter((pilot: PrismaPilot) => {
      return (Date.now() - pilot.updatedAt.valueOf()) / 1000 >= 600;
    });
  } catch (error) {
    console.error("error occur while trying to get pilot data", error);
    return [];
  }
};

export default getStalePilotData;