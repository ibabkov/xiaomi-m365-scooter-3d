import React from 'react';

import { Group } from 'three';

export type ScooterProps = {
	scene: Group;
	annotation: React.ReactNode;
	frontLight: React.ReactNode;
	shadow: React.ReactNode;
};

export const Scooter: React.FC<ScooterProps> = props => {
	const { scene, annotation, shadow, frontLight } = props;

	return (
		<group dispose={null}>
			<primitive object={scene}>{annotation}</primitive>
			{frontLight}
			{shadow}
		</group>
	);
};
