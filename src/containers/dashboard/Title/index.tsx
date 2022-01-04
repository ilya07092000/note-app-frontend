import React from 'react';

import styles from './styles.module.scss';

interface ITtitleProps {
  text: string;
}

const Title = ({ text }: ITtitleProps) => <h1 className={styles.title}>{text}</h1>;

export default Title;
