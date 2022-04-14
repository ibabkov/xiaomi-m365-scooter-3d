import React from 'react';

import { Camera as ThreeCamera } from '@react-three/fiber';

import { IPage } from '../../../types/page';

export const useSetupInitialCamera = (
  camera: ThreeCamera,
  firstPage: IPage
) => {
  React.useEffect(() => {
    const { x, y, z } = firstPage.camera;
    camera.position.set(x, y, z);
    camera.lookAt(firstPage.target);
  }, []);
};
