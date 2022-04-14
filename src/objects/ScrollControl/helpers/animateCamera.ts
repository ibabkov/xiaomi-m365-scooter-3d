import { Vector3 } from 'three';
import { Camera as ThreeCamera } from '@react-three/fiber';
import { Tween } from '@tweenjs/tween.js';

import { IPage } from '../../../types/page';

export interface IHandleScrollParams {
  page: IPage;
  newPage: IPage;
  camera: ThreeCamera;
  onStart: () => void;
  onComplete: () => void;
}

const CAMERA_ANIMATION_DURATION = 2000;

const handleCameraPosUpdate =
  (cameraPosition: Vector3, newCameraPosition: Vector3, camera: ThreeCamera) =>
  (_: object, elapsed: number) => {
    const modX = Math.ceil(newCameraPosition.x) >= 0 ? 1 : -1;
    const delta = Math.sin(Math.PI * elapsed) * modX;

    camera.position.set(
      cameraPosition.x + delta,
      cameraPosition.y,
      cameraPosition.z
    );
  };

const handleTargetPosUpdate =
  (targetPosition: Vector3, camera: ThreeCamera) => () => {
    camera.lookAt(targetPosition);
  };

export const animateCamera = (params: IHandleScrollParams) => {
  const { page, newPage, camera, onStart, onComplete } = params;
  const cameraPosition = camera.position.clone();
  const targetPosition = page.target.clone();
  const { camera: newCameraPosition, target: newTargetPosition } = newPage;

  new Tween(cameraPosition)
    .to(newCameraPosition, CAMERA_ANIMATION_DURATION)
    .onUpdate(handleCameraPosUpdate(cameraPosition, newCameraPosition, camera))
    .start();
  new Tween(targetPosition)
    .to(newTargetPosition, CAMERA_ANIMATION_DURATION)
    .onStart(onStart)
    .onComplete(onComplete)
    .onUpdate(handleTargetPosUpdate(targetPosition, camera))
    .start();
};
