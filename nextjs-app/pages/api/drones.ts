import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import { Drone } from "../../types";
import { PrismaClient } from "@prisma/client";

type Data = Drone[];

export default async function getDronesData(
  _req: NextApiRequest,
  res: NextApiResponse<Data | String>
) {
  const parserOptions = {
    ignorePiTags: true,
  };
  const parser = new XMLParser(parserOptions);

  const prisma = new PrismaClient();

  try {
    const drones = await prisma.drone.findMany();
    res.status(200).send(JSON.stringify(drones));
  } catch (error) {
    res.status(500).send(`Error occure: ${error}`);
  }
}
