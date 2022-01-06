import React, { FC } from 'react';
import { ReactComponent as Star } from '../../assets/images/icons/star.svg';
import { ReactComponent as FilledStar } from '../../assets/images/icons/filled-star.svg';

import styles from './styles.module.scss';

type IProps = {
  favorited: boolean;
  onClick: any;
};

const FavoritedButton: FC<IProps> = ({ favorited = false, onClick }) => (
  <div onClick={onClick} className={styles.favorited}>{favorited ? <FilledStar /> : <Star />}</div>
);

export default FavoritedButton;
