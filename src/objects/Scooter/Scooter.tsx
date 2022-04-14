import React from 'react';

import { Group, Vector3 } from 'three';

import { Annotation } from '../../components/Annotation';
import { Shadow } from '../Shadow';
import { ScooterFrontLight } from '../ScooterFrontLight';

export interface IScooterProps {
  scene: Group;
  contentPage: boolean;
  frontLightPosition: Vector3;
}

export const Scooter: React.FC<IScooterProps> = (props) => {
  const { scene, contentPage, frontLightPosition } = props;

  return (
    <group dispose={null}>
      <primitive object={scene}>
        <Annotation contentPage={contentPage} />
      </primitive>
      <ScooterFrontLight position={frontLightPosition} />
      <Shadow />
    </group>
  );
};
