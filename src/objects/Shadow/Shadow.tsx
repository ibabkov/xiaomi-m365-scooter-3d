import React, { forwardRef } from 'react';

import { Shadow as ThreeShadow } from '@react-three/drei';
import type { ShadowType } from '@react-three/drei';
import { Vector3 } from 'three';

export type ShadowProps = {
	position?: Vector3;
	scale?: Vector3;
};

export const Shadow = forwardRef<ShadowType, ShadowProps>((props, ref) => {
	const { position, scale } = props;

	return <ThreeShadow ref={ref} color="black" position={position} scale={scale} colorStop={0} opacity={0.7} />;
});
