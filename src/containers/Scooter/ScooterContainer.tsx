'use client';

import React from 'react';

import { Group } from 'three';

import { AnnotationContainer } from '../Annotation';
import { ScooterFrontLightContainer } from '../ScooterFrontLight';
import { ShadowContainer } from '../Shadow';
import { Scooter } from '../../objects/Scooter';

export type ScooterContainerProps = {
	scene: Group;
	playScooterAnimations: () => void;
	stopScooterAnimations: () => void;
};

const ScooterContainerComponent = (props: ScooterContainerProps) => {
	const { scene, playScooterAnimations } = props;

	React.useEffect(playScooterAnimations, []);

	return (
		<Scooter scene={scene} annotation={<AnnotationContainer />} frontLight={<ScooterFrontLightContainer />} shadow={<ShadowContainer />} />
	);
};

export const ScooterContainer = React.memo(ScooterContainerComponent, () => true);
