import { Pilot, Drone, ClosedConfirmedDistance } from '@prisma/client';
import IntrudersTableCell from '../IntrudersTableCell';
import useSWR from 'swr';

export interface PilotWithDrone extends Pilot {
  drone: Drone;
  closedConfirmedDistance: ClosedConfirmedDistance;
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

const IntrudersTable = () => {
  const { data, error, isValidating } = useSWR('/api/pilots', url => fetch(url).then(res => res.json()));
  if (error) return <code>Error</code>;
  if (!data) return <code>Loading...</code>;

  return (
    <div className="flex flex-col mx-4">
      <div className={'flex flex-row items-start items-center justify-between'}>
        <h1 className="text-2xl font-semibold">Intruders list</h1>
        {isValidating && <div>↺ refreshing</div>}
      </div>
      <div className="w-full overflow-x-scroll max-w-full">
        <table className="table-auto w-full text-left">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone number</th>
              <th>Closed confirmed distance</th>
              <th>Last seen</th>
            </tr>
          </thead>
          <tbody>
            {data.sort(compareTime).map((pilot: PilotWithDrone) => (
              <IntrudersTableCell key={pilot.id} pilot={pilot} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IntrudersTable;
