import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import Article from '../types/article';
import Category from '../types/category';
import { NEWS_API } from './config';
import { fetchAPI } from './fetchAPI';

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach(field => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map(slug => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
  return posts;
}

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

  return [...business, ...entertainment, ...general, ...health, ...science, ...sports, ...technology];
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
