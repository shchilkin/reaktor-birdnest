import React from "react";
import { ClosedConfirmedDistance } from "@prisma/client";

interface PilotTableCellTimeProps {
  closedConfirmedDistance: ClosedConfirmedDistance;
}

const PilotTableCellDistance: React.FunctionComponent<PilotTableCellTimeProps> = ({ closedConfirmedDistance }) => {
  const distance = Number(closedConfirmedDistance.distance / 1000).toFixed(2);

  return (
    <div>{`${distance} meters`}</div>);
};

export default PilotTableCellDistance;
