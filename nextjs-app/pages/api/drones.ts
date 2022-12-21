import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import { Info } from "../../types";

export const getDrones = async () => {
  const parserOptions = {
    ignorePiTags: true,
  };

  const parser = new XMLParser(parserOptions);

  return await fetch("https://assignments.reaktor.com/birdnest/drones")
    .then((response) => response.text())
    .then((data) => parser.parse(data)["report"]["capture"]["drone"]);
};

export default async function getDronesData(
  _req: NextApiRequest,
  res: NextApiResponse<Info | String>
) {
  try {
    const data = await getDrones();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send(`Error occured ${error}`);
  }
}
