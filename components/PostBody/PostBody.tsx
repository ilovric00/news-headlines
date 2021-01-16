import styles from './PostBody.module.scss';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => (
  <div className={styles.article}>
    <div className={styles.content}>{content}</div>
  </div>
);

export default PostBody;
