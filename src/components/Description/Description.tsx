import React from 'react';

import classnames from 'classnames';

import { PAGE_DESCRIPTION } from '../../constants/pageDescription';
import styles from './Description.module.css';

export interface IScrollDownProps {
  pageIndex: number;
  scrolling: boolean;
}

export const Description: React.FC<IScrollDownProps> = (props) => {
  const { pageIndex, scrolling } = props;
  const pageDescription = React.useMemo(
    () => PAGE_DESCRIPTION[pageIndex],
    [pageIndex]
  );

  if (!pageDescription) {
    return null;
  }

  return (
    <div
      className={classnames(
        styles['container'],
        !scrolling && styles['container-hidden']
      )}
    >
      <div className={styles['content']}>
        <span className={styles['title']}>{pageDescription.title}</span>
        <span className={styles['text']}>{pageDescription.text}</span>
      </div>
      <div className={styles['aim']} />
    </div>
  );
};
