import Avatar from '../Avatar';
import DateFormatter from '../DateFormatter';
import CoverImage from '../CoverImage';
import PostTitle from '../PostTitle';
import styles from './PostHeader.module.scss';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: string;
};

const PostHeader = ({ title, coverImage, date, author }: Props) => (
  <>
    <PostTitle>{title}</PostTitle>
    <div className={styles.author}>
      <Avatar name={author} />
    </div>
    <div className={styles.coverImage}>
      <CoverImage title={title} src={coverImage} />
    </div>
    <div className={styles.container}>
      <div className={styles.author}>
        <Avatar name={author} />
      </div>
      <div className={styles.byline}>
        <DateFormatter dateString={date} />
      </div>
    </div>
  </>
);

export default PostHeader;
