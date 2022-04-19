import React from 'react';

import { GLTF } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';

import { useAnimateRearLight } from './hooks';
import { getTotalAnimationDuration } from './helpers';

export const useScooterModelAnimate = (model: GLTF) => {
  const { scene, animations, materials } = model;
  const { actions } = useAnimations(animations, scene);
  const [animation, setAnimation] = React.useState(false);
  const totalAnimationDuration = getTotalAnimationDuration(animations);
  const playScooterAnimations = React.useCallback(() => {
    actions.rotateFrontWheel?.reset().play();
    actions.rotateRearWheel?.reset().play();
    setAnimation(true);
  }, []);

  useAnimateRearLight(
    materials['light rear lamp'],
    totalAnimationDuration,
    animation
  );

  return { totalAnimationDuration, playScooterAnimations };
};
