import { getAuth } from "@clerk/nextjs/server";
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  id: string | null
}

export async function GET(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  const { sessionId, userId } = getAuth(req);

  if (!sessionId) {
    return res.status(401).json({ id: null });
  }

  return res.status(200).json({ id: userId });
}
