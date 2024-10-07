import { Object3D, Vector3 } from 'three';

export const getFrontLightPosition = (node: Object3D, initialPosition: Vector3): Vector3 => {
	const { name, position } = node;

	return name === 'Target_5' ? position : initialPosition;
};
