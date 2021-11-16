import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './styles.module.scss';

type ILinkProps = {
  text: string;
  to: string;
};

const Link: FC<ILinkProps> = React.memo(({ text, to }) => (
  <NavLink activeClassName={styles.activeLink} className={styles.link} to={to}>
    {text}
  </NavLink>
));

export default Link;
