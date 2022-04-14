import React from 'react';

import { useGLTF } from '@react-three/drei';

import { traverseModelData } from './helpers';
import { IModelPrepareData } from './types';

export const useScooterModelPrepare = (): IModelPrepareData => {
  const model = useGLTF('/xiaomi-scooter/scooter.glb', true);
  const [data] = React.useState(traverseModelData(model));

  return { ...data };
};
