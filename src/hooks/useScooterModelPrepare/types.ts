import { GLTF } from 'three-stdlib';
import { Vector3 } from 'three';

import { Page } from '../../types/page';

export interface IModelPrepareData {
	model: GLTF;
	pages: Page[];
	frontLightPosition: Vector3;
}
