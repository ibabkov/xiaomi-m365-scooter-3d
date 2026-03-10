'use client';

import React from 'react';

import { ScrollControls } from '../ScrollControls';
import { PlaneContainer } from '../Plane';
import { ScooterContainer } from '../Scooter';
import { Lights } from '../../objects/Lights';
import { useScooterModelAnimate } from '../../hooks/useScooterModelAnimate';
import { useScooterModelPrepare } from '../../hooks/useScooterModelPrepare';
import { useStore } from '../../hooks/useStore';

export const ScooterCanvas = () => {
	const { pages: initialPages, scene, actions } = useStore();
	const { loaded: sceneLoaded } = scene;
	const { frontLightPosition, model, pages: preparedPages } = useScooterModelPrepare(initialPages);
	const { totalAnimationDuration, playScooterAnimations, stopScooterAnimations } = useScooterModelAnimate(model);
	const isWindows = navigator.userAgent.includes('Windows');

	React.useEffect(() => {
		actions.prepareScene({
			pages: preparedPages,
			frontLightPosition,
			totalAnimationDuration,
		});
	}, []);

	if (!sceneLoaded) {
		return null;
	}

	return (
		<>
			<ScrollControls pages={initialPages} distance={isWindows ? 100 : 10} />
			<Lights />
			<ScooterContainer scene={model.scene} stopScooterAnimations={stopScooterAnimations} playScooterAnimations={playScooterAnimations} />
			<PlaneContainer />
		</>
	);
};
