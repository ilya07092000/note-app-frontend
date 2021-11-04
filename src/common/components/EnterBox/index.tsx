import React, { FC } from 'react';
import Header from './Header/index';
import Link from './Header/Link/index';

import styles from './styles.module.scss';

type IEnterBoxProps = {
  links?: Record<string, string>[];
  children: any;
};

const EnterBox: FC<IEnterBoxProps> = ({ links = [], children }) => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <div className={styles.box}>
        {links.length ? (
          <Header>
            <div className={styles.headerLinks}>
              {links.map((link) => (
                <Link text={link.name} to={link.path} />
              ))}
            </div>
          </Header>
        ) : null}
        <div className={styles.boxContent}>
          {children}
        </div>
      </div>
    </div>
  </div>
);

export default EnterBox;
