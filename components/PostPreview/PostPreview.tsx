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

const PostPreview = ({ title, coverImage, date, excerpt, author, slug }: Props) => (
  <div>
    <div className="mb-5">
      <CoverImage slug={slug} title={title} src={coverImage} />
    </div>
    <h3 className="text-3xl mb-3 leading-snug">
      <Hyperlink
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        AnchorProps={{
          className: 'hover:underline',
          dangerouslySetInnerHTML: { __html: title },
        }}
      />
    </h3>
    <div className="text-lg mb-4">
      <DateFormatter dateString={date} />
    </div>
    <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
    <Avatar name={author.name} picture={author.picture} />
  </div>
);

export default PostPreview;