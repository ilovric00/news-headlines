import React from 'react';

import styles from './PostBody.module.scss';

interface PostBodyProps {
  content: string;
}

const PostBody: React.FC<PostBodyProps> = ({ content }) => (
  <div className={styles.article}>
    <div className={styles.content}>{content}</div>
  </div>
);

export default PostBody;
