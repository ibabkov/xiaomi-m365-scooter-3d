'use client';

import React from 'react';

import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import { Annotation as AnnotationComponent } from '../../components/Annotation';
import { useStore } from '../../hooks/useStore';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { DESKTOP_MEDIA_QUERY } from '../../constants/breakpoints';

export const AnnotationContainer = () => {
	const { gl } = useThree();
	const { page, scene } = useStore();
	const { contentPage } = page;
	const { movingCamera } = scene;
	const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
	const portalRef = React.useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement);

	if (!isDesktop) return null;

	return (
		<Html portal={portalRef} scale={0.3} style={{ pointerEvents: 'none' }} position={[0, -0.3, 0]}>
			<AnnotationComponent hidden={contentPage || movingCamera} />
		</Html>
	);
};
