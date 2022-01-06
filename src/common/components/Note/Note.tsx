import React, { FC, useState } from 'react';
import moment from 'moment';
import { NavLink } from 'react-router-dom';
import { useToggleFavoriteMutation } from '../../../generated/graphql';
import FavoritedButton from '../../../containers/FavoritedButton';
import { IAuthor } from '../../../interfaces/IAuthor';
import Loader from '../Loader/index';

import styles from './styles.module.scss';

type INoteProps = {
  favorited: boolean;
  author: IAuthor;
  date: string;
  text: string;
  id: string;
};

const isLogged = true;

const Note: FC<INoteProps> = ({ favorited = false, author, date, text, id }) => {
  const [isFavorited, setIsFavorired] = useState(favorited);

  const [toggleFavorite, { loading }]: any = useToggleFavoriteMutation({
    onCompleted: ({ toggleFavorite }) => {
      console.log(toggleFavorite);
      setIsFavorired(() => toggleFavorite?.favorited || false);
    },
  });

  const toggleFavoriteNote = (e: any) => {
    e.preventDefault();
    toggleFavorite({
      variables: {
        id,
      },
    });
  };

  return (
    <div className={styles.noteWrapper}>
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
            <FavoritedButton onClick={toggleFavoriteNote} favorited={isFavorited} />
          ) : null}
        </div>
        <div className={styles.noteContent}>{text}</div>
      </NavLink>

      {loading ? (
        <div className={styles.loaderWrap}>
          <div className={styles.loaderInner}>
            <Loader visible={loading} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Note;
