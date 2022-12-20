import useSWR, { Fetcher } from "swr";
import { Pilot, Drone } from "@prisma/client";
import PilotListItem from "../PilotListItem";

export interface PilotWithDrone extends Pilot {
  drone: Drone;
}

const fetcher: Fetcher<PilotWithDrone[]> = (url: string) =>
  fetch(url).then((res) => res.json());

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

const List = () => {
  const { data, error } = useSWR("/api/pilots", fetcher);

  if (error) return <code>{error}</code>;

  return (
    <div className='gap-4 flex-column'>
      {data?.sort(compareTime).map((pilot: PilotWithDrone) => (
        <PilotListItem key={pilot.id} pilot={pilot} />
      ))}
    </div>
  );
};

export default List;
