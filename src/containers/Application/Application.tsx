import React from 'react';

import { Canvas } from '@react-three/fiber';

import { XiaomiScooterScene } from '../../scenes/XiaomiScooter';
import { Main } from '../../components/Main';
import { CanvasFallback } from '../../components/CanvasFallback';

export const Application = () => {
  return (
    <Main>
      <React.Suspense fallback={<CanvasFallback />}>
        <Canvas shadows dpr={[1, 3]} camera={{ fov: 45 }}>
          <XiaomiScooterScene />
        </Canvas>
      </React.Suspense>
    </Main>
  );
};
