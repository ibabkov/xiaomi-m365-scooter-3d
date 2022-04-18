import React from 'react';

import { Group } from 'three';

export interface IScooterProps {
  scene: Group;
  annotation: React.ReactNode;
  frontLight: React.ReactNode;
  shadow: React.ReactNode;
}

export const Scooter: React.FC<IScooterProps> = (props) => {
  const { scene, annotation, shadow, frontLight } = props;

  return (
    <group dispose={null}>
      <primitive object={scene}>{annotation}</primitive>
      {frontLight}
      {shadow}
    </group>
  );
};
