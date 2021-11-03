import React, { FC, useMemo } from 'react';
import combineCss from '../../helpers/combineCss';

import styles from './styles.module.scss';

type IButtonProps = {
  text?: string;
  children: any;
  onClick?: () => void;
  size?: 'big' | 'small' | 'medium';
  classList?: string[];
};

const Button: FC<IButtonProps> = ({ text, children, onClick, size = 'medium', classList = [] }) => {
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
    <button className={combineCss([...classList, styles.btn, btnTypeStyles])} onClick={onClick}>
      {text}
      {children}
    </button>
  );
};

export default Button;
