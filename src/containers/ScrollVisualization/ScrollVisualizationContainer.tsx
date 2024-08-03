import React from 'react';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { ScrollVisualization } from '../../components/ScrollVisualization';

export const ScrollVisualizationContainer: React.FC = () => {
	const [{ page, pages }] = useScooterSceneState();
	const { index: pageIndex } = page;
	const top = (pageIndex / pages.length) * 100;
	const height = (1 / pages.length) * 100;

	return <ScrollVisualization top={top} height={height} />;
};
