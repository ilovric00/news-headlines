import styles from './PostBody.module.scss';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className="max-w-2xl mx-auto">
    <div className={styles.markdown}>{content}</div>
  </div>
);

export default PostBody;
