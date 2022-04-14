import React from 'react';

import { Vector3, Object3D } from 'three';
import { SpotLight } from '@react-three/drei';

export interface IScooterFrontLightProps {
  position: Vector3;
}

export const ScooterFrontLight: React.FC<IScooterFrontLightProps> = (props) => {
  const { position } = props;

  const target = React.useMemo(() => {
    const { x, y, z } = position;
    const resultTarget = new Object3D();

    resultTarget.position.set(x - 2, y - 0.5, z);

    return resultTarget;
  }, []);

  return (
    <SpotLight
      target={target}
      position={position}
      castShadow={false}
      distance={4}
      angle={0.01}
      attenuation={1.5}
      anglePower={3}
      radiusTop={0.005}
      radiusBottom={1}
    />
  );
};
