import {DeviceInfo} from "./DeviceInfo";
import {Drone} from "./Drone";

export interface DroneResponse {
    deviceInformation: DeviceInfo;
    capture: {
        drone: Drone[]
    }
}