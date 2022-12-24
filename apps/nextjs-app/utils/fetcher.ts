import {Fetcher} from "swr";
import {PilotWithDrone} from "../components/IntrudersTable";

export const fetcher: Fetcher<PilotWithDrone[], string> = (url: string) =>
    fetch(url).then((res) => res.json());
