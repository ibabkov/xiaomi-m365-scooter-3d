import React, { forwardRef } from 'react';

import styles from './ScrollBar.module.css';

export type ScrollBarProps = {
	height: number;
};

const ScrollBarComponent = forwardRef<HTMLDivElement, ScrollBarProps>(function ScrollBar(props, ref) {
	const { height } = props;

	return <div ref={ref} style={{ height: `${height}%` }} className={styles['container']} />;
});

export const ScrollBar = React.memo(ScrollBarComponent);
