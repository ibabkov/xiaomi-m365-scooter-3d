import React from 'react';

import { Timer, IUniform } from 'three';
import { useFrame } from '@react-three/fiber';

import { AnimateWithScooterParams } from './types';
import { SCOOTER_ANIMATION_DURATION } from '../../constants/scooterAnimation';

enum EPhase {
	Pause,
	Animation,
}

export const useAnimateWithScooter = (params: AnimateWithScooterParams): IUniform => {
	const { current: timer } = React.useRef(new Timer());
	const [phase, setPhase] = React.useState(EPhase.Animation);
	const [animationPart, setAnimationPart] = React.useState(0);
	const uniform = React.useMemo(() => ({ value: 0 }), []);
	const { totalAnimationDuration, onAnimate, totalAnimationParts = 1 } = params;
	const duration = totalAnimationDuration * SCOOTER_ANIMATION_DURATION;

	const runAnimation = React.useCallback(() => setPhase(EPhase.Animation), []);

	const stopAnimation = React.useCallback(() => {
		const lastPart = animationPart === totalAnimationParts - 1;
		setPhase(EPhase.Pause);
		setAnimationPart(lastPart ? 0 : animationPart + 1);
	}, [animationPart, totalAnimationParts]);

	React.useEffect(() => {
		return () => {
			timer.dispose();
		};
	}, [timer]);

	useFrame(() => {
		timer.update();

		const time = timer.getElapsed() % totalAnimationDuration;

		if (phase === EPhase.Animation) {
			if (time > duration) {
				stopAnimation();
			} else {
				uniform.value = onAnimate({
					progress: time % duration,
					duration,
					animationPart,
					totalAnimationParts,
				});
			}
		} else {
			if (time <= duration) {
				runAnimation();
			}
		}
	});

	return uniform;
};
