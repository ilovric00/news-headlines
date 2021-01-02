import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import Head from 'next/head';
import Container from '../../components/Container';
import PostBody from '../../components/PostBody';
import Header from '../../components/Header';
import PostHeader from '../../components/PostHeader';
import Layout from '../../components/Layout';
import { getArticleAndRelatedArticles, getFrontpageArticles } from '../../lib/api';
import PostTitle from '../../components/PostTitle';
import Article from '../../types/article';
import getSlugFromURL from '../../utils/getSlugFromURL';
import RelatedArticles from '../../components/RelatedArticles';

type Props = {
  article: Article;
  relatedArticles: Article[];
};

const Post = ({ article, relatedArticles }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !article?.url) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout>
      <Container>
        <Header />
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mb-32">
              <Head>
                <title>{article.title}| Blog Example</title>
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
          </>
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

export async function getStaticProps({ params }: Params) {
  const { article, relatedArticles } = await getArticleAndRelatedArticles(params.slug);

  return {
    props: {
      article,
      relatedArticles,
    },
  };
}

export async function getStaticPaths() {
  const articles = await getFrontpageArticles();

  return {
    paths: articles.map(posts => ({
      params: {
        slug: getSlugFromURL(posts.url),
      },
    })),
    fallback: false,
  };
}
