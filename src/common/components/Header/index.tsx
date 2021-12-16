import React, { FC } from 'react';
import combineCss from '../../helpers/combineCss';
import AccountDropdown from '../../../containers/AccountDropdown';

import styles from './index.module.scss';

const Header: FC = () => (
  <header className={styles.header}>
    <div className={combineCss(['container'])}>
      <div className={styles.headerInner}>
        <p className={styles.title}>notify</p>
        <div className={styles.dropdownWrap}>
          <AccountDropdown />
        </div>
      </div>
    </div>
  </header>
);

export default Header;
