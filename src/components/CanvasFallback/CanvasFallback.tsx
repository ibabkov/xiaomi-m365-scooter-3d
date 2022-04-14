import React from 'react';

import styles from './CanvasFallback.module.css';

export const CanvasFallback: React.FC = () => {
  return <span className={styles.container}>Loading</span>;
};
