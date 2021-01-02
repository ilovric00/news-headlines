import { NextApiRequest, NextApiResponse } from 'next';
import { getFrontpageArticles } from '../../lib/api';

export default async function frontpageAPI(_: NextApiRequest, res: NextApiResponse) {
  const data = await getFrontpageArticles();

  return res.json(data);
}
