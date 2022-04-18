import React from 'react';

import styles from './ScrollVisualization.module.css';

export interface IScrollVisualizationProps {
  top: number;
  height: number;
}

const ScrollVisualizationComponent: React.FC<IScrollVisualizationProps> = (
  props
) => {
  const { top, height } = props;
  const style = React.useMemo(
    () => ({
      top: `${top}%`,
      height: `${height}%`,
    }),
    [top, height]
  );

  return (
    <div className={styles['container']}>
      <div style={style} className={styles['indicator']} />
    </div>
  );
};

export const ScrollVisualization = React.memo(ScrollVisualizationComponent);
