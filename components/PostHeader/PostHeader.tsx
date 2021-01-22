import React from 'react';

import Avatar from '../Avatar';
import CoverImage from '../CoverImage';
import DateFormatter from '../DateFormatter';
import PostTitle from '../PostTitle';

import styles from './PostHeader.module.scss';

interface PostHeaderProps {
  title: string;
  coverImage: string;
  date: string;
  author: string;
}

const PostHeader: React.FC<PostHeaderProps> = ({ title, coverImage, date, author }) => (
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
