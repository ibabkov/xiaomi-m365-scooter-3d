import React from 'react';

import classnames from 'classnames';

import styles from './Description.module.css';

export type ScrollDownProps = {
	title?: string;
	text?: string;
	hidden: boolean;
};

export const DescriptionComponent: React.FC<ScrollDownProps> = props => {
	const { title, text, hidden } = props;

	return (
		<div className={classnames(styles['container'], hidden && styles['container-hidden'])}>
			<div className={styles['content']}>
				<span className={styles['title']}>{title}</span>
				<span className={styles['text']}>{text}</span>
			</div>
			<div className={styles['aim']} />
		</div>
	);
};

export const Description = React.memo(DescriptionComponent);
