import { Vector3 } from 'three';

import { IPage } from '../types/page';
import { TScooterSceneStateModifier } from '../types/scooterSceneContext';

export interface IModifyAfterLoadingParams {
	pages: IPage[];
	totalAnimationDuration: number;
	frontLightPosition: Vector3;
}

export const modifyOnSceneLoaded = (params: IModifyAfterLoadingParams): TScooterSceneStateModifier => {
	const { pages, frontLightPosition, totalAnimationDuration } = params;

	return ({ scene }) => ({
		pages,
		scene: {
			...scene,
			loaded: true,
			totalAnimationDuration,
			frontLightPosition,
		},
	});
};
