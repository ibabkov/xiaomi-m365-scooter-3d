import React from 'react';

import { Description } from '../../components/Description';
import { useScooterSceneState } from '../../hooks/scooterSceneContext';

export const DescriptionContainer: React.FC = () => {
  const [{ page, scene }] = useScooterSceneState();
  const { current } = page;
  const { movingCamera } = scene;
  const { description } = current;

  return (
    <Description
      hidden={!description || movingCamera}
      text={description?.text}
      title={description?.title}
    />
  );
};
