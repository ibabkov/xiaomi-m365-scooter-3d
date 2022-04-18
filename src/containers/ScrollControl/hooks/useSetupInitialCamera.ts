import React from 'react';

import { useThree } from '@react-three/fiber';

import { useScooterSceneState } from '../../../hooks/scooterSceneContext';

export const useSetupInitialCamera = () => {
  const { camera } = useThree();
  const [{ pages }] = useScooterSceneState();

  React.useEffect(() => {
    const firstPage = pages[0];
    const { x, y, z } = firstPage.camera;

    camera.position.set(x, y, z);
    camera.lookAt(firstPage.target);
  }, []);
};
