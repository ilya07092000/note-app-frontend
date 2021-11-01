import React, { FC } from 'react';
import { ReactComponent as Star } from '../../../assets/images/icons/star.svg';
import { ReactComponent as FilledStar } from '../../../assets/images/icons/filled-star.svg';

import styles from './styles.module.scss';

type INoteProps = {
  author: string | number | any;
  date: string | number | any;
  text: string | number | any;
};

const isLogged = true;
const isFavorited = true;

const Note: FC<INoteProps> = ({ author, date, text }: any) => (
  <div className={styles.note}>
    <div className={styles.noteHeader}>
      <div className={styles.noteInfo}>
        <img className={styles.noteAvatar} src={author.avatar} alt='avatar' />
        <div className={styles.noteData}>
          <p>{author.username}</p>
          <p>{date}</p>
        </div>
      </div>
      {isLogged ? (
        <div className={styles.favorited}>{isFavorited ? <FilledStar /> : <Star />}</div>
      ) : null}
    </div>
    <div className={styles.noteContent}>{text}</div>
  </div>
);

export default Note;
