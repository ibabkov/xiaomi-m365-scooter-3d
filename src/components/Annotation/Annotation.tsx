import React from 'react';

import classnames from 'classnames';

import styles from './Annotation.module.css';

export type AnnotationProps = {
	hidden: boolean;
};

const AnnotationComponent: React.FC<AnnotationProps> = props => {
	const { hidden } = props;

	return <div className={classnames(styles['container'], hidden && styles['container-hidden'])}>Xiaomi M365 Scooter</div>;
};

export const Annotation = React.memo(AnnotationComponent);
