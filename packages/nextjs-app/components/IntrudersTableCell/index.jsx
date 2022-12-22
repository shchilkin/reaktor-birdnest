import PilotTableCellTime from "../PilotTableCellTime";
const IntrudersTableCell = ({ pilot, }) => {
    return (<tr>
      <td>
        {pilot.firstName} {pilot.lastName}
      </td>
      <td>{pilot.email}</td>
      <td>{pilot.phoneNumber}</td>
      <td>
        <PilotTableCellTime time={pilot.updatedAt}/>
      </td>
    </tr>);
};
export default IntrudersTableCell;
//# sourceMappingURL=index.jsx.map