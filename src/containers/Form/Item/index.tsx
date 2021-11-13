import React, { FC, useContext, useMemo } from 'react';
import combineCss from '../../../common/helpers/combineCss';
import { FormContext } from '../index';

import styles from './styles.module.scss';

interface IItemProps {
  rules?: Rule;
  children: any;
  classList?: string[];
}

type Rule = {
  required?: boolean;
  maxLength?: number;
};

const Item: FC<IItemProps> = ({ children, classList = [] }) => {
  const { errors } = useContext(FormContext);
  const formName = useMemo(() => children?.props?.name, [children]);

  return (
    <div
      className={combineCss([styles.item, errors[formName] ? styles.error : '', ...classList])}
    >
      {children}
      {errors[formName] ? <span className={styles.formError}>{errors[formName]}</span> : null}
    </div>
  );
};

export default Item;
