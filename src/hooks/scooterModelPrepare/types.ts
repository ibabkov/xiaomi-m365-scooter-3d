import { GLTF } from 'three-stdlib';
import { Vector3 } from 'three';

import { IPage } from '../../types/page';

export interface IModelPrepareData {
  model: GLTF;
  pages: IPage[];
  frontLightPosition: Vector3;
}
