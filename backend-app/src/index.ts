import axios from "axios";
import { XMLParser } from "fast-xml-parser";
// TODO: Create monorepo
import { Drone } from "./types/index";

const parserOptions = {
  ignorePiTags: true,
};
const parser = new XMLParser(parserOptions);

try {
  (async () => {
    const data = await axios
      .get("https://assignments.reaktor.com/birdnest/drones")
      .then((response) => response.data);
    parser.parse(data)["report"]["capture"]["drone"].map((drone: Drone) => {
      console.log(drone);
    });
  })();
} catch (error) {
  console.error(error);
}
