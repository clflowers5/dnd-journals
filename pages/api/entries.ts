import type { NextApiRequest, NextApiResponse } from 'next'

type EntriesResponse = {
  foo: string
}

const handler = (req: NextApiRequest, res: NextApiResponse<EntriesResponse>): void => {
  res.status(200).json({ foo: 'bar' })
}

export default handler
