import React from 'react';

import { ScrollControls } from '@react-three/drei';

import { ScrollControl } from '../ScrollControl';
import { PlaneContainer } from '../Plane';
import { ScooterContainer } from '../Scooter';
import { Lights } from '../../objects/Lights';
import { useScooterModelAnimate } from '../../hooks/scooterModelAnimate';
import { useScooterModelPrepare } from '../../hooks/scooterModelPrepare';
import { useModifyScooterSceneState, useScooterSceneState } from '../../hooks/scooterSceneContext';
import { IModifyAfterLoadingParams, modifyOnSceneLoaded } from '../../modifiers/modifyOnSceneLoaded';

export const ScooterCanvas: React.FC = () => {
	const [{ pages, scene }] = useScooterSceneState();
	const { loaded: sceneLoaded } = scene;
	const { frontLightPosition, model } = useScooterModelPrepare(pages);
	const handleLoaded = useModifyScooterSceneState<IModifyAfterLoadingParams>(modifyOnSceneLoaded);
	const { totalAnimationDuration, playScooterAnimations } = useScooterModelAnimate(model);

	React.useEffect(() => {
		handleLoaded({
			pages,
			frontLightPosition,
			totalAnimationDuration,
		});
	}, []);

	if (!sceneLoaded) {
		return null;
	}

	return (
		<group>
			<Lights />
			<ScrollControls infinite={true} distance={10} pages={pages.length}>
				<ScrollControl />
				<ScooterContainer scene={model.scene} playScooterAnimations={playScooterAnimations} />
			</ScrollControls>
			<PlaneContainer />
		</group>
	);
};
