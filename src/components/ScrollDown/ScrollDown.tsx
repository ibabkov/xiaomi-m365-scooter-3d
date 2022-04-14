import React from 'react';

import classnames from 'classnames';

import styles from './ScrollDown.module.css';

export interface IScrollDownProps {
  hidden: boolean;
}

export const ScrollDown: React.FC<IScrollDownProps> = (props) => {
  const { hidden } = props;

  return (
    <div
      className={classnames(
        styles['container'],
        hidden && styles['container-hidden']
      )}
    >
      <div className={styles['icon']}>
        <div className={styles['chevron']} />
        <div className={styles['chevron']} />
        <div className={styles['chevron']} />
      </div>
      <span className={styles['text']}>Scroll down</span>
    </div>
  );
};
