import React, { FC } from 'react';
import Header from '../../common/components/Header';
import Sidebar from '../../common/components/Sidebar/Sidebar';

import styles from './styles.module.scss';

export type IDashboardProps = {
  children: any
};

const Dashboard: FC<IDashboardProps> = ({ children }) => (
  <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <div className={styles.mainInner}>
        <Sidebar />
        <div className={styles.content}>
          {children}
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
