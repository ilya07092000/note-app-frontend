import React, { FC } from 'react';
import combineCss from '../../helpers/combineCss';

import styles from './index.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <div className={combineCss(['container', '_sm'])}>
      <div>
        <p className={styles.title}>Note-App</p>
      </div>
    </div>
  </header>
);

export default Header;
