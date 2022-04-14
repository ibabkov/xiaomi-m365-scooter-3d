import React from 'react';

import { GLTF } from 'three-stdlib';
import { useAnimations } from '@react-three/drei';

export const useScooterModelAnimate = (model: GLTF) => {
  const { scene, animations } = model;
  const { actions } = useAnimations(animations, scene);

  React.useEffect(() => {
    actions.rotateFrontWheel?.reset().play();
    actions.rotateRearWheel?.reset().play();
  }, []);
};
