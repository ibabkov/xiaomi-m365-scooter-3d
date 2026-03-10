import React, { Suspense } from 'react';

import { ACESFilmicToneMapping, PCFShadowMap, SRGBColorSpace } from 'three';
import { Canvas, RootState } from '@react-three/fiber';
import { Html } from '@react-three/drei';

import { ScrollMotivationContainer } from '../../containers/ScrollMotivation';
import { DescriptionContainer } from '../../containers/Description';
import { ScooterCanvas } from '../../containers/ScooterCanvas';
import { HtmlContainer } from '../../containers/HtmlContainer';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { useStore } from '../../hooks/useStore';
import { CanvasFallback } from '@/components/CanvasFallback';

export const ScooterScene = () => {
	// Initialize the store
	useStore();

	return (
		<>
			<Canvas dpr={[1, 3]} camera={CAMERA_INITIAL_OPTIONS} shadows={{ enabled: true, type: PCFShadowMap }} onCreated={handleCreate}>
				<Suspense
					fallback={
						<Html>
							<CanvasFallback />
						</Html>
					}
				>
					<ScooterCanvas />
				</Suspense>
			</Canvas>
			<HtmlContainer>
				<ScrollMotivationContainer />
				<DescriptionContainer />
			</HtmlContainer>
		</>
	);
};

function handleCreate({ gl: renderer }: RootState) {
	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.outputColorSpace = SRGBColorSpace;
}
