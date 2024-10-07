import React from 'react';

import { Euler, IUniform, Vector3 } from 'three';
import { Plane as ThreePlane } from '@react-three/drei';

import { vertexShader, fragmentShader } from '../../shaders/planeMaterial';

const DEFAULT_POSITION = new Vector3(0, -0.001, 0);
const DEFAULT_ROTATION = new Euler(-(Math.PI / 2), 0, Math.PI / 2);

export type PlaneProps = {
	uniform: IUniform;
};

const PlaneComponent: React.FC<PlaneProps> = props => {
	const [rotation] = React.useState(DEFAULT_ROTATION);
	const { uniform } = props;

	return (
		<ThreePlane position={DEFAULT_POSITION} args={[32, 32]} receiveShadow={false} castShadow={false} rotation={rotation}>
			<shaderMaterial
				attach="material"
				uniforms={{ uModY: uniform }}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				transparent
			/>
		</ThreePlane>
	);
};

export const Plane = React.memo<PlaneProps>(PlaneComponent, ({ uniform: { value: prevV } }, { uniform: { value: v } }) => prevV === v);
