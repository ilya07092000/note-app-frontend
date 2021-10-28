import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../App';

import styles from './styles.module.scss';

const Sidebar: FC = () => (
  <aside className={styles.aside}>
    <div className={styles.asideInner}>
      {
        routes
          .filter((route) => route.isInSidebar)
          .map((route) => (
            <NavLink
              className={styles.link}
              key={route.path}
              to={route.path}
            >
              {route.name}
            </NavLink>
          ))
      }
    </div>
  </aside>
);

export default Sidebar;
