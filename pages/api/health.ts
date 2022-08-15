import type { NextApiRequest, NextApiResponse } from "next";

type HealthResponse = {
  message: string;
};

const handler = (
  req: NextApiRequest,
  res: NextApiResponse<HealthResponse>
): void => {
  res.status(200).json({ message: "Healthy!" });
};

export default handler;
