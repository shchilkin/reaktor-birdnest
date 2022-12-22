import { NextPage } from "next";
import { Pilot } from "@prisma/client";
import { Drone } from "../types";
export declare function getServerSideProps(): Promise<{
    props: {
        pilots: (Pilot & {
            drone: import(".prisma/client").Drone | null;
        })[];
        drones: any;
    };
}>;
declare const Home: NextPage<{
    pilots: Pilot[];
    drones: Drone[];
}>;
export default Home;
