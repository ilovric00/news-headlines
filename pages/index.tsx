import React from 'react';
import { GetStaticProps } from 'next';

import Container from '../components/Container';
import HeroPost from '../components/HeroPost';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import RelatedArticles from '../components/RelatedArticles';
import Article from '../types/article';
import getSlugFromURL from '../utils/getSlugFromURL';

import { getFrontpageArticles } from '../lib/api';

interface FrontpageProps {
  articles: Article[];
}

const Frontpage: React.FC<FrontpageProps> = ({ articles }) => {
  const heroArticle = articles.find(article => article.urlToImage);
  const moreArticles = articles.slice(1);

  return (
    <Layout>
      <Container>
        <Intro />
        {heroArticle && (
          <HeroPost
            title={heroArticle.title}
            coverImage={heroArticle.urlToImage}
            date={heroArticle.publishedAt}
            author={heroArticle.author}
            slug={getSlugFromURL(heroArticle.url)}
            excerpt={heroArticle.description}
          />
        )}
        <RelatedArticles articles={moreArticles} />
      </Container>
    </Layout>
  );
};

export default Frontpage;

export const getStaticProps: GetStaticProps = async () => {
  const articles = await getFrontpageArticles();

  return {
    props: { articles },
  };
};
