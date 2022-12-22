import { Drone } from "./Drone";

export interface Pilot {
  pilotId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdDt: string;
  email: string;
}

export interface PilotWithDrone extends Pilot {
  drone: Drone;
}
