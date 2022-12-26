import PilotTableCellTime from '../PilotTableCellTime';
import React from 'react';
import { PilotWithDrone } from '../IntrudersTable';
import PilotTableCellDistance from '../PilotTableCellDistance';

interface PilotListItemProps {
  pilot: PilotWithDrone;
}

const IntrudersTableCell: React.FunctionComponent<PilotListItemProps> = ({ pilot }) => {
  return (
    <tr>
      <td>
        {pilot.firstName} {pilot.lastName}
      </td>
      <td>{pilot.email}</td>
      <td>{pilot.phoneNumber}</td>
      <td>
        <PilotTableCellDistance closedConfirmedDistance={pilot.closedConfirmedDistance} />
      </td>
      <td>
        <PilotTableCellTime time={pilot.updatedAt} />
      </td>
    </tr>
  );
};

export default IntrudersTableCell;
