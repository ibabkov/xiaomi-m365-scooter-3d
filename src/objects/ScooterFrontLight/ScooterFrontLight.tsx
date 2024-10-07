import React from 'react';

import { Object3D, Vector3 } from 'three';
import { SpotLight } from '@react-three/drei';

export type ScooterFrontLightProps = {
	position: Vector3;
	target: Object3D;
};

export const ScooterFrontLight: React.FC<ScooterFrontLightProps> = props => {
	const { target, position } = props;

	return (
		<SpotLight
			color={'#b7b7b7'}
			castShadow={false}
			distance={4}
			angle={0.01}
			attenuation={1.5}
			anglePower={3}
			radiusTop={0.005}
			radiusBottom={1}
			target={target}
			position={position}
		/>
	);
};
