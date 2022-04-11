import React from 'react';

import styles from './Main.module.css';

export const Main: React.FC<{ children: React.ReactNode }> = (props) => {
  const { children } = props;

  return <main className={styles.main}>{children}</main>;
};
