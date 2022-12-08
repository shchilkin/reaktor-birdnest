import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser, XMLValidator } from "fast-xml-parser";

type Data = {
  name: string;
};

export default async function getDronesData(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const parser = new XMLParser();

  const data = await fetch("https://assignments.reaktor.com/birdnest/drones")
    .then((response) => response.text())
    .then((data) => data);

  console.log(parser.parse(data));
  res.status(200).send(parser.parse(data));
}
