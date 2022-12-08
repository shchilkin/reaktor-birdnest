import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import { Drone } from "../../types";

type Data = Drone[];

export default async function getDronesData(
  _req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const parserOptions = {
    ignorePiTags: true,
  };
  const parser = new XMLParser(parserOptions);

  const data = await fetch("https://assignments.reaktor.com/birdnest/drones")
    .then((response) => response.text())
    .then((data) => data);

  res.status(200).send(parser.parse(data)["report"]["capture"]["drone"]);
}
