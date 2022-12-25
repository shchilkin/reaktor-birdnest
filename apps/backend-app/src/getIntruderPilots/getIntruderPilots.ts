import { Drone, Pilot } from "@reaktor-birdnest/types";
import axios from "axios";
import { getPointDistance, isDroneViolatingPerimeter } from "@reaktor-birdnest/utils";
import getDroneData from "../getDroneData/getDroneData";


const pilotEndpoint = "https://assignments.reaktor.com/birdnest/pilots/";


const getIntruderPilots = async (): Promise<Pilot[]> => {


  const droneData = await getDroneData();

  if (!droneData) return [];

  /** Array contains information about drones who passed the perimiter */
  const droneIntruders: Drone[] = droneData.filter((drone: Drone) =>
    isDroneViolatingPerimeter(drone.positionX, drone.positionY)
  );

  return await Promise.all(
    droneIntruders.map(async drone => {
      const pilot: Pilot = await axios
        .get(pilotEndpoint + drone.serialNumber)
        .then(response => response.data as Pilot)
        .catch(error => {
          console.error(`Error occur while trying to get pilot data: ${error as string}`);
          return {} as Pilot;
        });

      return {
        ...pilot,
        drone: {
          ...drone
        },
        closedConfirmedDistance: {
          positionX: drone.positionX,
          positionY: drone.positionY,
          distance: getPointDistance(drone.positionX, drone.positionY, 0, 0)
        }
      };
    })
  );
};
export default getIntruderPilots;