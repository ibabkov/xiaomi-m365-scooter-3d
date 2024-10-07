import { Vector3 } from 'three';

import { Page } from './page';
import type { moveCameraAction, changePageAction, prepareSceneAction } from '../actions';

export type PageData = {
	index: number;
	contentPage: boolean;
	firstPage: boolean;
	lastPage: boolean;
	current: Page;
};

export type SceneData = {
	loaded: boolean;
	movingCamera: boolean;
	totalAnimationDuration: number;
	frontLightPosition: Vector3;
};

export type StoreState = {
	page: PageData;
	scene: SceneData;
	pages: Page[];
	actions: {
		moveCamera: ReturnType<typeof moveCameraAction>;
		changePage: ReturnType<typeof changePageAction>;
		prepareScene: ReturnType<typeof prepareSceneAction>;
	};
};
