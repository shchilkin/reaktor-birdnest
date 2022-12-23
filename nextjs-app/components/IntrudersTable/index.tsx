import useSWR from "swr";
import { Pilot, Drone } from "@prisma/client";
import IntrudersTableCell from "../IntrudersTableCell";
import { fetcher } from "../../utils/fetcher";

const IntrudersTable = () => {
  const { data, error } = useSWR("/api/pilots", fetcher, {
    refreshInterval: 2000,
  });

  if (error) return <code>{error}</code>;

  return (
    <table className='table-auto w-full text-left'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone number</th>
          <th>Last seen</th>
        </tr>
      </thead>
      <tbody>
        {/* @ts-expect-error */}
        {data?.sort(compareTime).map((pilot: PilotWithDrone) => (
          <IntrudersTableCell key={pilot.id} pilot={pilot} />
        ))}
      </tbody>
    </table>
  );
};

export default IntrudersTable;

export interface PilotWithDrone extends Pilot {
  drone: Drone;
}

const getMinutes = (date: Date | string): number => {
  const updatedAt = new Date(date);
  const seconds = (Date.now() - updatedAt.valueOf()) / 1000;
  return seconds / 60;
};

const compareTime = (a: PilotWithDrone, b: PilotWithDrone): number => {
  if (getMinutes(a.updatedAt) > getMinutes(b.updatedAt)) return -1;
  if (getMinutes(a.updatedAt) < getMinutes(b.updatedAt)) return 1;
  return 0;
};
