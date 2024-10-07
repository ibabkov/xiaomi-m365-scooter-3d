import React, { useEffect, useRef, useState } from 'react';

import { GLTF } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';

import { useAnimateRearLight } from './hooks';
import { getTotalAnimationDuration } from './helpers';

export const useScooterModelAnimate = (model: GLTF) => {
	const { scene: modelScene, animations, materials } = model;
	const { actions } = useAnimations(animations, modelScene);
	const [animation, setAnimation] = React.useState(false);
	const totalAnimationDuration = getTotalAnimationDuration(animations);
	const playScooterAnimations = React.useCallback(() => {
		actions.rotateFrontWheel?.play();
		actions.rotateRearWheel?.play();

		setAnimation(true);
	}, [actions.rotateFrontWheel, actions.rotateRearWheel]);
	const stopScooterAnimations = React.useCallback(() => {
		actions.rotateFrontWheel?.stop();
		actions.rotateRearWheel?.stop();

		setAnimation(true);
	}, [actions.rotateFrontWheel, actions.rotateRearWheel]);

	useAnimateRearLight(materials['light rear lamp'], totalAnimationDuration, animation);

	return { totalAnimationDuration, playScooterAnimations, stopScooterAnimations };
};
