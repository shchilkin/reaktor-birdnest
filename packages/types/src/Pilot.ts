import { Drone } from "./Drone";
import { ClosedConfirmedDistance } from "./ClosedConfirmedDistance";

export interface Pilot {
  pilotId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdDt: string;
  email: string;
  drone: Drone;
  closedConfirmedDistance: ClosedConfirmedDistance;
}