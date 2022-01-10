import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../App';

import styles from './styles.module.scss';

const Sidebar: FC = React.memo(() => (
  <aside className={styles.aside}>
    <div className={styles.asideInner}>
      <ul>
        {routes
          .filter((route) => route.isInSidebar)
          .map((route) => (
            <li className={styles.navList}>
              <NavLink
                exact
                className={styles.link}
                activeClassName={styles.activeLink}
                key={route.path}
                to={route.path}
              >
                {route.name}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  </aside>
));

export default Sidebar;
