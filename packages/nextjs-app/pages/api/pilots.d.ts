import { Pilot } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(_req: NextApiRequest, res: NextApiResponse<Pilot[]>): Promise<void>;
