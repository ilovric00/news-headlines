import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import Hyperlink from '../Hyperlink';
import styles from './Teaser.module.scss';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const Teaser = ({ title, coverImage, date, excerpt, author, slug }: Props) => (
  <div>
    <div className={styles.marginBottom}>
      <CoverImage slug={slug} title={title} src={coverImage} />
    </div>
    <h3 className={styles.title}>
      <Hyperlink
        as={`/posts/${slug}`}
        href="/posts/[slug]"
        AnchorProps={{
          className: styles.link,
          dangerouslySetInnerHTML: { __html: title },
        }}
      />
    </h3>
    <div className={styles.date}>
      <DateFormatter dateString={date} />
    </div>
    <p className={styles.author}>{excerpt}</p>
    <Avatar name={author} />
  </div>
);

export default Teaser;
