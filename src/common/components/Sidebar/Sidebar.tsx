import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../../App';

const Sidebar: FC = () => (
  <aside>
    {
      routes
        .filter((route) => route.isInSidebar)
        .map((route) => (
          <NavLink
            key={route.path}
            to={route.path}
          >
            {route.name}
          </NavLink>
        ))
    }
  </aside>
);

export default Sidebar;
