import React from 'react';

import { Euler, IUniform, ShaderMaterial, Vector3 } from 'three';
import { Plane as ThreePlane } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

import { vertexShader, fragmentShader } from '../../shaders/planeMaterial';

const DEFAULT_POSITION = new Vector3(0, -0.001, 0);
const DEFAULT_ROTATION = new Euler(-(Math.PI / 2), 0, Math.PI / 2);

export type PlaneProps = {
	uniform: IUniform;
};

export const Plane = (props: PlaneProps) => {
	const [rotation] = React.useState(DEFAULT_ROTATION);
	const { uniform } = props;
	const materialRef = React.useRef<ShaderMaterial>(null);
	// Initial uniforms object is shallow-cloned by r3f on install (since 9.6),
	// so the hook's `uniform` reference is not retained on the material. Copy
	// the live value into the material's own uniform each frame instead.
	const initialUniforms = React.useMemo(() => ({ uModY: { value: uniform.value } }), [uniform]);

	useFrame(() => {
		const material = materialRef.current;

		if (material) {
			material.uniforms.uModY.value = uniform.value;
		}
	});

	return (
		<ThreePlane position={DEFAULT_POSITION} args={[32, 32]} receiveShadow={false} castShadow={false} rotation={rotation}>
			<shaderMaterial
				ref={materialRef}
				attach="material"
				uniforms={initialUniforms}
				vertexShader={vertexShader}
				fragmentShader={fragmentShader}
				transparent
			/>
		</ThreePlane>
	);
};
