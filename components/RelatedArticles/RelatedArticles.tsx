import Teaser from '../Teaser';
import Article from '../../types/article';
import getSlugFromURL from '../../utils/getSlugFromURL';

type Props = {
  articles: Article[];
};

const RelatedArticles = ({ articles }: Props) => {
  if (!articles.length) return null;
  return (
    <section>
      <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:col-gap-16 lg:col-gap-32 row-gap-20 md:row-gap-32 mb-32">
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
