import type { NextApiRequest, NextApiResponse } from "next";
import { Info } from "../../types";
export default function getInfoData(_req: NextApiRequest, res: NextApiResponse<Info | String>): Promise<void>;
