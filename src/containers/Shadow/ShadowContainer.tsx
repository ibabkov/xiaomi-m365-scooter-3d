import React from 'react';

import { useFrame } from '@react-three/fiber';
import { Vector3 } from 'three';
import { Easing } from '@tweenjs/tween.js';

import {
  useAnimateWithScooter,
  IOnAnimateParams,
} from '../../hooks/animateWithScooter';
import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { Shadow } from '../../objects/Shadow';

const DEFAULT_SCALE = new Vector3(1.2, 0.13, 1);
const DEFAULT_POSITION = new Vector3(0.02, 0, 0);
const DEFAULT_ANIMATION_MOD = 0.2;

export const ShadowContainer: React.FC = () => {
  const [scale, setScale] = React.useState(DEFAULT_SCALE);
  const [position, setPosition] = React.useState(DEFAULT_POSITION);
  const [{ scene }] = useScooterSceneState();
  const { totalAnimationDuration } = scene;
  const { value: modY } = useAnimateWithScooter({
    totalAnimationDuration,
    onAnimate: handleAnimate,
  });

  useFrame(() => {
    const newScale = new Vector3()
      .copy(DEFAULT_SCALE)
      .setX(DEFAULT_SCALE.x + modY);
    const newPosition = new Vector3()
      .copy(DEFAULT_POSITION)
      .setX(DEFAULT_POSITION.x + modY);

    setScale(newScale);
    setPosition(newPosition);
  });

  return <Shadow position={position} scale={scale} />;
};

function handleAnimate(params: IOnAnimateParams): number {
  const { duration, progress, animationPart, totalAnimationParts } = params;
  const value = Math.PI * Easing.Quartic.InOut(progress / duration);
  const lastValue = Math.sin(animationPart) / totalAnimationParts;

  return (
    (Math.sin(value) / totalAnimationParts + lastValue) * DEFAULT_ANIMATION_MOD
  );
}
