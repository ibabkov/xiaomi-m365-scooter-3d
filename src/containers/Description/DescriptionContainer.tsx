import React from 'react';

import { Description } from '../../components/Description';
import { useStore } from '../../hooks/useStore';

export const DescriptionContainer: React.FC = () => {
	const { page, scene } = useStore();
	const { current } = page;
	const { movingCamera } = scene;
	const { description } = current;

	return <Description hidden={!description || movingCamera} text={description?.text} title={description?.title} />;
};
