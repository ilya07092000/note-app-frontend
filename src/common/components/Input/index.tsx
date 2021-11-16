import React, { FC } from 'react';
import combineCss from '../../helpers/combineCss';

import styles from './styles.module.scss';

export type IInputProps = {
  name: string;
  id: string;
  label?: string;
  initialValue?: string;
  classList?: string[];
  icon?: any;
  placeholder?: string;
  type?: 'text' | 'password';
};

const Input: FC<IInputProps> = React.memo(
  ({
    name,
    id,
    label = false,
    initialValue = '',
    classList = [],
    icon = false,
    placeholder = '',
    type = '',
  }) => (
    <>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles.inputWrapper}>
        <input
          autoComplete='true'
          type={type}
          className={combineCss([...classList, styles.input])}
          name={name}
          id={id}
          defaultValue={initialValue}
          placeholder={placeholder}
        />
        {React.isValidElement(icon) ? icon : null}
      </div>
    </>
  ),
);

export default Input;
