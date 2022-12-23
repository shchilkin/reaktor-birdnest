import type { NextApiRequest, NextApiResponse } from "next";
import { XMLParser } from "fast-xml-parser";
import { Info } from "../../types";

export default async function getInfoData(
  _req: NextApiRequest,
  res: NextApiResponse<Info | String>
) {
  const parserOptions = {
    ignorePiTags: true,
  };
  const parser = new XMLParser(parserOptions);

  try {
    const data = await fetch("https://assignments.reaktor.com/birdnest/drones")
      .then((response) => response.text())
      .then((data) => data);

    res.status(200).send(parser.parse(data)["report"]["deviceInformation"]);
  } catch (error) {
    res.status(500).send(`Error occured ${error}`);
  }
}
