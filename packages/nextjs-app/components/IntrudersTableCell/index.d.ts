/// <reference types="react" />
import { Drone, Pilot } from "@prisma/client";
export interface PilotWithDrone extends Pilot {
    drone: Drone;
}
interface PilotListItemProps {
    pilot: PilotWithDrone;
}
declare const IntrudersTableCell: React.FunctionComponent<PilotListItemProps>;
export default IntrudersTableCell;
