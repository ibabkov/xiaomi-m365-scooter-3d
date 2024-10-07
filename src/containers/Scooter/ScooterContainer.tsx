import React from 'react';

import { Group } from 'three';

import { AnnotationContainer } from '../Annotation';
import { ScooterFrontLightContainer } from '../ScooterFrontLight';
import { ShadowContainer } from '../Shadow';
import { Scooter } from '../../objects/Scooter';
import { useWindowBlur } from './hooks';

export type ScooterContainerProps = {
	scene: Group;
	playScooterAnimations: () => void;
	stopScooterAnimations: () => void;
};

const ScooterContainerComponent: React.FC<ScooterContainerProps> = props => {
	const { scene, playScooterAnimations, stopScooterAnimations } = props;

	React.useEffect(playScooterAnimations, []);

	useWindowBlur(stopScooterAnimations);

	return (
		<Scooter scene={scene} annotation={<AnnotationContainer />} frontLight={<ScooterFrontLightContainer />} shadow={<ShadowContainer />} />
	);
};

export const ScooterContainer = React.memo(ScooterContainerComponent, () => true);
