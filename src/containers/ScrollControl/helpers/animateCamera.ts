import { Vector3 } from 'three';
import { Camera as ThreeCamera } from '@react-three/fiber';
import { Easing, Tween, Group } from '@tweenjs/tween.js';

import { IPage } from '../../../types/page';
import { CAMERA_ANIMATION_DURATION } from '../../../constants/camera';

export interface IHandleScrollParams {
	page: IPage;
	newPage: IPage;
	camera: ThreeCamera;
	onStart: () => void;
	onComplete: () => void;
}

const handleTargetPosUpdate = (targetPosition: Vector3, camera: ThreeCamera) => () => {
	camera.lookAt(targetPosition);
};

export const animateCamera = (params: IHandleScrollParams) => {
	const { page, newPage, camera, onStart, onComplete } = params;
	const targetPosition = page.target.clone();
	const { camera: newCameraPosition, target: newTargetPosition } = newPage;

	return new Group(
		new Tween(camera.position).to(newCameraPosition, CAMERA_ANIMATION_DURATION).easing(Easing.Quadratic.InOut).start(),
		new Tween(targetPosition)
			.to(newTargetPosition, CAMERA_ANIMATION_DURATION)
			.onStart(onStart)
			.easing(Easing.Quadratic.InOut)
			.onComplete(onComplete)
			.onUpdate(handleTargetPosUpdate(targetPosition, camera))
			.start(),
	);
};
