import React from 'react';

import styles from './Layout.module.css';

export interface ILayoutProps {
	children: React.ReactNode;
}

export const Layout: React.FC<ILayoutProps> = props => {
	const { children } = props;

	return <main className={styles.container}>{children}</main>;
};
