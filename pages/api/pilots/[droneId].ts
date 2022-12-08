import type { NextApiRequest, NextApiResponse } from "next";
import { Pilot } from "../../../types";

export default async function getPilotByDroneId(
  req: NextApiRequest,
  res: NextApiResponse<Pilot>
) {
  const { droneId } = req.query;
  res.status(200);
}
