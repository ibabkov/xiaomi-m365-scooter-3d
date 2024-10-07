import React from 'react';

import styles from './Layout.module.css';

export type LayoutProps = {
	children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = props => {
	const { children } = props;

	return <main className={styles.container}>{children}</main>;
};
