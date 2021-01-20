import Head from 'next/head';
import Container from '../components/Container';
import RelatedArticles from '../components/RelatedArticles';
import HeroPost from '../components/HeroPost';
import Intro from '../components/Intro';
import Layout from '../components/Layout';
import { getFrontpageArticles } from '../lib/api';
import Article from '../types/article';
import getSlugFromURL from '../utils/getSlugFromURL';

type Props = {
  articles: Article[];
};

const Index = ({ articles }: Props) => {
  const heroArticle = articles.find(article => article.urlToImage);
  const moreArticles = articles.slice(1);
  return (
    <Layout>
      <Head>
        <title>News Headlines</title>
      </Head>
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

export default Index;

export const getStaticProps = async () => {
  const articles = await getFrontpageArticles();

  return {
    props: { articles },
  };
};
