import { Drone, Pilot } from "@prisma/client";
import PilotListItemTime from "../PilotListItem-Time";

export interface PilotWithDrone extends Pilot {
  drone: Drone;
}

interface PilotListItemProps {
  pilot: PilotWithDrone;
}
const IntrudersTableCell: React.FunctionComponent<PilotListItemProps> = ({
  pilot,
}) => {
  return (
    <tr>
      <td>
        {pilot.firstName} {pilot.lastName}
      </td>
      <td>{pilot.email}</td>
      <td>{pilot.phoneNumber}</td>
      <td>
        <PilotListItemTime time={pilot.updatedAt} />
      </td>
    </tr>
  );
};

export default IntrudersTableCell;
