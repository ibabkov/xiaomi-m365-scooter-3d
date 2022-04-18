import React from 'react';

import { GLTF } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';

export const useScooterModelAnimate = (model: GLTF) => {
  const { scene, animations } = model;
  const { actions } = useAnimations(animations, scene);
  const totalAnimationDuration = animations.reduce(
    (maxDuration, { duration }) => Math.max(maxDuration, duration),
    0
  );
  const playScooterAnimations = React.useCallback(() => {
    actions.rotateFrontWheel?.reset().play();
    actions.rotateRearWheel?.reset().play();
  }, []);

  return { totalAnimationDuration, playScooterAnimations };
};
