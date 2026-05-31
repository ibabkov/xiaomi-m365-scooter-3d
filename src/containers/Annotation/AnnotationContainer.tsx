'use client';

import React from 'react';

import { Html } from '@react-three/drei';
import { useThree } from '@react-three/fiber';

import { Annotation as AnnotationComponent } from '../../components/Annotation';
import { useStore } from '../../hooks/useStore';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { DESKTOP_MEDIA_QUERY } from '../../constants/breakpoints';

const MOBILE_POSITION: [number, number, number] = [0, 1.7, 0];
const DESKTOP_POSITION: [number, number, number] = [0, -0.3, 0];

export const AnnotationContainer = () => {
	const { gl } = useThree();
	const { page, scene } = useStore();
	const { contentPage } = page;
	const { movingCamera } = scene;
	const isDesktop = useMediaQuery(DESKTOP_MEDIA_QUERY);
	const portalRef = React.useRef<HTMLElement>(gl.domElement.parentNode as HTMLElement);

	return (
		<Html portal={portalRef} scale={0.3} style={{ pointerEvents: 'none' }} position={isDesktop ? DESKTOP_POSITION : MOBILE_POSITION}>
			<AnnotationComponent hidden={contentPage || movingCamera} />
		</Html>
	);
};
