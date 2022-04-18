import React from 'react';

import classnames from 'classnames';

import styles from './ScrollMotivation.module.css';

export interface IScrollMotivationProps {
  hidden: boolean;
  reverse: boolean;
  text: string;
}

const ScrollMotivationComponent: React.FC<IScrollMotivationProps> = (props) => {
  const { hidden, reverse, text } = props;

  return (
    <div
      className={classnames(
        styles['container'],
        hidden && styles['container-hidden']
      )}
    >
      <div
        className={classnames(
          styles['icon'],
          reverse && styles['icon-reverse']
        )}
      >
        <div className={styles['chevron']} />
        <div className={styles['chevron']} />
        <div className={styles['chevron']} />
      </div>
      {text && <span className={styles['text']}>{text}</span>}
    </div>
  );
};

export const ScrollMotivation = React.memo(ScrollMotivationComponent);
