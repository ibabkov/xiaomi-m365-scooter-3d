import React from 'react';

import { ACESFilmicToneMapping, PCFSoftShadowMap, SRGBColorSpace } from 'three';
import { Canvas, RootState } from '@react-three/fiber';

import { useCreateScooterSceneContext, useScooterSceneContext } from '../../hooks/scooterSceneContext';
import { ScrollVisualizationContainer } from '../../containers/ScrollVisualization';
import { ScrollMotivationContainer } from '../../containers/ScrollMotivation';
import { DescriptionContainer } from '../../containers/Description';
import { ScooterCanvas } from '../../containers/ScooterCanvas';
import { HtmlContainer } from '../../containers/HtmlContainer';
import { CAMERA_INITIAL_OPTIONS } from '../../constants/camera';

export const ScooterScene: React.FC = () => {
	const scooterSceneContext = useScooterSceneContext();
	const scooterSceneContextValue = useCreateScooterSceneContext();

	return (
		<>
			<Canvas dpr={[1, 3]} camera={CAMERA_INITIAL_OPTIONS} shadows={{ enabled: true, type: PCFSoftShadowMap }} onCreated={handleCreate}>
				<scooterSceneContext.Provider value={scooterSceneContextValue}>
					<ScooterCanvas />
				</scooterSceneContext.Provider>
			</Canvas>
			<scooterSceneContext.Provider value={scooterSceneContextValue}>
				<HtmlContainer>
					<ScrollMotivationContainer />
					<DescriptionContainer />
					<ScrollVisualizationContainer />
				</HtmlContainer>
			</scooterSceneContext.Provider>
		</>
	);
};

function handleCreate({ gl: renderer }: RootState) {
	renderer.toneMapping = ACESFilmicToneMapping;
	renderer.outputColorSpace = SRGBColorSpace;
}
