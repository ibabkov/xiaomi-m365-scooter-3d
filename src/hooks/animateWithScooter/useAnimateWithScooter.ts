import React from 'react';

import { Clock, IUniform } from 'three';
import { useFrame } from '@react-three/fiber';

import { IAnimateWithScooterParams } from './types';

enum EPhase {
  'Pause',
  Animation,
}

const DEFAULT_ANIMATION_DURATION = 0.73;

export const useAnimateWithScooter = (
  params: IAnimateWithScooterParams
): IUniform => {
  const [phase, setPhase] = React.useState(EPhase.Animation);
  const [animationPart, setAnimationPart] = React.useState(0);
  const uniform = React.useMemo(() => ({ value: 0 }), []);
  const clock = React.useMemo(() => new Clock(), []);
  const { totalAnimationDuration, onAnimate, totalAnimationParts = 1 } = params;
  const duration = totalAnimationDuration * DEFAULT_ANIMATION_DURATION;

  const runAnimation = React.useCallback(() => setPhase(EPhase.Animation), []);

  const stopAnimation = React.useCallback(() => {
    const lastPart = animationPart === totalAnimationParts - 1;
    setPhase(EPhase.Pause);
    setAnimationPart(lastPart ? 0 : animationPart + 1);
  }, [animationPart, totalAnimationParts]);

  useFrame(() => {
    const time = clock.getElapsedTime() % totalAnimationDuration;

    if (phase === EPhase.Animation) {
      if (time > duration) stopAnimation();
      else {
        // Animate
        uniform.value = onAnimate({
          progress: time % duration,
          duration,
          animationPart,
          totalAnimationParts,
        });
      }
    } else {
      if (time <= duration) runAnimation();
    }
  });

  return uniform;
};
