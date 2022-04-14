import React from 'react';

import { Euler } from 'three';
import { Circle } from '@react-three/drei';

import { vertexShader, fragmentShader } from '../../shaders/planeMaterial';
import { useAnimateShadow } from './hooks';

export const Shadow: React.FC = () => {
  const { uMod } = useAnimateShadow();
  const rotation = React.useMemo(
    () => new Euler(-(Math.PI / 2), 0, Math.PI / 2),
    []
  );

  return (
    <Circle
      position={[0, 0, 0]}
      args={[1, 1024]}
      scale={[0.3, 2, 1]}
      receiveShadow={false}
      castShadow={false}
      rotation={rotation}
    >
      <shaderMaterial
        attach="material"
        uniforms={{ uMod }}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent
      />
    </Circle>
  );
};
