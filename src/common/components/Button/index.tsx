import React, { FC, useMemo } from 'react';
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
  const btnTypeStyles = useMemo(
    () =>
      ({
        big: styles.big,
        small: styles.small,
        medium: styles.medium,
      }[size]),
    [size],
  );

  return (
    <button
      className={combineCss([...classList, styles.btn, btnTypeStyles])}
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
