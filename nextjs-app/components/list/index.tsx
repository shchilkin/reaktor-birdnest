import useSWR, { Fetcher } from "swr";
import { Pilot, Drone } from "@prisma/client";

interface PilotWithDrone extends Pilot {
  drone: Drone;
}

const fetcher: Fetcher<PilotWithDrone[]> = (url: string) =>
  fetch(url).then((r) => r.json());

const List = () => {
  const { data, error } = useSWR("/api/pilots", fetcher);

  if (error) return <code>{error}</code>;

  return (
    <code>
      {data?.map((pilot: PilotWithDrone) => (
        <p key={pilot.id}>
          {pilot.firstName} {pilot.lastName} {pilot.email} {pilot.phoneNumber}
        </p>
      ))}
    </code>
  );
};

export default List;
