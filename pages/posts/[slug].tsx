import React from 'react';
import Head from 'next/head';
import ErrorPage from 'next/error';

import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import Container from '../../components/Container';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import PostBody from '../../components/PostBody';
import PostHeader from '../../components/PostHeader';
import PostTitle from '../../components/PostTitle';
import RelatedArticles from '../../components/RelatedArticles';
import Article from '../../types/article';
import getSlugFromURL from '../../utils/getSlugFromURL';

import { getArticleAndRelatedArticles, getFrontpageArticles } from '../../lib/api';

interface PostProps {
  article: Article;
  relatedArticles: Article[];
}

const Post: React.FC<PostProps> = ({ article, relatedArticles }) => {
  const router = useRouter();

  if (!router.isFallback && !article?.url) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout title={article?.title}>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <article>
            <Head>
              <meta property="og:image" content={article.urlToImage} />
            </Head>
            <PostHeader
              title={article.title}
              coverImage={article.urlToImage}
              date={article.publishedAt}
              author={article.author}
            />
            <PostBody content={article.content} />
          </article>
        )}
        <RelatedArticles articles={relatedArticles} />
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: Params) => {
  const { article, relatedArticles } = await getArticleAndRelatedArticles(params.slug);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await getFrontpageArticles();

  return {
    paths: articles.map(posts => ({
      params: {
        slug: getSlugFromURL(posts.url),
      },
    })),
    fallback: false,
  };
};
