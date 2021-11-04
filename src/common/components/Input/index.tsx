import React, { FC } from 'react';
import combineCss from '../../helpers/combineCss';

import styles from './styles.module.scss';

type IInputProps = {
  name: string;
  id: string;
  label?: string;
  initialValue?: string;
  type?: string;
  classList?: string[];
  icon?: any;
};

const Input: FC<IInputProps> = ({
  name,
  id,
  label = false,
  initialValue = '',
  type = 'text',
  classList = [],
  icon = false,
}) => (
  <div className={styles.inputWrap}>
    {
      label && <label htmlFor={id} >{label}</label>
    }
    <input
      className={combineCss([...classList, styles.input])}
      name={name}
      id={id}
      defaultValue={initialValue}
      type={type}
    />
    <img src={icon} />
  </div>
);

export default Input;
