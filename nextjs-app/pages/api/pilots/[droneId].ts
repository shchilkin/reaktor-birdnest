import type { NextApiRequest, NextApiResponse } from "next";
import { Pilot } from "../../../types";

export default async function getPilotByDroneId(
  req: NextApiRequest,
  res: NextApiResponse<Pilot | String>
) {
  const { droneId } = req.query;

  // TODO: check if pilot was within NDZ last 10 minutes

  try {
    const pilotInfo = await fetch(
      `https://assignments.reaktor.com/birdnest/pilots/${droneId}`
    )
      .then((response) => response.json())
      .then((data) => data);
    res.status(200).send(pilotInfo);
  } catch (error) {
    res.status(500).send(`Error occured: ${error}`);
  }
}
