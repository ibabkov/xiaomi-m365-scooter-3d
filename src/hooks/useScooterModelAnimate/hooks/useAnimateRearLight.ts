import { Material, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';
import { Easing } from '@tweenjs/tween.js';

import { OnAnimateOptions, useAnimateWithScooter } from '../../useAnimateWithScooter';
import { REAR_LIGHT_MAX_EMISSIVE, REAR_LIGHT_MIN_EMISSIVE, REAR_LIGHT_OPACITY } from '../../../constants/rearLight';
import { SCOOTER_RUNNING_DURATION } from '../../../constants/scooterAnimation';

const START_ANIMATION_DURATION = 0.15;

export const useAnimateRearLight = (material: Material, totalAnimationDuration: number, animation: boolean) => {
	const uniform = useAnimateWithScooter({
		totalAnimationDuration,
		onAnimate: handleAnimateRearLight,
	});

	useFrame(() => {
		if (animation) {
			const rearLamp = material as MeshStandardMaterial;
			const glowProgress = uniform.value / SCOOTER_RUNNING_DURATION;

			rearLamp.opacity = REAR_LIGHT_OPACITY + uniform.value;
			rearLamp.emissiveIntensity = REAR_LIGHT_MIN_EMISSIVE + glowProgress * (REAR_LIGHT_MAX_EMISSIVE - REAR_LIGHT_MIN_EMISSIVE);
			rearLamp.needsUpdate = true;
		}
	});
};

function handleAnimateRearLight(params: OnAnimateOptions): number {
	const { progress, duration } = params;
	const startAnimationDuration = duration * START_ANIMATION_DURATION;
	const idleDuration = duration * SCOOTER_RUNNING_DURATION;
	const animationDuration = duration - idleDuration;

	const idle = progress < idleDuration;
	const startAnimation = progress < startAnimationDuration;

	let newProgress = idle ? 0 : (progress - idleDuration) / animationDuration;
	newProgress = startAnimation ? 1 : newProgress;

	return SCOOTER_RUNNING_DURATION * Easing.Exponential.Out(newProgress);
}
