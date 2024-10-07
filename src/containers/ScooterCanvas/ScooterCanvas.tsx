import React from 'react';

import { ScrollControls } from '../ScrollControls';
import { PlaneContainer } from '../Plane';
import { ScooterContainer } from '../Scooter';
import { Lights } from '../../objects/Lights';
import { useScooterModelAnimate } from '../../hooks/useScooterModelAnimate';
import { useScooterModelPrepare } from '../../hooks/useScooterModelPrepare';
import { useStore } from '../../hooks/useStore';

export const ScooterCanvas: React.FC = () => {
	const { pages, scene, actions } = useStore();
	const { loaded: sceneLoaded } = scene;
	const { frontLightPosition, model } = useScooterModelPrepare(pages);
	const { totalAnimationDuration, playScooterAnimations, stopScooterAnimations } = useScooterModelAnimate(model);
	const isWindows = navigator.userAgent.includes('Windows');

	React.useEffect(() => {
		actions.prepareScene({
			pages,
			frontLightPosition,
			totalAnimationDuration,
		});
	}, []);

	if (!sceneLoaded) {
		return null;
	}

	return (
		<>
			<ScrollControls pages={pages} distance={isWindows ? 100 : 10} />
			<Lights />
			<ScooterContainer scene={model.scene} stopScooterAnimations={stopScooterAnimations} playScooterAnimations={playScooterAnimations} />
			<PlaneContainer />
		</>
	);
};
