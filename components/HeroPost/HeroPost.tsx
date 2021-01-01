import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import Hyperlink from '../Hyperlink';
import Author from '../../types/author';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => (
  <section>
    <div className="mb-8 md:mb-16">
      <CoverImage title={title} src={coverImage} slug={slug} />
    </div>
    <div className="md:grid md:grid-cols-2 md:col-gap-16 lg:col-gap-8 mb-20 md:mb-28">
      <div>
        <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
          <Hyperlink
            as={`/posts/${slug}`}
            href="/posts/[slug]"
            AnchorProps={{
              className: 'hover:underline',
              dangerouslySetInnerHTML: { __html: title },
            }}
          />
        </h3>
        <div className="mb-4 md:mb-0 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div>
        <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        <Avatar name={author.name} picture={author.picture} />
      </div>
    </div>
  </section>
);

export default HeroPost;
