import { Vector3 } from 'three';

import { PAGE_DESCRIPTION } from './pageDescription';

export const INITIAL_PAGES = PAGE_DESCRIPTION.map(description => ({
	description,
	camera: new Vector3(),
	target: new Vector3(),
}));
