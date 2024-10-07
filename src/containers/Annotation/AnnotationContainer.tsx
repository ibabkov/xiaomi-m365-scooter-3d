import React from 'react';

import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import { Annotation as AnnotationComponent } from '../../components/Annotation';
import { useStore } from '../../hooks/useStore';

export const AnnotationContainer: React.FC = () => {
	const { gl } = useThree();
	const { page, scene } = useStore();
	const { contentPage } = page;
	const { movingCamera } = scene;
	const portalRef = React.useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement);

	return (
		<Html portal={portalRef} scale={0.3} style={{ pointerEvents: 'none' }} position={[0, -0.3, 0]}>
			<AnnotationComponent hidden={contentPage || movingCamera} />
		</Html>
	);
};
