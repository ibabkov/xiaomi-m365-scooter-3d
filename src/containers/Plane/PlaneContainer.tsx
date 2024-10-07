import React from 'react';

import { Easing } from '@tweenjs/tween.js';

import { OnAnimateOptions, useAnimateWithScooter } from '../../hooks/useAnimateWithScooter';
import { Plane } from '../../objects/Plane';
import { useStore } from '../../hooks/useStore';

const DEFAULT_TOTAL_ANIMATION_PARTS = 10;

export const PlaneContainer: React.FC = () => {
	const { scene } = useStore();
	const { totalAnimationDuration } = scene;
	const uniform = useAnimateWithScooter({
		totalAnimationDuration,
		onAnimate: handleAnimate,
		totalAnimationParts: DEFAULT_TOTAL_ANIMATION_PARTS,
	});

	return <Plane uniform={uniform} />;
};

function handleAnimate(options: OnAnimateOptions): number {
	const { progress, duration, animationPart, totalAnimationParts } = options;
	const value = Easing.Quartic.InOut(progress / duration);
	const lastValue = animationPart / totalAnimationParts;

	return value / totalAnimationParts + lastValue;
}
