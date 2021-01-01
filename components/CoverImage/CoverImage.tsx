import cn from 'classnames';
import Hyperlink from '../Hyperlink';

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
      className={cn('shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': slug,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
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
