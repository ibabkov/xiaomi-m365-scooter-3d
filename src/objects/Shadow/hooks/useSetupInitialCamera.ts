import React from 'react';

import { Clock, IUniform } from 'three';
import { useFrame } from '@react-three/fiber';

export interface IShadowUniform {
  uMod: IUniform;
}

const SHADOW_SIZE_MOD = 1.4;
const SHADOW_INITIAL_SIZE = 1.25;
const SHADOW_ANIMATION_INTERVAL = 10; // in seconds

export const useAnimateShadow = (): IShadowUniform => {
  const uniform = React.useMemo(() => ({ uMod: { value: 1 } }), []);
  const clock = React.useMemo(() => new Clock(), []);

  useFrame(() => {
    const time = clock.getElapsedTime();
    const additionalSize =
      (time % SHADOW_ANIMATION_INTERVAL) - SHADOW_ANIMATION_INTERVAL / 2;
    const shadowSizeMod = SHADOW_ANIMATION_INTERVAL * SHADOW_SIZE_MOD;
    const modValue = Math.abs(additionalSize) / shadowSizeMod;

    uniform.uMod.value = SHADOW_INITIAL_SIZE + modValue;
  });

  return uniform;
};
