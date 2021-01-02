import { NextApiRequest, NextApiResponse } from 'next';
import { getCategoryArticles } from '../../lib/api';
import { NEWS_API } from '../../lib/config';
import Category from '../../types/category';

export default async function categoryAPI(req: NextApiRequest, res: NextApiResponse) {
  const { category } = req.query;
  const { DEFAULT_CATEGORY } = NEWS_API;

  const data = await getCategoryArticles((category || DEFAULT_CATEGORY) as Category);

  return res.json(data);
}
