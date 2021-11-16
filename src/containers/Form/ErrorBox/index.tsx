import React from 'react';

import styles from './styles.module.scss';

interface IErrorBox {
  msg: string;
}

const ErrorBox = React.memo(({ msg = '' }: IErrorBox) =>
  msg ? <p className={styles.error}>{msg}</p> : null);

export default ErrorBox;
