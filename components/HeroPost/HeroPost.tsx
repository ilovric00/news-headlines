import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import Hyperlink from '../Hyperlink';
import styles from './HeroPost.module.scss';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: string;
  slug: string;
};

const HeroPost = ({ title, coverImage, date, excerpt, author, slug }: Props) => (
  <section>
    <div className={styles.cover}>
      <CoverImage title={title} src={coverImage} slug={slug} />
    </div>
    <div className={styles.container}>
      <div>
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
      </div>
      <div>
        <p className={styles.text}>{excerpt}</p>
        <Avatar name={author} />
      </div>
    </div>
  </section>
);

export default HeroPost;
