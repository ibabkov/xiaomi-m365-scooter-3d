import React from 'react';

import { Shadow as ThreeShadow } from '@react-three/drei';
import { Vector3 } from 'three';

export type ShadowProps = {
	position: Vector3;
	scale: Vector3;
};

export const Shadow: React.FC<ShadowProps> = props => {
	const { position, scale } = props;

	return <ThreeShadow color="black" position={position} scale={scale} colorStop={0} opacity={0.7} />;
};
