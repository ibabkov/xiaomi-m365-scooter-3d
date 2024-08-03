import { Vector3 } from 'three';

import { TPageDescription } from './pageDescription';

export type TPagePositionType = 'camera' | 'target';

export interface IPage {
	camera: Vector3;
	target: Vector3;
	description: TPageDescription;
}
