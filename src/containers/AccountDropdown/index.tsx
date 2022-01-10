import React, { useEffect, useRef, useState, useContext, useCallback } from 'react';
import combineCss from '../../common/helpers/combineCss';
import { MainContext } from '../../common/context/main';

import styles from './styles.module.scss';
import Button from '../../common/components/Button';

const AccountDropdown = React.memo(() => {
  const { dispatch, state: { user } } = useContext(MainContext);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    window.addEventListener('click', dropdownToggler);

    return () => window.removeEventListener('click', dropdownToggler);
  }, [isOpen, closeAnimation]);

  const dropdownToggler = ({ target }: any) => {
    if (
      (!target.closest('[data-dropdown-header]') && !isOpen) || target.closest('[data-dropdown-body]')) return;

    if (!isOpen && !!target.closest('[data-dropdown-header]')) {
      setIsOpen(() => true);
      return;
    }

    setCloseAnimation(true);
    setTimeout(() => {
      setIsOpen(() => false);
      setCloseAnimation(() => false);
    }, 100);
  };

  const exit = useCallback(() => {
    localStorage.removeItem('token');
    dispatch({ type: 'EXIT' });
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={styles.header} data-dropdown-header>
        <img className={styles.avatar} src={user?.avatar} alt='avatar'></img>
        <p className={styles.header__text}>Account</p>
      </div>
      {isOpen ? (
        <div
          data-dropdown-body
          ref={dropdownRef}
          className={combineCss([styles.body, closeAnimation ? styles['close-animation'] : '', 'dropdown-body'])}
        >
          <div className={styles.inner}>
            <p className={styles.username}>{user?.username}</p>
            <Button size="small" classList={styles.exitBtn} onClick={exit}>Exit</Button>
          </div>
        </div>
      ) : null}
    </div>
  );
});

export default AccountDropdown;
