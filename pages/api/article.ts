import { NextApiRequest, NextApiResponse } from 'next';
import { getArticleAndRelatedArticles } from '../../lib/api';

export default async function articleAPI(req: NextApiRequest, res: NextApiResponse) {
  const { slug } = req.query;

  const data = await getArticleAndRelatedArticles(slug as string);

  return res.json(data);
}
