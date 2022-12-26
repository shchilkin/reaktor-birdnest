import { Drone, Pilot, ClosedConfirmedDistance } from '@reaktor-birdnest/types';
import axios from 'axios';
import { getPointDistance, isDroneViolatingPerimeter } from '@reaktor-birdnest/utils';
import getDroneData from '../getDroneData/getDroneData';
import * as console from 'console';

const pilotEndpoint = 'https://assignments.reaktor.com/birdnest/pilots/';

export interface PilotWithDroneAndDistance extends Pilot {
  drone: Drone;
  closedConfirmedDistance: ClosedConfirmedDistance;
}

const getIntruderPilots = async (): Promise<PilotWithDroneAndDistance[]> => {
  const droneData = await getDroneData();

  if (!droneData) return [];

  /** Array contains information about drones who passed the perimeter */
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

      const closedConfirmedDistance = getPointDistance(drone.positionX, drone.positionY, 250000, 250000);

      return {
        ...pilot,
        drone: {
          ...drone,
        },
        closedConfirmedDistance: {
          positionX: drone.positionX,
          positionY: drone.positionY,
          distance: closedConfirmedDistance,
        },
      };
    })
  );
};

export default getIntruderPilots;
