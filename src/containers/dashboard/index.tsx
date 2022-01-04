import React, { FC } from 'react';
import Loader from '../../common/components/Loader';
import Header from '../../common/components/Header';
import Sidebar from '../../common/components/Sidebar/Sidebar';

import styles from './styles.module.scss';
import Title from './Title';

export type IDashboardProps = {
  children: any;
  isLoading?: boolean;
  pageName?: string;
};

const Dashboard: FC<IDashboardProps> = ({ children, isLoading = false, pageName = '' }) => (
  <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <Sidebar />
      <div className={styles.contentWrap}>
        {isLoading ? (
          <div className={styles.loaderWrapper}>
            <div className={styles.loaderInner}>
              <div className={styles.loaderContainer}>
                <Loader visible={isLoading} />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.content}>
            {pageName ? <Title text={pageName} /> : null}
            {children}
          </div>
        )}
      </div>
    </main>
  </div>
);

export default Dashboard;
