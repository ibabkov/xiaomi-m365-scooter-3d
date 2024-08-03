import { Vector3 } from 'three';

import { PAGE_DESCRIPTION } from './pageDescription';
import { TScooterSceneContext } from '../types/scooterSceneContext';

const SCOOTER_SCENE_INITIAL_PAGES = PAGE_DESCRIPTION.map(description => ({
	description,
	camera: new Vector3(),
	target: new Vector3(),
}));

export const SCOOTER_SCENE_INITIAL_CONTEXT: TScooterSceneContext = [
	{
		page: {
			index: 0,
			contentPage: false,
			firstPage: true,
			lastPage: false,
			current: SCOOTER_SCENE_INITIAL_PAGES[0],
		},
		scene: {
			loaded: false,
			movingCamera: false,
			totalAnimationDuration: 0,
			frontLightPosition: new Vector3(),
		},
		pages: SCOOTER_SCENE_INITIAL_PAGES,
	},
	() => undefined,
];
