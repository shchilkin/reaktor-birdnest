// Get Drone data and convert in from XML to JavaScript Object
import axios, { AxiosResponse } from "axios";
import { Drone, DroneResponse } from "@reaktor-birdnest/types";
import { XMLParser } from "fast-xml-parser";


const parserOptions = {
  ignorePiTags: true
};

const droneEndpoint = "https://assignments.reaktor.com/birdnest/drones/";

const parser = new XMLParser(parserOptions);

const getDroneData = async () => await axios
  .get(droneEndpoint)
  .then((response: AxiosResponse<DroneResponse>) => response.data as unknown as string)
  .then(data => parser.parse(data)["report"]["capture"]["drone"] as Drone[])
  .catch(error => {
    console.error(`Error occur while trying to get drone data: ${error as string}`);
  });

export default getDroneData;