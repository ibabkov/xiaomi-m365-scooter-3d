import { Vector3 } from 'three';

export type TPagePositionType = 'camera' | 'target';

export interface IPage {
  camera: Vector3;
  target: Vector3;
}
