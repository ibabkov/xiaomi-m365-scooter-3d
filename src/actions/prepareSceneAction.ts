import { Vector3 } from 'three';

import { Page } from '../types/page';
import { StoreState } from '../types/store';

export interface PrepareSceneOptions {
	pages: Page[];
	totalAnimationDuration: number;
	frontLightPosition: Vector3;
}

export const prepareSceneAction = (set: (fn: (state: StoreState) => void) => void) => (options: PrepareSceneOptions) => {
	const { pages, frontLightPosition, totalAnimationDuration } = options;

	set(state => {
		state.pages = pages;
		state.scene.frontLightPosition = frontLightPosition;
		state.scene.totalAnimationDuration = totalAnimationDuration;
		state.scene.loaded = true;
	});
};
