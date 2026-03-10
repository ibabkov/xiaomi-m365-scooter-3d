'use client';

import React from 'react';

import { ScrollMotivation } from '../../components/ScrollMotivation';
import { useStore } from '../../hooks/useStore';

export const ScrollMotivationContainer = () => {
	const { page, scene } = useStore();
	const { firstPage } = page;
	const { movingCamera } = scene;

	const text = React.useMemo(() => {
		return firstPage ? 'Scroll down' : '';
	}, [firstPage]);

	return <ScrollMotivation hidden={movingCamera} text={text} />;
};
