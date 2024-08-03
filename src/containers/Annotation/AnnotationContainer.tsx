import React from 'react';

import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { Annotation as AnnotationComponent } from '../../components/Annotation';

export const AnnotationContainer: React.FC = () => {
	const { gl } = useThree();
	const [{ page, scene }] = useScooterSceneState();
	const { contentPage } = page;
	const { movingCamera } = scene;
	const portalRef = React.useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement);

	return (
		<Html portal={portalRef} scale={0.3} position={[0, -0.3, 0]}>
			<AnnotationComponent hidden={contentPage || movingCamera} />
		</Html>
	);
};
