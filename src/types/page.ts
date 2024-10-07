import { Vector3 } from 'three';

import { PageDescription } from './pageDescription';

export type PagePositionType = 'camera' | 'target';

export type Page = {
	camera: Vector3;
	target: Vector3;
	description: PageDescription;
};
