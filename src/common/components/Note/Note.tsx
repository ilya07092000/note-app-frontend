import React, { FC } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import FavoritedButton from '../../../containers/FavoritedButton';
import { IAuthor } from '../../../interfaces/IAuthor';

import styles from './styles.module.scss';

type INoteProps = {
  favorited: boolean;
  author: IAuthor;
  date: string;
  text: string;
  id: string;
};

const isLogged = true;

const Note: FC<INoteProps> = ({ favorited = false, author, date, text, id }) => (
  <NavLink to={`note/${id}`} className={styles.note}>
    <div className={styles.noteHeader}>
      <div className={styles.noteInfo}>
        <img className={styles.noteAvatar} src={author.avatar} alt='avatar' />
        <div className={styles.noteData}>
          <p className={styles.author}>{author.username}</p>
          <p className={styles.date}>{moment(date).format('MMMM Do YYYY')}</p>
        </div>
      </div>
      {isLogged ? (
        <FavoritedButton favorited={favorited} />
      ) : null}
    </div>
    <div className={styles.noteContent}>{text}</div>
  </NavLink>
);

export default Note;
