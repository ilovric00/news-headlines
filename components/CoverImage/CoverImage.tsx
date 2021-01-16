import cn from 'classnames';
import Hyperlink from '../Hyperlink';
import styles from './CoverImage.module.scss';

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <img
      src={src}
      alt={`Cover for ${title}`}
      className={cn(styles.image, {
        [styles.thumbnail]: slug,
      })}
    />
  );
  return (
    <div className={styles.container}>
      {slug ? (
        <Hyperlink as={`/posts/${slug}`} href="/posts/[slug]" AnchorProps={{ 'aria-label': title }}>
          {image}
        </Hyperlink>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
