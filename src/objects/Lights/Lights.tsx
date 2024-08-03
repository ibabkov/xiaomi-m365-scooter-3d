import React from 'react';

import { Color, Object3D, DirectionalLight } from 'three';

const DIRECTIONAL_LIGHTS_COLOR = new Color(0xfdeadd);
const AMBIENT_LIGHT_COLOR = new Color(0xffffff);

const getDirectionalLightsProps = () => ({
	target: new Object3D(),
	color: DIRECTIONAL_LIGHTS_COLOR,
	castShadow: true,
});

export const Lights: React.FC = () => {
	const props = React.useMemo(getDirectionalLightsProps, []);
	const light1 = React.useRef<DirectionalLight>();
	const light2 = React.useRef<DirectionalLight>();

	React.useEffect(() => {
		if (light1.current && light2.current) {
			light1.current.shadow.normalBias = 0.02;
			light2.current.shadow.normalBias = 0.008;
			light1.current.shadow.camera.far = light2.current.shadow.camera.far = 3;
			light1.current.shadow.bias = light2.current.shadow.bias = -0.00005;
		}
	}, []);

	return (
		<>
			<ambientLight intensity={0.1} color={AMBIENT_LIGHT_COLOR} />
			<directionalLight
				{...props}
				position={[-1, 1.5, -0.5]}
				ref={light1 as React.RefObject<DirectionalLight>}
				intensity={2 * Math.PI}
				// intensity={2}
				shadow-mapSize={[512, 512]}
			/>
			<directionalLight
				{...props}
				position={[1, 1, 1]}
				ref={light2 as React.RefObject<DirectionalLight>}
				intensity={1.5 * Math.PI}
				shadow-mapSize={[2048, 2048]}
			/>
		</>
	);
};
