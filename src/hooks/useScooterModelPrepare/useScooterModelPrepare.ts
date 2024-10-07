import React from 'react';

import { useGLTF } from '@react-three/drei';

import { traverseModelData } from './helpers';
import { IModelPrepareData } from './types';
import { Page } from '../../types/page';

export const useScooterModelPrepare = (initialPages: Page[]): IModelPrepareData => {
	const model = useGLTF('/xiaomi-scooter/scooter.glb', true);
	const [data] = React.useState(traverseModelData(model, initialPages));

	return { ...data };
};
