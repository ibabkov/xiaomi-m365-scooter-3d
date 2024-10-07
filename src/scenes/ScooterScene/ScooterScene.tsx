import React from 'react';

import { ACESFilmicToneMapping, PCFSoftShadowMap, SRGBColorSpace } from 'three';
import { Canvas, RootState } from '@react-three/fiber';

import { ScrollMotivationContainer } from '../../containers/ScrollMotivation';
import { DescriptionContainer } from '../../containers/Description';
import { ScooterCanvas } from '../../containers/ScooterCanvas';
import { HtmlContainer } from '../../containers/HtmlContainer';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';
import { useStore } from '../../hooks/useStore';

export const ScooterScene: React.FC = () => {
	// Initialize the store
	useStore();

	return (
		<>
			<Canvas dpr={[1, 3]} camera={CAMERA_INITIAL_OPTIONS} shadows={{ enabled: true, type: PCFSoftShadowMap }} onCreated={handleCreate}>
				<ScooterCanvas />
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
