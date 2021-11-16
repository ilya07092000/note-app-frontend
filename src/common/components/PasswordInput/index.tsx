import React, { useState, FC, useCallback, useMemo } from 'react';
import Input, { IInputProps } from '../Input';
import { ReactComponent as OpenedEye } from '../../../assets/images/icons/opened-eye.svg';
import { ReactComponent as ClosedEye } from '../../../assets/images/icons/closed-eye.svg';

import styles from './styles.module.scss';

const PasswordInput: FC<IInputProps> = React.memo((props) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const inputType = isVisiblePassword ? 'text' : 'password';

  const changeInputType = useCallback(
    () => setIsVisiblePassword(!isVisiblePassword),
    [setIsVisiblePassword, isVisiblePassword],
  );

  const iconType = useMemo(
    () => (isVisiblePassword ? <OpenedEye /> : <ClosedEye />),
    [isVisiblePassword],
  );

  return (
    <div>
      <Input
        classList={[styles.passwordInput]}
        type={inputType}
        {...props}
        icon={
          <div className={styles.passwordIcon} onClick={changeInputType}>
            {iconType}
          </div>
        }
      />
    </div>
  );
});

export default PasswordInput;
