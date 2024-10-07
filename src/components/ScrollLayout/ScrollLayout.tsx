import React, { forwardRef } from 'react';

import styles from './ScrollLayout.module.css';

export type ScrollLayoutProps = {
	children: React.ReactNode;
	height: number;
};

export const ScrollLayout = forwardRef<HTMLDivElement, ScrollLayoutProps>(function ScrollLayout(props, ref) {
	const { height, children } = props;

	return (
		<div ref={ref} className={styles['container']}>
			<div className={styles['bar']}>{children}</div>
			<div style={{ height: `${height}%` }} className={styles['content']} />
		</div>
	);
});
