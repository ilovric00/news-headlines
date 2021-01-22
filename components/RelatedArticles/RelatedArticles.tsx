import React from 'react';

import Teaser from '../Teaser';
import Article from '../../types/article';
import getSlugFromURL from '../../utils/getSlugFromURL';

import styles from './RelatedArticles.module.scss';

interface RelatedArticlesProps {
  articles: Article[];
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({ articles }) => {
  if (!articles.length) return null;
  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Related articles</h2>
      <div className={styles.grid}>
        {articles.map(post => (
          <Teaser
            key={post.url}
            title={post.title}
            coverImage={post.urlToImage}
            date={post.publishedAt}
            author={post.author}
            slug={getSlugFromURL(post.url)}
            excerpt={post.description}
          />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
