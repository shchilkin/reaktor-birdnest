export interface Drone {
  serialNumber: string;
  model: string;
  manufacturer: string;
  mac: string;
  ipv4: string;
  ipv6: string;
  firmware: string;
  positionY: number;
  positionX: number;
  altitude: number;
}

export interface Pilot {
  pilotId: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  createdDt: string;
  email: string;
}

export interface PilotObject extends Pilot {
  drone: Drone;
}

/**
 Type for the string which represent the date and could be parsed by {@link Date} object
 **/
type dateString = string;

export interface Info {
  listenRange: number;
  deviceStarted: dateString;
  uptimeSeconds: number;
  updateIntervalMs: number;
}
