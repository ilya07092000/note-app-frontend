import React, { FC } from 'react';

import styles from './styles.module.scss';

type ILoaderProps = {
  visible: boolean;
};

const Loader: FC<ILoaderProps> = ({ visible = false }) =>
  visible ? <div className={styles.loader}></div> : null;

export default Loader;
