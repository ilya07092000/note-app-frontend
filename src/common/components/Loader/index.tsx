import React, { FC } from 'react';

import styles from './styles.module.scss';

type ILoaderProps = {
  visible: boolean;
  color?: string;
};

const Loader: FC<ILoaderProps> = ({ visible = false, color = '#fff' }) =>
  visible ? <div className={styles.loader} style={{ color }}></div> : null;

export default Loader;
