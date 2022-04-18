import React from 'react';

import { Html } from '@react-three/drei';

import { useScooterSceneState } from '../../hooks/scooterSceneContext';
import { Annotation as AnnotationComponent } from '../../components/Annotation';

export const AnnotationContainer: React.FC = () => {
  const [{ page, scene }] = useScooterSceneState();
  const { contentPage } = page;
  const { movingCamera } = scene;

  return (
    <Html scale={0.3} position={[0, -0.3, 0]}>
      <AnnotationComponent hidden={contentPage || movingCamera} />
    </Html>
  );
};
