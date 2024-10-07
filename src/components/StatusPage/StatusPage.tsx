import React from 'react';

import styles from './StatusPage.module.css';

export type StatusPageProps = {
	title: string;
	description: string;
};

export const StatusPage: React.FC<StatusPageProps> = props => {
	const { title, description } = props;

	return (
		<nav className={styles['container']}>
			<span className={styles['title']}>{title}</span>
			<span className={styles['description']}>{description}</span>
		</nav>
	);
};
