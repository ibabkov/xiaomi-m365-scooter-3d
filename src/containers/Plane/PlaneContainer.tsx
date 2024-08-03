import React from 'react';

import { Easing } from '@tweenjs/tween.js';

import { IOnAnimateParams, useAnimateWithScooter } from '../../hooks/animateWithScooter';
import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { Plane } from '../../objects/Plane';

const DEFAULT_TOTAL_ANIMATION_PARTS = 10;

export const PlaneContainer: React.FC = () => {
	const [{ scene }] = useScooterSceneState();
	const { totalAnimationDuration } = scene;
	const uniform = useAnimateWithScooter({
		totalAnimationDuration,
		onAnimate: handleAnimate,
		totalAnimationParts: DEFAULT_TOTAL_ANIMATION_PARTS,
	});

	return <Plane uniform={uniform} />;
};

function handleAnimate(params: IOnAnimateParams): number {
	const { progress, duration, animationPart, totalAnimationParts } = params;
	const value = Easing.Quartic.InOut(progress / duration);
	const lastValue = animationPart / totalAnimationParts;

	return value / totalAnimationParts + lastValue;
}
