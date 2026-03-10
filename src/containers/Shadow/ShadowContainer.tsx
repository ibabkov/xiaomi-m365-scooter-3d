'use client';

import React from 'react';

import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { Easing } from '@tweenjs/tween.js';
import { ShadowType } from '@react-three/drei';

import { useAnimateWithScooter, OnAnimateOptions } from '../../hooks/useAnimateWithScooter';
import { Shadow } from '../../objects/Shadow';
import { useStore } from '../../hooks/useStore';

const DEFAULT_SCALE = new Vector3(1.2, 0.13, 1);
const DEFAULT_POSITION = new Vector3(0.02, 0, 0);
const DEFAULT_ANIMATION_MOD = 0.2;

export const ShadowContainer = () => {
	const shadowRef = React.useRef<ShadowType>(null);
	const { scene } = useStore();
	const { totalAnimationDuration } = scene;
	const { value: modY } = useAnimateWithScooter({
		totalAnimationDuration,
		onAnimate: handleAnimate,
	});

	useFrame(() => {
		if (shadowRef.current) {
			shadowRef.current.scale.setX(DEFAULT_SCALE.x + modY);
			shadowRef.current.position.setX(DEFAULT_POSITION.x + modY);
		}
	});

	return <Shadow ref={shadowRef} position={DEFAULT_POSITION} scale={DEFAULT_SCALE} />;
};

function handleAnimate(params: OnAnimateOptions): number {
	const { duration, progress, animationPart, totalAnimationParts } = params;
	const value = Math.PI * Easing.Quartic.InOut(progress / duration);
	const lastValue = Math.sin(animationPart) / totalAnimationParts;

	return (Math.sin(value) / totalAnimationParts + lastValue) * DEFAULT_ANIMATION_MOD;
}
