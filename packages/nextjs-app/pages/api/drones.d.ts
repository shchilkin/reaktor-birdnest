import type { NextApiRequest, NextApiResponse } from "next";
import { Info } from "../../types";
export declare const getDrones: () => Promise<any>;
export default function getDronesData(_req: NextApiRequest, res: NextApiResponse<Info | String>): Promise<void>;
