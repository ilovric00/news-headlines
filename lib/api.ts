import Article from '../types/article';
import Category from '../types/category';
import { NEWS_API } from './config';
import { fetchAPI } from './fetchAPI';

type ArticlesResult = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export async function getCategoryArticles(category: Category) {
  const { URL, ENDPOINT, DEFAULT_SORT } = NEWS_API;

  const url = `${URL}/${ENDPOINT}?category=${category}&sortBy=${DEFAULT_SORT}`;
  const data = await fetchAPI<ArticlesResult>(url);

  return data.articles;
}

export async function getFrontpageArticles() {
  const [business, entertainment, general, health, science, sports, technology] = await Promise.all([
    getCategoryArticles('business'),
    getCategoryArticles('entertainment'),
    getCategoryArticles('general'),
    getCategoryArticles('health'),
    getCategoryArticles('science'),
    getCategoryArticles('sports'),
    getCategoryArticles('technology'),
  ]);

  const allArticles = [...business, ...entertainment, ...general, ...health, ...science, ...sports, ...technology];

  return allArticles.filter((v, i, a) => a.findIndex(t => t.url === v.url) === i);
}

export async function getArticleAndRelatedArticles(slug: string) {
  // hack solution, since response doesn't contain slug or any id
  const frontpageArticles = await getFrontpageArticles();
  const article = frontpageArticles.find(frontpageArticle => frontpageArticle.url.includes(slug));
  const relatedArticles = frontpageArticles.slice(0, 10);

  if (!article) {
    throw new Error('Article not found');
  }

  return { article, relatedArticles };
}
