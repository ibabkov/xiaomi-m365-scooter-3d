import React from 'react';

import { Object3D, Vector3 } from 'three';

import { ScooterFrontLight } from '../../objects/ScooterFrontLight';
import { useStore } from '../../hooks/useStore';

export const ScooterFrontLightContainer: React.FC = () => {
	const { scene } = useStore();
	const { frontLightPosition: position } = scene;
	const target = useFrontLightTarget(position);

	return <ScooterFrontLight position={position} target={target} />;
};

function useFrontLightTarget(position: Vector3) {
	return React.useMemo(() => {
		const { x, y, z } = position;
		const resultTarget = new Object3D();

		resultTarget.position.set(x - 2, y - 0.5, z);

		return resultTarget;
	}, [position]);
}
