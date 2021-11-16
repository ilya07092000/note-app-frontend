import React, { FC } from 'react';
import combineCss from '../../helpers/combineCss';
import Loader from '../Loader';

import styles from './styles.module.scss';

type IButtonProps = {
  text?: string;
  children: any;
  onClick?: () => void;
  size?: 'big' | 'small' | 'medium';
  isLoading?: boolean;
  classList?: string[];
};

const Button: FC<IButtonProps> = ({
  text,
  children,
  onClick,
  size = 'medium',
  isLoading = false,
  classList = [],
}) => {
  const btnTypeStyles = {
    big: styles.big,
    small: styles.small,
    medium: styles.medium,
  }[size];

  return (
    <button
      className={combineCss([styles.btn, btnTypeStyles, ...classList])}
      onClick={onClick}
      disabled={isLoading}
    >
      {text}
      {children}
      <div className={styles.loaderWrap}>
        <Loader visible={isLoading} />
      </div>
    </button>
  );
};

export default Button;
