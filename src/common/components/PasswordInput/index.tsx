import React, { useState, FC, useMemo, useCallback } from 'react';
import Input, { IInputProps } from '../Input';
import { ReactComponent as OpenedEye } from '../../../assets/images/icons/opened-eye.svg';
import { ReactComponent as ClosedEye } from '../../../assets/images/icons/closed-eye.svg';

import styles from './styles.module.scss';

const PasswordInput: FC<IInputProps> = (props) => {
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);

  const inputType = useMemo(() => (isVisiblePassword ? 'text' : 'password'), [isVisiblePassword]);

  const changeInputType = useCallback(
    () => setIsVisiblePassword(!isVisiblePassword),
    [setIsVisiblePassword, isVisiblePassword],
  );
  console.log(inputType);
  return (
    <div>
      <Input
        classList={[styles.passwordInput]}
        type={inputType}
        {...props}
        icon={
          <div className={styles.passwordIcon} onClick={changeInputType}>
            {isVisiblePassword ? <OpenedEye /> : <ClosedEye />}
          </div>
        }
      />
    </div>
  );
};

export default PasswordInput;
