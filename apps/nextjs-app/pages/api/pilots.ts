import { Pilot, PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';

const prisma = new PrismaClient();

export default async function handler(_req: NextApiRequest, res: NextApiResponse<Pilot[]>) {
  try {
    const pilots = await prisma.pilot.findMany({
      include: {
        drone: true,
      },
    });
    res.status(200).send(pilots);
  } catch (error: unknown) {
    res.status(500);
  }
}
