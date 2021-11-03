import React, { FC } from 'react';
import Loader from '../../common/components/Loader';
import Header from '../../common/components/Header';
import Sidebar from '../../common/components/Sidebar/Sidebar';

import styles from './styles.module.scss';

export type IDashboardProps = {
  children: any;
  isLoading?: boolean;
};

const Dashboard: FC<IDashboardProps> = ({ children, isLoading = false }) => (
  <div className={styles.page}>
    <Header />
    <main className={styles.main}>
      <div className={styles.mainInner}>
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
              {children}
            </div>
          )}
        </div>
      </div>
    </main>
  </div>
);

export default Dashboard;
