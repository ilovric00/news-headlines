import React from 'react';

import styles from './Avatar.module.scss';

interface AvatarProps {
  name: string;
  picture?: string;
}

const Avatar: React.FC<AvatarProps> = ({ name, picture }) => (
  <div className={styles.container}>
    {picture && <img src={picture} className={styles.image} alt={name} />}
    <div className={styles.name}>{name}</div>
  </div>
);

export default Avatar;
