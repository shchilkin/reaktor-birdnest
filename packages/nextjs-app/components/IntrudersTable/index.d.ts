/// <reference types="react" />
import { Pilot, Drone } from "@prisma/client";
declare const IntrudersTable: () => JSX.Element;
export default IntrudersTable;
export interface PilotWithDrone extends Pilot {
    drone: Drone;
}
//# sourceMappingURL=index.d.ts.map